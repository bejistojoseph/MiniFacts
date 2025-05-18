
import React from 'react';
import { Button } from '@/components/ui/button';
import { categories } from '@/data/techTipsData';
import { useToast } from '@/hooks/use-toast';

interface CategoryNavigationProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const CategoryNavigation: React.FC<CategoryNavigationProps> = ({ 
  activeCategory, 
  setActiveCategory 
}) => {
  const { toast } = useToast();
  
  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    toast({
      title: `${categories.find(cat => cat.id === categoryId)?.name}`,
      description: "Showing tech tips for this category",
      duration: 3000,
    });
  };

  return (
    <section className="py-8 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`flex items-center gap-2 ${
                activeCategory === category.id 
                  ? `${category.color.replace('text-', 'bg-')} text-white` 
                  : `${category.borderColor} ${category.color}`
              }`}
              onClick={() => handleCategoryChange(category.id)}
            >
              {category.icon}
              <span>{category.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryNavigation;
