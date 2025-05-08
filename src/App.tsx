import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ProductComparison from './components/ProductComparison';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
export function App() {
  return <div className="w-full min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ProductComparison />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>;
}