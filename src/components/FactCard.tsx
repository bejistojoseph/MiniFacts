
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookmarkPlus, BookmarkCheck } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

type FactCardProps = {
  id: string;
  title: string;
  description: string;
  category: string;
  categoryColor: string;
  image: string;
  slug: string;
};

const FactCard = ({ id, title, description, category, categoryColor, image, slug }: FactCardProps) => {
  const { toast } = useToast();
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleCardClick = () => {
    toast({
      title: `${category}`,
      description: `Reading about "${title.substring(0, 30)}..."`,
      duration: 3000,
    });
  };

  const handleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsBookmarked(prev => !prev);
    
    toast({
      title: isBookmarked ? "Removed from bookmarks" : "Added to bookmarks",
      description: `"${title.substring(0, 30)}..."`,
      duration: 2000,
    });
  };

  return (
    <div className="fact-card group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
      <div className="overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${categoryColor}`}>
          {category}
        </div>
        <button 
          onClick={handleBookmark}
          className="absolute top-4 right-4 p-1.5 bg-white/90 rounded-full hover:bg-white transition-colors"
        >
          {isBookmarked ? 
            <BookmarkCheck size={16} className="text-teal-600" /> : 
            <BookmarkPlus size={16} className="text-gray-600" />
          }
        </button>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">
          <Link 
            to={`/article/${slug}`} 
            className="hover:text-teal-600 transition-colors"
            onClick={handleCardClick}
          >
            {title}
          </Link>
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {description}
        </p>
        <div className="mt-auto">
          <Link 
            to={`/article/${slug}`} 
            className="inline-flex items-center text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors group"
            onClick={handleCardClick}
          >
            Read More
            <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FactCard;
