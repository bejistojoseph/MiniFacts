
import React from 'react';
import { Button } from '@/components/ui/button';
import { Share2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { categories } from '@/data/techTipsData';

interface TechTip {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface TechTipCardProps {
  tip: TechTip;
  categoryId: string;
}

const TechTipCard: React.FC<TechTipCardProps> = ({ tip, categoryId }) => {
  const { toast } = useToast();
  const category = categories.find(cat => cat.id === categoryId);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: 'Tech Tip: ' + tip.title,
          text: `${tip.title} - ${tip.description}`,
          url: window.location.href,
        })
        .then(() => {
          toast({
            title: "Shared successfully!",
            description: "The tech tip has been shared",
            duration: 3000,
          });
        })
        .catch((error) => {
          toast({
            title: "Sharing failed",
            description: error.message || "There was an error sharing the content",
            duration: 3000,
          });
        });
    } else {
      const shareText = `Tech Tip: ${tip.title} - ${tip.description} ${window.location.href}`;
      
      navigator.clipboard.writeText(shareText).then(() => {
        toast({
          title: "Copied to clipboard!",
          description: "Share this tech tip with your friends",
          duration: 3000,
        });
      }).catch(() => {
        toast({
          title: "Unable to copy",
          description: "Please select and copy the text manually",
          duration: 3000,
        });
      });
    }
  };

  return (
    <div 
      className={`p-6 rounded-xl border ${category?.borderColor} ${category?.bgColor} hover:shadow-md transition-shadow duration-300`}
    >
      <div className="flex items-start gap-4">
        <div className="text-3xl">{tip.icon}</div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className={`text-xl font-semibold mb-2 ${category?.color}`}>{tip.title}</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleShare}
              className="h-8 w-8 rounded-full hover:bg-gray-100"
              title="Share this tip"
            >
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-gray-700">{tip.description}</p>
        </div>
      </div>
    </div>
  );
};

export default TechTipCard;
