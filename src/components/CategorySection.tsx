
import React from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, Cpu, Coffee, Book, ArrowRight } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const categories = [
  {
    id: 'minifacts',
    title: 'Amazing Facts',
    description: 'Discover fascinating and surprising facts from around the world',
    icon: <Book className="w-8 h-8 text-purple-500" />,
    color: 'bg-purple-50 hover:bg-purple-100',
    textColor: 'text-purple-700',
    borderColor: 'border-purple-100',
    link: '/minifacts',
    toastMessage: 'Exploring amazing facts from around the world'
  },
  {
    id: 'lifehacks',
    title: 'Life Hacks',
    description: 'Clever solutions and shortcuts to make everyday life easier',
    icon: <Lightbulb className="w-8 h-8 text-teal-500" />,
    color: 'bg-teal-50 hover:bg-teal-100',
    textColor: 'text-teal-700',
    borderColor: 'border-teal-100',
    link: '/lifehacks',
    toastMessage: 'Discovering clever solutions for everyday life'
  },
  {
    id: 'tech',
    title: 'Tech Tips',
    description: 'Expert advice to help you get the most from your technology',
    icon: <Cpu className="w-8 h-8 text-blue-500" />,
    color: 'bg-blue-50 hover:bg-blue-100',
    textColor: 'text-blue-700',
    borderColor: 'border-blue-100',
    link: '/techtips',
    toastMessage: 'Exploring tech tips to optimize your digital life'
  },
  {
    id: 'food',
    title: 'Food Hacks',
    description: 'Ingenious tricks to make cooking easier and food taste better',
    icon: <Coffee className="w-8 h-8 text-amber-500" />,
    color: 'bg-amber-50 hover:bg-amber-100',
    textColor: 'text-amber-700',
    borderColor: 'border-amber-100',
    link: '/food',
    toastMessage: 'Discovering clever food hacks to enhance your culinary skills'
  }
];

const CategorySection = () => {
  const { toast } = useToast();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Browse Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find exactly what you're looking for with our organized categories
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={category.link}
              className={`p-6 rounded-xl border ${category.borderColor} ${category.color} transition-colors duration-200 group hover:shadow-md`}
              onClick={() => {
                toast({
                  title: category.title,
                  description: category.toastMessage,
                  duration: 3000,
                });
              }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {category.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${category.textColor}`}>{category.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{category.description}</p>
                <div className={`flex items-center text-sm font-medium ${category.textColor}`}>
                  Explore
                  <ArrowRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
