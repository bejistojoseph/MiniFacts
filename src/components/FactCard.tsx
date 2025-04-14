
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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
  return (
    <div className="fact-card group">
      <div className="overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          className="fact-card-image transition-transform duration-300 group-hover:scale-105"
        />
        <div className={`absolute top-4 left-4 category-badge ${categoryColor}`}>
          {category}
        </div>
      </div>
      
      <div className="fact-card-content">
        <h3 className="fact-card-title">
          <Link to={`/article/${slug}`} className="hover:text-teal-600 transition-colors">
            {title}
          </Link>
        </h3>
        <p className="fact-card-description">
          {description}
        </p>
        <div className="mt-auto">
          <Link 
            to={`/article/${slug}`} 
            className="inline-flex items-center text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors group"
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
