
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
        "cursor-pointer transition-all duration-300 overflow-hidden border",
        selected 
          ? "bg-neura-purple/20 border-neura-purple shadow-lg shadow-neura-purple/20" 
          : "bg-neura-dark/50 border-neura-purple/20 hover:bg-neura-purple/10"
      )}
      onClick={onClick}
    >
      <CardContent className="p-6 relative">
        {selected && (
          <div className="absolute top-3 right-3">
            <CheckCircle className="h-5 w-5 text-neura-cyan" />
          </div>
        )}
        
        <div className={cn(
          "w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition-all",
          selected 
            ? "bg-gradient-to-br from-neura-purple/30 to-neura-cyan/30 border border-neura-purple/40" 
            : "bg-neura-dark/80 border border-neura-purple/30"
        )}>
          {icon}
        </div>
        
        <h3 className="font-semibold text-lg text-white mb-2">{title}</h3>
        <p className="text-white/70 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};
