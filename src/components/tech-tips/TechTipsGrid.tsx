
import React from 'react';
import TechTipCard from './TechTipCard';
import { techTipsData } from '@/data/techTipsData';
import { useIsMobile } from '@/hooks/use-mobile';

interface TechTipsGridProps {
  activeCategory: string;
}

const TechTipsGrid: React.FC<TechTipsGridProps> = ({ activeCategory }) => {
  const isMobile = useIsMobile();

  return (
    <section className={`py-12 ${isMobile ? 'mt-8' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techTipsData[activeCategory]?.map((tip) => (
            <TechTipCard
              key={tip.id}
              tip={tip}
              categoryId={activeCategory}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechTipsGrid;
