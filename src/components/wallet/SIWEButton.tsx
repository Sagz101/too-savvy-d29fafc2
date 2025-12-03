import React, { useEffect } from 'react';
import { useAccount } from 'wagmi';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useSIWE } from '@/hooks/useSIWE';
import { ENSDisplay } from './ENSDisplay';
import { Fingerprint, LogOut, Loader2, Wallet } from 'lucide-react';

interface SIWEButtonProps {
  onAuthChange?: (isAuthenticated: boolean) => void;
  showENS?: boolean;
  variant?: 'default' | 'compact';
}

export const SIWEButton: React.FC<SIWEButtonProps> = ({
  onAuthChange,
  showENS = true,
  variant = 'default',
}) => {
  const { isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();
  const { isSignedIn, isLoading, signIn, signOut, checkExistingAuth } = useSIWE();

  useEffect(() => {
    if (isConnected) {
      checkExistingAuth();
    }
  }, [isConnected, checkExistingAuth]);

  useEffect(() => {
    onAuthChange?.(isSignedIn);
  }, [isSignedIn, onAuthChange]);

  if (!isConnected) {
    return (
      <Button
        onClick={openConnectModal}
        className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700 text-white"
      >
        <Wallet className="w-4 h-4 mr-2" />
        Connect Wallet
      </Button>
    );
  }

  if (isSignedIn) {
    return (
      <div className="flex items-center gap-3">
        {showENS && <ENSDisplay size={variant === 'compact' ? 'sm' : 'md'} />}
        <Badge variant="outline" className="border-emerald-500/50 text-emerald-400 bg-emerald-500/10">
          <div className="w-2 h-2 rounded-full bg-emerald-400 mr-1.5 animate-pulse" />
          Verified
        </Badge>
        <Button
          variant="ghost"
          size="sm"
          onClick={signOut}
          className="text-muted-foreground hover:text-foreground"
        >
          <LogOut className="w-4 h-4" />
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      {showENS && <ENSDisplay size={variant === 'compact' ? 'sm' : 'md'} showBadge={false} />}
      <Button
        onClick={signIn}
        disabled={isLoading}
        className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700 text-white"
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
        ) : (
          <Fingerprint className="w-4 h-4 mr-2" />
        )}
        {isLoading ? 'Signing...' : 'Sign In with Ethereum'}
      </Button>
    </div>
  );
};
