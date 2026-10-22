import React from 'react';
import { Bottle500 } from './Bottle500';
import { Bottle1500 } from './Bottle1500';
import { Bottle12L } from './Bottle12L';
import { Bottle19L } from './Bottle19L';
import { FamilyPack } from './FamilyPack';
import { CartonBox } from './CartonBox';

interface ProductBottleViewProps {
  bottleType: 'bottle500' | 'bottle1500' | 'familyPack' | 'bottle12L' | 'bottle19L' | 'carton';
  className?: string;
  animatedWater?: boolean;
  tiltAngle?: number;
}

export const ProductBottleView: React.FC<ProductBottleViewProps> = ({
  bottleType,
  className = 'w-auto h-full max-h-full max-w-full',
  animatedWater = false,
  tiltAngle = 0
}) => {
  switch (bottleType) {
    case 'bottle500':
      return <Bottle500 className={className} tiltAngle={tiltAngle} />;
    case 'bottle1500':
      return <Bottle1500 className={className} animatedWater={animatedWater} tiltAngle={tiltAngle} />;
    case 'bottle12L':
      return <Bottle12L className={className} tiltAngle={tiltAngle} />;
    case 'bottle19L':
      return <Bottle19L className={className} tiltAngle={tiltAngle} />;
    case 'familyPack':
      return <FamilyPack className={className} tiltAngle={tiltAngle} />;
    case 'carton':
      return <CartonBox className={className} tiltAngle={tiltAngle} />;
    default:
      return <Bottle1500 className={className} animatedWater={animatedWater} tiltAngle={tiltAngle} />;
  }
};
