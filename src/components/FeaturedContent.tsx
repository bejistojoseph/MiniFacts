
import React from 'react';
import { Button } from '@/components/ui/button';
import FactCard from './FactCard';

// Sample data (in a real app, this would come from an API or database)
const featuredFacts = [
  {
    id: '1',
    title: 'Honey never spoils - archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old',
    description: `Due to its chemical makeup and low moisture content, honey creates an environment where bacteria and microorganisms cannot survive, making it one of the only foods that never spoils.`,
    category: 'Amazing Fact',
    categoryColor: 'bg-purple-100 text-purple-600',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
    slug: 'honey-never-spoils'
  },
  {
    id: '2',
    title: 'Use a rubber band to open a stuck jar lid',
    description: `Wrap a thick rubber band around the edge of a jar lid to get a better grip. The rubber creates traction, making it much easier to twist open stubborn lids.`,
    category: 'Life Hack',
    categoryColor: 'bg-teal-100 text-teal-600',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    slug: 'rubber-band-jar-hack'
  },
  {
    id: '3',
    title: 'Use airplane mode to charge your phone faster',
    description: `When you need a quick charge, switch your phone to airplane mode. This disables all wireless transmissions, which use significant battery power and slows down charging.`,
    category: 'Tech Tip',
    categoryColor: 'bg-blue-100 text-blue-600',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    slug: 'airplane-mode-charging'
  },
  {
    id: '4',
    title: 'Cats purr not just when happy, but also to heal themselves',
    description: `The frequency of a cat's purr (between 25 and 150 Hz) can improve bone density and promote healing. This may explain why cats recover more quickly from injuries than dogs.`,
    category: 'Amazing Fact',
    categoryColor: 'bg-purple-100 text-purple-600',
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
    slug: 'cat-purring-healing'
  },
  {
    id: '5',
    title: 'Use toothpaste to clean foggy headlights',
    description: `Apply regular white toothpaste (not gel) to foggy headlights, scrub gently with a brush, and rinse. The mild abrasives in toothpaste remove oxidation leaving headlights clearer.`,
    category: 'Life Hack',
    categoryColor: 'bg-teal-100 text-teal-600',
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
    slug: 'toothpaste-headlight-clean'
  },
  {
    id: '6',
    title: 'Press Ctrl+Shift+T to reopen closed browser tabs',
    description: `If you accidentally close a browser tab, this keyboard shortcut will bring it back. You can press it multiple times to reopen several recently closed tabs in order.`,
    category: 'Tech Tip',
    categoryColor: 'bg-blue-100 text-blue-600',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    slug: 'reopen-browser-tabs'
  }
];

const FeaturedContent = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-2">Featured Content</h2>
            <p className="text-gray-600">
              Explore our most popular facts and lifehacks
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-2">
            <Button variant="outline" className="border-teal-200 text-teal-600 hover:bg-teal-50">View All</Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredFacts.map((fact) => (
            <FactCard key={fact.id} {...fact} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;
