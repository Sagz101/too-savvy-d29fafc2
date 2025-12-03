import React from 'react';
import { useAccount } from 'wagmi';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lock, Wallet, Sparkles } from 'lucide-react';
import { useSIWE } from '@/hooks/useSIWE';

interface GatedContentProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  requireSIWE?: boolean;
  fallback?: React.ReactNode;
}

export const GatedContent: React.FC<GatedContentProps> = ({
  children,
  title = 'Exclusive Content',
  description = 'Connect your wallet to unlock this content',
  requireSIWE = false,
  fallback,
}) => {
  const { isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();
  const { isSignedIn, signIn, isLoading } = useSIWE();

  // If connected and (SIWE not required OR signed in), show content
  if (isConnected && (!requireSIWE || isSignedIn)) {
    return <>{children}</>;
  }

  // Show custom fallback if provided
  if (fallback && !isConnected) {
    return <>{fallback}</>;
  }

  return (
    <Card className="bg-gradient-to-br from-slate-900/90 to-gray-900/90 border border-primary/20 backdrop-blur-xl overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)/0.1)_0%,_transparent_70%)]" />
      
      <CardHeader className="relative text-center pb-2">
        <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
          <Lock className="w-8 h-8 text-primary" />
        </div>
        <CardTitle className="text-2xl font-bold text-foreground">{title}</CardTitle>
      </CardHeader>
      
      <CardContent className="relative text-center space-y-6 pb-8">
        <p className="text-muted-foreground max-w-md mx-auto">
          {description}
        </p>
        
        {/* Blurred preview effect */}
        <div className="relative h-32 overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent z-10" />
          <div className="blur-lg opacity-30 p-4">
            <div className="h-4 bg-muted/50 rounded mb-2 w-3/4" />
            <div className="h-4 bg-muted/50 rounded mb-2 w-full" />
            <div className="h-4 bg-muted/50 rounded w-1/2" />
          </div>
        </div>

        {!isConnected ? (
          <Button
            onClick={openConnectModal}
            size="lg"
            className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700 text-white shadow-lg shadow-primary/25"
          >
            <Wallet className="w-5 h-5 mr-2" />
            Connect Wallet to Unlock
          </Button>
        ) : requireSIWE && !isSignedIn ? (
          <Button
            onClick={signIn}
            size="lg"
            disabled={isLoading}
            className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700 text-white shadow-lg shadow-primary/25"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            {isLoading ? 'Signing...' : 'Sign In with Ethereum'}
          </Button>
        ) : null}

        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span>Secure • No gas fees • Decentralized</span>
        </div>
      </CardContent>
    </Card>
  );
};
