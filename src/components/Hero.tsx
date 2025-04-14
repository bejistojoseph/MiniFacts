
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-hero-pattern py-16 md:py-24 lg:py-32">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-purple-400/10 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-[15%] w-80 h-80 bg-teal-400/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block animate-fade-in px-4 py-1 rounded-full bg-white/80 backdrop-blur-sm text-teal-600 font-medium text-sm mb-6 shadow-sm">
            Discover amazing facts & smart hacks
          </span>
          
          <h1 className="animate-fade-in text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            Unlock Amazing Facts & Smart Hacks for a Better Life
          </h1>
          
          <p className="animate-fade-in text-gray-600 text-lg md:text-xl mb-8">
            Explore our collection of fascinating minifacts, clever lifehacks, and expert tips to upgrade your everyday life. Discover something new every day!
          </p>
          
          <div className="animate-fade-in flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 group">
              Explore Facts
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="border-teal-200 text-teal-600 hover:bg-teal-50">
              View Lifehacks
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
