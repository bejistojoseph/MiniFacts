
import React from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import TechProcessor from '@/components/TechProcessor';

interface Tip {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface TipProcessingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  processingComplete: boolean;
  selectedTip: Tip | null;
}

const TipProcessingDialog: React.FC<TipProcessingDialogProps> = ({
  open,
  onOpenChange,
  processingComplete,
  selectedTip
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <div className="p-4 text-center">
          {!processingComplete ? (
            <>
              <h3 className="text-lg font-medium mb-4">Processing Tech Database...</h3>
              <TechProcessor />
            </>
          ) : (
            selectedTip && (
              <div className="p-6 bg-blue-50 rounded-lg border border-blue-100">
                <div className="text-3xl mb-3">{selectedTip.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-blue-600">{selectedTip.title}</h3>
                <p className="text-gray-700 mb-4">{selectedTip.description}</p>
                <Button 
                  onClick={() => onOpenChange(false)}
                  variant="outline"
                  className="mt-2"
                >
                  Close
                </Button>
              </div>
            )
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TipProcessingDialog;
