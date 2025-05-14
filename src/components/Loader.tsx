
import React, { useEffect, useState } from 'react';
import { Progress } from '@/components/ui/progress';
import { Brain } from 'lucide-react';

interface LoaderProps {
  onLoadComplete?: () => void;
}

const Loader = ({ onLoadComplete }: LoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + (100 - prevProgress) / 12 + Math.random() * 5;
          const capped = Math.min(Math.round(newProgress), 100);
          
          if (capped >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setIsVisible(false);
              if (onLoadComplete) onLoadComplete();
            }, 400);
          }
          
          return capped;
        });
      }, 150);
      
      return () => clearInterval(interval);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [onLoadComplete]);
  
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50 transition-opacity duration-300" style={{ opacity: progress === 100 ? 0 : 1 }}>
      <div className="relative mb-8">
        <Brain size={60} className="text-teal-600 animate-pulse" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-400 rounded-full animate-ping" />
      </div>
      
      <div className="w-64 mb-2">
        <Progress value={progress} className="h-2" />
      </div>
      
      <div className="text-center">
        <p className="text-sm text-gray-500 mb-1">Loading amazing facts...</p>
        <p className="text-xs text-gray-400">{progress}%</p>
      </div>
    </div>
  );
};

export default Loader;
