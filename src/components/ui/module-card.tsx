
import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

interface ModuleCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  selected?: boolean;
  onClick?: () => void;
}

export const ModuleCard: React.FC<ModuleCardProps> = ({
  icon,
  title,
  description,
  selected = false,
  onClick
}) => {
  return (
    <Card 
      className={cn(
        "cursor-pointer transition-all duration-300 overflow-hidden grok-card",
        selected 
          ? "grok-card-hover border-primary/50 shadow-lg shadow-primary/20 bg-card/80" 
          : "grok-card-hover border-border/50"
      )}
      onClick={onClick}
    >
      <CardContent className="p-6 relative">
        {selected && (
          <div className="absolute top-3 right-3">
            <CheckCircle className="h-5 w-5 text-primary" />
          </div>
        )}
        
        <div className={cn(
          "w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all border",
          selected 
            ? "bg-primary/20 border-primary/30 text-primary" 
            : "bg-card/60 border-border/30 text-muted-foreground"
        )}>
          {icon}
        </div>
        
        <h3 className="font-semibold text-lg text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};
