
import React from 'react';
import { HelpCircle } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface Web3TooltipProps {
  term: string;
  definition: string;
  className?: string;
}

export const Web3Tooltip = ({ term, definition, className = "" }: Web3TooltipProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className={`inline-flex items-center cursor-help border-b border-dotted border-primary/50 ${className}`}>
            {term}
            <HelpCircle size={14} className="ml-1 text-primary/70" />
          </span>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs p-3 bg-card border border-border text-sm">
          <p>{definition}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
