
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const TechProcessor: React.FC = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    // Simulate processing progress
    let interval: ReturnType<typeof setInterval>;
    let progressValue = 0;
    
    if (progressValue < 100) {
      interval = setInterval(() => {
        progressValue += 2; // Increment by 2% each time
        setProgress(Math.min(progressValue, 100));
        
        if (progressValue >= 100) {
          clearInterval(interval);
        }
      }, 60);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);
  
  return (
    <div className="w-full h-60 sm:h-80 flex flex-col items-center justify-center relative bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 rounded-lg">
      {/* Animated tech nodes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`node-${i}`}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 20 + 5,
              height: Math.random() * 20 + 5,
              background: `rgba(${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 255)}, 0.6)`,
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
            }}
            animate={{
              x: [0, Math.random() * 40 - 20],
              y: [0, Math.random() * 40 - 20],
              scale: [1, 1.2, 1],
              opacity: [0.7, 0.9, 0.7],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
        
        {/* Connection lines */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute bg-indigo-300 rounded-full"
            style={{
              height: "1px",
              width: "30%",
              left: `${Math.random() * 70}%`,
              top: `${Math.random() * 100}%`,
              transformOrigin: "left center",
            }}
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 0.7, 0],
              rotateZ: `${Math.random() * 360}deg`,
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      {/* Central processor */}
      <motion.div 
        className="w-16 h-16 rounded-lg bg-gradient-to-tr from-blue-500 to-indigo-600 shadow-lg z-10"
        animate={{ 
          rotate: 360,
          boxShadow: [
            "0 0 15px rgba(79, 70, 229, 0.7)",
            "0 0 25px rgba(79, 70, 229, 0.9)",
            "0 0 15px rgba(79, 70, 229, 0.7)"
          ]
        }}
        transition={{ 
          duration: 4,
          ease: "linear", 
          repeat: Infinity,
        }}
      >
        <motion.div 
          className="absolute inset-0 rounded-lg border border-indigo-300"
          animate={{ 
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity 
          }}
        />
      </motion.div>
      
      {/* Pulse rings */}
      {[...Array(3)].map((_, i) => (
        <motion.div 
          key={`ring-${i}`}
          className="absolute rounded-full border border-indigo-400"
          initial={{ 
            width: 64, 
            height: 64, 
            opacity: 0.8,
          }}
          animate={{ 
            width: [64, 200], 
            height: [64, 200], 
            opacity: [0.8, 0],
            borderWidth: [2, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            delay: i * 1,
            ease: "easeOut"
          }}
        />
      ))}
      
      <div className="z-10 mt-24 flex flex-col items-center">
        {/* Progress bar */}
        <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
          <motion.div 
            className="h-full bg-gradient-to-r from-blue-500 to-indigo-600"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-indigo-900 font-medium">
          Processing... {progress}%
        </div>
      </div>
    </div>
  );
};

export default TechProcessor;
