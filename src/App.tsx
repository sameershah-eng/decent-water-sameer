/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { CartDrawer } from './components/cart/CartDrawer';
import { CartToast } from './components/common/CartToast';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import { MobileBottomBar } from './components/common/MobileBottomBar';
import { BrandedLoader } from './components/common/BrandedLoader';
import { ScrollToTop } from './components/common/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [loaderFinished, setLoaderFinished] = useState(false);

  return (
    <BrowserRouter>
      <CartProvider>
        {/* Branded First-Visit Water Drop Loader */}
        {!loaderFinished && <BrandedLoader onFinish={() => setLoaderFinished(true)} />}

        {/* Global Page Scroll Handler */}
        <ScrollToTop />

        {/* Main Application Shell */}
        <div className="flex flex-col min-h-screen bg-[#F4FAFF] text-[#0A2A6B]">
          {/* Sticky Frosted Header */}
          <Navbar />

          {/* Page Routes */}
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </div>

          {/* Wave Footer */}
          <Footer />

          {/* Interactive Slide-out Cart & WhatsApp Checkout Drawer */}
          <CartDrawer />

          {/* Add-to-Cart Toast Feedback */}
          <CartToast />

          {/* Floating WhatsApp Action Button */}
          <FloatingWhatsApp />

          {/* Mobile Bottom Quick Actions (Call & WhatsApp) */}
          <MobileBottomBar />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}
