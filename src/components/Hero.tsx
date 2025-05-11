
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { toast } = useToast();

  return (
    <section className="relative py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-gray-900">
            Unlock Amazing Facts & Smart Hacks for a Better Life
          </h1>
          
          <p className="text-gray-600 text-lg md:text-xl mb-8">
            Explore our collection of fascinating minifacts, clever lifehacks, and expert tips to upgrade your everyday life.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 group"
              onClick={() => {
                toast({
                  title: "Amazing Facts",
                  description: "Exploring our collection of fascinating facts",
                  duration: 3000,
                });
              }}
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
              className="border-purple-200 text-purple-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-teal-50 hover:border-purple-300 hover:shadow-md transition-all duration-300"
              onClick={() => {
                toast({
                  title: "Life Hacks",
                  description: "Discovering clever lifehacks for everyday problems",
                  duration: 3000,
                });
              }}
              asChild
            >
              <Link to="/lifehacks">
                View Lifehacks
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
