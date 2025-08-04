
import React, { useState } from 'react';
import { User, LogIn, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ModernButton } from '@/components/ui/modern-button';
import { useAuth } from '@/services/auth';

export const LoginButton: React.FC = () => {
  const { user, isAuthenticated, signOut } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignOut = async () => {
    setIsLoading(true);
    try {
      await signOut();
    } catch (error) {
      console.error('Sign out error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isAuthenticated && user) {
    return (
      <div className="flex items-center gap-2">
        <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-card/40 rounded-lg border border-border/30">
          <User size={16} className="text-primary" />
          <span className="text-sm text-foreground truncate max-w-20">
            {user.profile?.name || user.email?.split('@')[0] || 'User'}
          </span>
        </div>
        <ModernButton
          variant="outline"
          size="sm"
          onClick={handleSignOut}
          loading={isLoading}
          className="text-xs"
        >
          <LogOut size={14} />
          <span className="hidden sm:inline">Sign Out</span>
        </ModernButton>
      </div>
    );
  }

  return (
    <ModernButton
      variant="outline"
      size="sm"
      asChild
      className="text-xs"
    >
      <Link to="/auth">
        <LogIn size={14} />
        <span className="hidden sm:inline">Sign In</span>
      </Link>
    </ModernButton>
  );
};
