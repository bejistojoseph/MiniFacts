
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dices } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type DiceRollerProps = {
  onRollComplete: () => void;
};

const DiceRoller: React.FC<DiceRollerProps> = ({ onRollComplete }) => {
  const [isRolling, setIsRolling] = useState(false);
  const { toast } = useToast();
  
  // Add the CSS keyframes to the document head on component mount
  useEffect(() => {
    const styleEl = document.createElement('style');
    styleEl.textContent = `
      @keyframes rollDice {
        0% { transform: rotateX(0deg) rotateY(0deg); }
        25% { transform: rotateX(90deg) rotateY(45deg); }
        50% { transform: rotateX(180deg) rotateY(90deg); }
        75% { transform: rotateX(270deg) rotateY(135deg); }
        100% { transform: rotateX(360deg) rotateY(180deg); }
      }
      
      .rotate-3d {
        animation: rollDice 1s ease-in-out infinite;
      }
    `;
    document.head.appendChild(styleEl);
    
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);
  
  const rollDice = () => {
    if (isRolling) return;
    
    setIsRolling(true);
    toast({
      title: "Rolling the dice...",
      description: "Let's see what life hack you get!",
      duration: 2000,
    });
    
    // Play rolling animation
    const diceElements = document.querySelectorAll('.dice-dot');
    diceElements.forEach(el => {
      el.classList.add('animate-pulse');
    });
    
    // Simulate dice roll with a delay
    setTimeout(() => {
      setIsRolling(false);
      // Stop animation
      diceElements.forEach(el => {
        el.classList.remove('animate-pulse');
      });
      onRollComplete();
    }, 2000);
  };
  
  return (
    <div className="flex flex-col items-center">
      <Button
        onClick={rollDice}
        disabled={isRolling}
        className={`bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-md hover:shadow-lg transition-all group flex items-center gap-3 relative overflow-hidden ${isRolling ? 'animate-pulse' : ''}`}
        size="lg"
      >
        <div className="flex items-center justify-center relative">
          <Dices className={`w-6 h-6 ${isRolling ? 'animate-spin' : ''}`} />
        </div>
        <span>Roll for a Life Hack</span>
      </Button>
      
      {/* Visual dice representation */}
      <div 
        className={`mt-4 grid grid-cols-3 gap-1 p-2 bg-white rounded-lg shadow-inner w-16 h-16 
        ${isRolling ? 'animate-bounce rotate-3d' : ''}`}
        style={{
          perspective: '500px',
          transformStyle: 'preserve-3d',
          animation: isRolling ? 'rollDice 1s ease-in-out infinite' : 'none'
        }}
      >
        <span className="dice-dot w-3 h-3 bg-purple-600 rounded-full"></span>
        <span className="dice-dot w-3 h-3 bg-purple-600 rounded-full"></span>
        <span className="dice-dot w-3 h-3 bg-purple-600 rounded-full"></span>
        <span className="dice-dot w-3 h-3 bg-purple-600 rounded-full"></span>
        <span className="dice-dot w-3 h-3 bg-purple-600 rounded-full"></span>
        <span className="dice-dot w-3 h-3 bg-purple-600 rounded-full"></span>
      </div>
    </div>
  );
};

export default DiceRoller;
