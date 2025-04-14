
import React from 'react';
import { Calendar, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const FactOfDay = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Fact of the Day</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover something new and fascinating every day to expand your knowledge
          </p>
        </div>
        
        <Card className="max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-scale-in">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="aspect-video md:aspect-auto md:h-full relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                alt="Tech Fact of the Day" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                <Calendar size={14} className="text-teal-600 mr-1" />
                <span className="text-xs font-medium">April 14, 2025</span>
              </div>
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent h-1/3 md:hidden"></div>
            </div>
            
            <CardContent className="p-8 flex flex-col justify-center">
              <div className="category-badge bg-purple-100 text-purple-600 mb-4">Technology</div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                Computer chips can be made with thousands of layers thinner than a human hair
              </h3>
              <p className="text-gray-600 mb-6">
                Modern semiconductor chips contain transistors with features measured in nanometers. For perspective, a human hair is about 80,000-100,000 nanometers thick, while today's most advanced chips have features as small as 3-5 nanometers!
              </p>
              <div className="flex justify-between items-center mt-auto">
                <Button variant="outline" size="sm" className="text-gray-600">
                  <Share2 size={16} className="mr-2" />
                  Share
                </Button>
                <Button className="bg-teal-500 hover:bg-teal-600">Read More</Button>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default FactOfDay;
