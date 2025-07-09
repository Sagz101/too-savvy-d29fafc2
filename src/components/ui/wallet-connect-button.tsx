import { useState } from "react";
import { Wallet, ChevronDown, CreditCard, ShoppingCart, Users, Link2, Zap, ExternalLink, Copy, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAccount, useDisconnect, useBalance, useEnsName } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { GasFeeTracker } from "@/components/wallet/GasFeeTracker";
import { ChainSwitcher } from "@/components/wallet/ChainSwitcher";

export const WalletConnectButton = () => {
  const { address, isConnected } = useAccount();
  const { data: balance } = useBalance({ address });
  const { data: ensName } = useEnsName({ address });
  const { disconnect } = useDisconnect();
  const navigate = useNavigate();

  // Format the address to display only first and last few characters
  const formatAddress = (address: string) => {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  const copyAddress = () => {
    if (address) {
      navigator.clipboard.writeText(address);
      toast.success('Address copied to clipboard');
    }
  };

  const openBlockExplorer = () => {
    if (address) {
      window.open(`https://etherscan.io/address/${address}`, '_blank');
    }
  };
  
  const navigateToFinanceHub = (tab: string = "finance-hub") => {
    navigate("/finance-hub");
    // Add tab to URL - in a real app, we would support this in the routing
    window.history.pushState({}, "", `/finance-hub?tab=${tab}`);
    
    // Simulate tab selection through a custom event
    const tabChangeEvent = new CustomEvent('neura-tab-change', { detail: { tabId: tab } });
    window.dispatchEvent(tabChangeEvent);
  };

  return (
    <>
      {!isConnected ? (
        <ConnectButton.Custom>
          {({ account, chain, openConnectModal, mounted }) => {
            const ready = mounted;
            
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
                <div className="flex flex-col gap-2">
                  <Button 
                    onClick={openConnectModal}
                    variant="outline"
                    size="lg" 
                    className="bg-gradient-to-r from-cosmic-purple to-cosmic-blue text-white border-cosmic-purple/50 hover:from-cosmic-purple-light hover:to-cosmic-blue hover:border-cosmic-purple-light/70 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg cosmic-glow group"
                  >
                    <Wallet size={20} className="mr-3 group-hover:animate-pulse" /> 
                    Connect Wallet
                    <Sparkles size={16} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Button>
                  <div className="text-center text-xs text-white/60">
                    Supports MetaMask, Rainbow, Coinbase, Safe & more
                  </div>
                </div>
              </div>
            );
          }}
        </ConnectButton.Custom>
      ) : (
        <div className="flex items-center gap-3">
          <ChainSwitcher />
          <GasFeeTracker />
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="outline"
                size="lg" 
                className="bg-gradient-to-r from-cosmic-purple/20 to-cosmic-blue/20 border-cosmic-purple/50 text-white hover:from-cosmic-purple/30 hover:to-cosmic-blue/30 hover:border-cosmic-purple-light/70 flex items-center shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-3 text-base cosmic-glow group"
              >
                <Wallet size={18} className="mr-2 group-hover:animate-pulse" /> 
                <div className="flex flex-col items-start">
                  <span className="text-sm font-medium">
                    {ensName || (address && formatAddress(address))}
                  </span>
                  {balance && (
                    <span className="text-xs text-white/70">
                      {parseFloat(balance.formatted).toFixed(4)} {balance.symbol}
                    </span>
                  )}
                </div>
                <ChevronDown size={16} className="ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-cosmic-dark border-cosmic-purple/30 text-white w-80">
              <DropdownMenuLabel className="pb-2">
                <div className="flex items-center justify-between">
                  <span>Wallet Connected</span>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={copyAddress}
                      className="h-6 w-6 p-0 hover:bg-cosmic-purple/20"
                    >
                      <Copy className="w-3 h-3" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={openBlockExplorer}
                      className="h-6 w-6 p-0 hover:bg-cosmic-purple/20"
                    >
                      <ExternalLink className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
                <div className="text-xs text-white/60 mt-1">
                  {address}
                </div>
              </DropdownMenuLabel>
              
              <DropdownMenuSeparator className="bg-cosmic-purple/20" />
              
              <div className="p-2">
                <div className="text-sm font-medium text-white mb-2">Financial Services</div>
                <div className="grid grid-cols-2 gap-1">
                  <DropdownMenuItem 
                    className="cursor-pointer hover:bg-cosmic-purple/10 flex items-center text-xs"
                    onClick={() => navigateToFinanceHub("finance-hub")}
                  >
                    <Wallet className="w-3 h-3 mr-2" />
                    Finance Hub
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    className="cursor-pointer hover:bg-cosmic-purple/10 flex items-center text-xs"
                    onClick={() => navigateToFinanceHub("credit-scoring")}
                  >
                    <CreditCard className="w-3 h-3 mr-2" />
                    Credit Score
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    className="cursor-pointer hover:bg-cosmic-purple/10 flex items-center text-xs"
                    onClick={() => navigateToFinanceHub("service-marketplace")}
                  >
                    <ShoppingCart className="w-3 h-3 mr-2" />
                    Marketplace
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    className="cursor-pointer hover:bg-cosmic-purple/10 flex items-center text-xs"
                    onClick={() => navigateToFinanceHub("reputation-graph")}
                  >
                    <Users className="w-3 h-3 mr-2" />
                    Reputation
                  </DropdownMenuItem>
                </div>
              </div>
              
              <DropdownMenuSeparator className="bg-cosmic-purple/20" />
              
              <div className="p-2">
                <div className="text-sm font-medium text-white mb-2">Creator Tools</div>
                <div className="grid grid-cols-2 gap-1">
                  <DropdownMenuItem 
                    className="cursor-pointer hover:bg-cosmic-purple/10 flex items-center text-xs"
                    onClick={() => navigateToFinanceHub("ownership")}
                  >
                    <Link2 className="w-3 h-3 mr-2" />
                    Ownership
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    className="cursor-pointer hover:bg-cosmic-purple/10 flex items-center text-xs"
                    onClick={() => navigateToFinanceHub("monetization")}
                  >
                    <CreditCard className="w-3 h-3 mr-2" />
                    Monetization
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    className="cursor-pointer hover:bg-cosmic-purple/10 flex items-center text-xs"
                    onClick={() => navigateToFinanceHub("ai-collaboration")}
                  >
                    <Zap className="w-3 h-3 mr-2" />
                    AI Tools
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    className="cursor-pointer hover:bg-cosmic-purple/10 flex items-center text-xs"
                    onClick={() => navigate("/studio")}
                  >
                    <Sparkles className="w-3 h-3 mr-2" />
                    Creator Studio
                  </DropdownMenuItem>
                </div>
              </div>
              
              <DropdownMenuSeparator className="bg-cosmic-purple/20" />
              <DropdownMenuItem 
                className="text-red-400 cursor-pointer hover:bg-cosmic-purple/10 m-2"
                onClick={() => disconnect()}
              >
                Disconnect Wallet
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </>
  );
};
