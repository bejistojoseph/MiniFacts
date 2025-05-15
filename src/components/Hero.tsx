
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { toast } = useToast();

  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/7f4a2bac-a313-49ee-94f9-b241ecfaf4df.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Animated spheres */}
      <div className="absolute inset-0 z-0">
        <div className="sphere sphere-1"></div>
        <div className="sphere sphere-2"></div>
        <div className="sphere sphere-3"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-white">
            Unlock Amazing Facts & Smart Hacks for a Better Life
          </h1>
          
          <p className="text-gray-200 text-lg md:text-xl mb-8">
            Explore our collection of fascinating minifacts, clever lifehacks, and expert tips to upgrade your everyday life.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 group"
              asChild
            >
              <Link to="/minifacts">
                Explore Facts
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-purple-200 text-purple-600 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-purple-300 hover:shadow-md transition-all duration-300"
              asChild
            >
              <Link to="/lifehacks">
                View Lifehacks
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-blue-200 text-blue-600 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-blue-300 hover:shadow-md transition-all duration-300"
              asChild
            >
              <Link to="/techtips">
                Tech Tips
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
