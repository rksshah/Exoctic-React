import React from 'react';
import { Hero } from '../components/Hero';
import { CategoryGrid } from '../components/CategoryGrid';
import { NewArrivals } from '../components/NewArrivals';
import { ShopByMaterial } from '../components/ShopByMaterial';
import { MarqueeSection } from '../components/MarqueeSection';
import { TrustProof } from '../components/TrustProof';
import { StorySection } from '../components/StorySection';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { Newsletter } from '../components/Newsletter';
import { QuickShop } from '../components/QuickShop';
import { SalesNotification } from '../components/ui/SalesNotification';
import { FloatingCTA } from '../components/ui/FloatingCTA';

export function Home() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <NewArrivals />
      <ShopByMaterial />
      <MarqueeSection />
      <TrustProof />
      <StorySection />
      <FeaturedProducts />
      <Newsletter />
      <QuickShop />
      
      {/* CRO Features */}
      <SalesNotification />
      <FloatingCTA />
    </>
  );
}