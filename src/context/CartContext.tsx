import React, { createContext, useContext, useReducer, useEffect, useState } from 'react';
import { Product, BUSINESS_INFO } from '../data/products';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

type CartAction =
  | { type: 'ADD_ITEM'; product: Product; quantity: number }
  | { type: 'REMOVE_ITEM'; productId: string }
  | { type: 'UPDATE_QUANTITY'; productId: string; quantity: number }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; items: CartItem[] };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'LOAD_CART':
      return { items: action.items };
    case 'ADD_ITEM': {
      const existingIndex = state.items.findIndex(i => i.product.id === action.product.id);
      if (existingIndex > -1) {
        const nextItems = [...state.items];
        nextItems[existingIndex] = {
          ...nextItems[existingIndex],
          quantity: nextItems[existingIndex].quantity + action.quantity
        };
        return { items: nextItems };
      }
      return { items: [...state.items, { product: action.product, quantity: action.quantity }] };
    }
    case 'REMOVE_ITEM':
      return { items: state.items.filter(i => i.product.id !== action.productId) };
    case 'UPDATE_QUANTITY': {
      if (action.quantity <= 0) {
        return { items: state.items.filter(i => i.product.id !== action.productId) };
      }
      return {
        items: state.items.map(i =>
          i.product.id === action.productId ? { ...i, quantity: action.quantity } : i
        )
      };
    }
    case 'CLEAR_CART':
      return { items: [] };
    default:
      return state;
  }
}

interface CartContextType {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  savings: number;
  deliveryFee: number;
  total: number;
  isDrawerOpen: boolean;
  cartBounce: boolean;
  toastMessage: string | null;
  openDrawer: () => void;
  closeDrawer: () => void;
  addToCart: (product: Product, quantity?: number, sourceElement?: HTMLElement | null) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const STORAGE_KEY = 'decent_water_cart_v2';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [cartBounce, setCartBounce] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Initialize from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          dispatch({ type: 'LOAD_CART', items: parsed });
        }
      }
    } catch {
      // fallback silent
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    } catch {
      // fallback
    }
  }, [state.items]);

  const itemCount = state.items.reduce((sum, i) => sum + i.quantity, 0);

  // Subtotal based on active salePrice if available, otherwise regular price
  const subtotal = state.items.reduce((sum, item) => {
    const unitPrice = item.product.salePrice ?? item.product.price;
    return sum + unitPrice * item.quantity;
  }, 0);

  // Savings calculated vs original regular prices
  const savings = state.items.reduce((sum, item) => {
    if (item.product.salePrice) {
      const diff = item.product.price - item.product.salePrice;
      return sum + diff * item.quantity;
    }
    return sum;
  }, 0);

  // Delivery fee logic: Free if subtotal >= 1500, else 100 Rs.
  const deliveryFee = subtotal === 0 ? 0 : subtotal >= BUSINESS_INFO.freeDeliveryThreshold ? 0 : BUSINESS_INFO.standardDeliveryFee;

  const total = subtotal + deliveryFee;

  const addToCart = (product: Product, quantity: number = 1) => {
    dispatch({ type: 'ADD_ITEM', product, quantity });

    // Trigger bounce animation on cart icon
    setCartBounce(true);
    setTimeout(() => setCartBounce(false), 800);

    // Toast notification
    setToastMessage(`Added ${product.name} to cart`);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const removeFromCart = (productId: string) => {
    dispatch({ type: 'REMOVE_ITEM', productId });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', productId, quantity });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        itemCount,
        subtotal,
        savings,
        deliveryFee,
        total,
        isDrawerOpen,
        cartBounce,
        toastMessage,
        openDrawer,
        closeDrawer,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
