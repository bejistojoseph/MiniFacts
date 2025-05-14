
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dices } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Dice3D from './Dice3D';

type DiceRollerProps = {
  onRollComplete: () => void;
};

const DiceRoller: React.FC<DiceRollerProps> = ({ onRollComplete }) => {
  const [isRolling, setIsRolling] = useState(false);
  const { toast } = useToast();
  
  const rollDice = () => {
    if (isRolling) return;
    
    setIsRolling(true);
    toast({
      title: "Rolling the dice...",
      description: "Let's see what life hack you get!",
      duration: 2000,
    });
    
    // The 3D dice component will handle the animation and call onRollComplete when done
  };
  
  const handleRollComplete = () => {
    setIsRolling(false);
    onRollComplete();
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
      
      {/* 3D dice component */}
      <div className={`mt-6 transition-opacity duration-300 ${isRolling ? 'opacity-100' : 'opacity-70'}`}>
        <Dice3D isRolling={isRolling} onRollComplete={handleRollComplete} />
      </div>
    </div>
  );
};

export default DiceRoller;
