
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getAllTips, categories } from '@/data/techTipsData';

// Import refactored components
import HeroSection from '@/components/tech-tips/HeroSection';
import CategoryNavigation from '@/components/tech-tips/CategoryNavigation';
import TechTipsGrid from '@/components/tech-tips/TechTipsGrid';
import TipProcessingDialog from '@/components/tech-tips/TipProcessingDialog';

const TechTips = () => {
  const [activeCategory, setActiveCategory] = useState('computerLaptop');
  const [processingOpen, setProcessingOpen] = useState(false);
  const [processingComplete, setProcessingComplete] = useState(false);
  const [selectedTip, setSelectedTip] = useState(null);

  const handleProcessTips = () => {
    // Open the processing dialog
    setProcessingComplete(false);
    setProcessingOpen(true);
    
    // After processing is complete (simulated with timeout)
    setTimeout(() => {
      const allTips = getAllTips();
      const randomIndex = Math.floor(Math.random() * allTips.length);
      setSelectedTip(allTips[randomIndex]);
      setProcessingComplete(true);
    }, 3000); // 3 seconds processing time
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection onProcessTips={handleProcessTips} />

        {/* Category Navigation */}
        <CategoryNavigation 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />

        {/* Tech Tips Grid */}
        <TechTipsGrid activeCategory={activeCategory} />
      </main>
      <Footer />

      {/* Processing Animation Dialog */}
      <TipProcessingDialog
        open={processingOpen}
        onOpenChange={setProcessingOpen}
        processingComplete={processingComplete}
        selectedTip={selectedTip}
      />
    </div>
  );
};

export default TechTips;
