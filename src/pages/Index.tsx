
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FactOfDay from '@/components/FactOfDay';
import FeaturedContent from '@/components/FeaturedContent';
import CategorySection from '@/components/CategorySection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FactOfDay />
        <FeaturedContent />
        <CategorySection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
