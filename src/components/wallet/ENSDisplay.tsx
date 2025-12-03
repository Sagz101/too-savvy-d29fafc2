import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useENSDisplay } from '@/hooks/useENSName';
import { User, CheckCircle } from 'lucide-react';

interface ENSDisplayProps {
  showAvatar?: boolean;
  showBadge?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const ENSDisplay: React.FC<ENSDisplayProps> = ({
  showAvatar = true,
  showBadge = true,
  size = 'md',
  className = '',
}) => {
  const { displayName, ensName, ensAvatar, isConnected, isLoading } = useENSDisplay();

  if (!isConnected) return null;

  const sizeClasses = {
    sm: { avatar: 'h-6 w-6', text: 'text-sm', badge: 'text-xs px-1.5 py-0.5' },
    md: { avatar: 'h-8 w-8', text: 'text-base', badge: 'text-xs px-2 py-0.5' },
    lg: { avatar: 'h-10 w-10', text: 'text-lg', badge: 'text-sm px-2.5 py-1' },
  };

  const sizes = sizeClasses[size];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {showAvatar && (
        <Avatar className={`${sizes.avatar} border border-primary/30`}>
          {ensAvatar ? (
            <AvatarImage src={ensAvatar} alt={displayName} />
          ) : null}
          <AvatarFallback className="bg-primary/20 text-primary">
            <User className="w-4 h-4" />
          </AvatarFallback>
        </Avatar>
      )}
      
      <div className="flex items-center gap-1.5">
        <span className={`font-medium text-foreground ${sizes.text}`}>
          {isLoading ? (
            <span className="animate-pulse bg-muted rounded w-24 h-4 inline-block" />
          ) : (
            displayName
          )}
        </span>
        
        {showBadge && ensName && (
          <Badge 
            variant="outline" 
            className={`border-emerald-500/50 text-emerald-400 bg-emerald-500/10 ${sizes.badge}`}
          >
            <CheckCircle className="w-3 h-3 mr-1" />
            ENS
          </Badge>
        )}
      </div>
    </div>
  );
};
