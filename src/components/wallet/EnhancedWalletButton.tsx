
import React, { useEffect, useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useBalance, useDisconnect } from 'wagmi';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Wallet, 
  AlertTriangle, 
  Zap, 
  ChevronDown,
  Copy,
  ExternalLink 
} from 'lucide-react';
import { WalletConflictResolver } from '@/utils/walletConflictResolver';
import { toast } from 'sonner';
import { formatEther } from 'viem';

export const EnhancedWalletButton: React.FC = () => {
  const { address, isConnected, chain } = useAccount();
  const { data: balance } = useBalance({ address });
  const { disconnect } = useDisconnect();
  const [detectedWallets, setDetectedWallets] = useState<string[]>([]);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const wallets = WalletConflictResolver.detectWallets();
    setDetectedWallets(wallets);
    WalletConflictResolver.showWalletConflictWarning(wallets);
  }, []);

  const copyAddress = () => {
    if (address) {
      navigator.clipboard.writeText(address);
      toast.success('Address copied to clipboard');
    }
  };

  const openEtherscan = () => {
    if (address && chain) {
      const explorerUrl = chain.blockExplorers?.default?.url;
      if (explorerUrl) {
        window.open(`${explorerUrl}/address/${address}`, '_blank');
      }
    }
  };

  if (!isConnected) {
    return (
      <div className="space-y-2">
        <ConnectButton.Custom>
          {({ account, chain, openConnectModal, mounted }) => {
            const ready = mounted;
            const connected = ready && account && chain;

            return (
              <div
                {...(!ready && {
                  'aria-hidden': true,
                  style: {
                    opacity: 0,
                    pointerEvents: 'none',
                    userSelect: 'none',
                  },
                })}
              >
                {(() => {
                  if (!connected) {
                    return (
                      <Button
                        onClick={openConnectModal}
                        className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white hover:from-cyan-300 hover:via-blue-400 hover:to-purple-500"
                      >
                        <Wallet className="w-4 h-4 mr-2" />
                        Connect Wallet
                      </Button>
                    );
                  }
                })()}
              </div>
            );
          }}
        </ConnectButton.Custom>

        {detectedWallets.length > 1 && (
          <div className="flex items-center gap-2 text-amber-600 text-sm">
            <AlertTriangle className="w-4 h-4" />
            <span>Multiple wallets detected: {detectedWallets.join(', ')}</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <Card className="bg-gradient-to-r from-slate-800/50 to-gray-800/50 border-cyan-400/20">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
              <Wallet className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-white font-medium">
                  {address?.slice(0, 6)}...{address?.slice(-4)}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={copyAddress}
                  className="h-6 w-6 p-0 hover:bg-cyan-400/20"
                >
                  <Copy className="w-3 h-3" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={openEtherscan}
                  className="h-6 w-6 p-0 hover:bg-cyan-400/20"
                >
                  <ExternalLink className="w-3 h-3" />
                </Button>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <span>{chain?.name}</span>
                {balance && (
                  <>
                    <span>•</span>
                    <span>{parseFloat(formatEther(balance.value)).toFixed(4)} ETH</span>
                  </>
                )}
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="border-emerald-400/50 text-emerald-400">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-1 animate-pulse" />
              Connected
            </Badge>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowDetails(!showDetails)}
              className="text-white/70 hover:text-white hover:bg-white/10"
            >
              <ChevronDown className={`w-4 h-4 transition-transform ${showDetails ? 'rotate-180' : ''}`} />
            </Button>
          </div>
        </div>

        {showDetails && (
          <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-white/70">Network:</span>
              <span className="text-white">{chain?.name}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-white/70">Chain ID:</span>
              <span className="text-white">{chain?.id}</span>
            </div>
            {detectedWallets.length > 0 && (
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/70">Detected Wallets:</span>
                <span className="text-white">{detectedWallets.join(', ')}</span>
              </div>
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={() => disconnect()}
              className="w-full mt-2 border-red-400/50 text-red-400 hover:bg-red-400/10"
            >
              Disconnect
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
