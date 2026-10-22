import React from 'react';
import { EliteHero } from '../components/home/EliteHero';
import { TrustStrip } from '../components/home/TrustStrip';
import { SizeLineup } from '../components/home/SizeLineup';
import { FeaturedProducts } from '../components/products/FeaturedProducts';
import { PurificationProcess } from '../components/home/PurificationProcess';
import { WhoWeServe } from '../components/home/WhoWeServe';
import { DeliverySubscription } from '../components/home/DeliverySubscription';
import { CampaignGallery } from '../components/home/CampaignGallery';
import { TestimonialsFaq } from '../components/home/TestimonialsFaq';

export const HomePage: React.FC = () => {
  return (
    <main className="min-h-screen">
      {/* 1. Elite Hero Section */}
      <EliteHero />

      {/* 2. Trust Badges Strip (from flyers) */}
      <TrustStrip />

      {/* 3. All Sizes Available Ascending Lineup */}
      <SizeLineup />

      {/* 4. Featured Products Catalog with Add to Cart */}
      <FeaturedProducts />

      {/* 5. 6-Stage Purification Process */}
      <PurificationProcess />

      {/* 6. Who We Serve in Gujar Khan & Rawalpindi */}
      <WhoWeServe />

      {/* 7. 19L Refill Delivery & Recurring Subscriptions */}
      <DeliverySubscription />

      {/* 8. Brand Campaign Gallery (Client Flyers with Lightbox) */}
      <CampaignGallery />

      {/* 9. Stats, Testimonials & FAQ Accordion */}
      <TestimonialsFaq />
    </main>
  );
};
