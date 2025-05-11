
import React from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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
      title: (
        <div className="flex items-center gap-2">
          <span className="text-xl">{randomHack.icon}</span>
          <span>{randomHack.title}</span>
        </div>
      ),
      description: randomHack.description,
      duration: 5000,
    });
  };

  return (
    <Button 
      onClick={showRandomHack}
      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-md hover:shadow-lg transition-all group"
      size="lg"
    >
      <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
      Show Random Hack
    </Button>
  );
};

export default RandomHackButton;
