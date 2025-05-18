
import React from 'react';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

interface HeroSectionProps {
  onProcessTips: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onProcessTips }) => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-white/80 backdrop-blur-sm text-blue-600 font-medium text-sm mb-6 shadow-sm">
            Tech Shortcuts
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Tech Tips & Tricks
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mb-8">
            Smart shortcuts and technical solutions to make your digital life easier
          </p>
          
          <div className="flex justify-center">
            <Button 
              onClick={onProcessTips}
              className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white shadow-md hover:shadow-lg transition-all group"
              size="lg"
            >
              <Search className="mr-2 h-5 w-5" />
              Find a Tech Tip
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
