
import React from 'react';
import { useToast } from '@/hooks/use-toast';
import DiceRoller from './DiceRoller';

type LifeHack = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

type RandomHackButtonProps = {
  allHacks: LifeHack[];
};

const RandomHackButton = ({ allHacks }: RandomHackButtonProps) => {
  const { toast } = useToast();

  const showRandomHack = () => {
    // Get a random hack from the array
    const randomIndex = Math.floor(Math.random() * allHacks.length);
    const randomHack = allHacks[randomIndex];

    // Display the hack in a toast notification
    toast({
      title: randomHack.title,
      description: (
        <div className="flex items-start gap-2">
          <span className="text-xl">{randomHack.icon}</span>
          <span>{randomHack.description}</span>
        </div>
      ),
      duration: 5000,
    });
  };

  return (
    <DiceRoller onRollComplete={showRandomHack} />
  );
};

export default RandomHackButton;
