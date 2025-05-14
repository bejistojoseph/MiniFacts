
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import DiceRoller from './DiceRoller';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { X } from 'lucide-react';

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
  const [open, setOpen] = useState(false);
  const [currentHack, setCurrentHack] = useState<LifeHack | null>(null);

  const showRandomHack = () => {
    // Get a random hack from the array
    const randomIndex = Math.floor(Math.random() * allHacks.length);
    const randomHack = allHacks[randomIndex];

    // Display a short toast notification
    toast({
      title: "Life Hack Found!",
      description: "Check out this cool life hack",
      duration: 3000,
    });
    
    // Set the current hack and open the dialog
    setCurrentHack(randomHack);
    setOpen(true);
  };

  return (
    <>
      <DiceRoller onRollComplete={showRandomHack} />
      
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 shadow-lg rounded-xl border border-gray-200 dark:border-gray-800">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              {currentHack?.icon && <span className="text-2xl">{currentHack.icon}</span>} 
              {currentHack?.title}
            </DialogTitle>
          </DialogHeader>
          
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-md">
            {currentHack?.description}
          </div>
          
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RandomHackButton;
