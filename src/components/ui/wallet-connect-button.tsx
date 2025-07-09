import { useState } from "react";
import { Wallet, ChevronDown, CreditCard, ShoppingCart, Users, Link2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAccount, useDisconnect } from 'wagmi';
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

export const WalletConnectButton = () => {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const navigate = useNavigate();

  // Format the address to display only first and last few characters
  const formatAddress = (address: string) => {
    return `${address.substring(0, 4)}...${address.substring(address.length - 4)}`;
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
                <Button 
                  onClick={openConnectModal}
                  variant="outline"
                  size="lg" 
                  className="bg-gradient-to-r from-cosmic-purple to-cosmic-blue text-white border-cosmic-purple/50 hover:from-cosmic-purple-light hover:to-cosmic-blue hover:border-cosmic-purple-light/70 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg cosmic-glow"
                >
                  <Wallet size={20} className="mr-3" /> Connect Wallet
                </Button>
              </div>
            );
          }}
        </ConnectButton.Custom>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="outline"
              size="lg" 
              className="bg-gradient-to-r from-cosmic-purple/20 to-cosmic-blue/20 border-cosmic-purple/50 text-white hover:from-cosmic-purple/30 hover:to-cosmic-blue/30 hover:border-cosmic-purple-light/70 flex items-center shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-3 text-base cosmic-glow"
            >
              <Wallet size={18} className="mr-2" /> 
              {address && formatAddress(address)}
              <ChevronDown size={16} className="ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-cosmic-dark border-cosmic-purple/30 text-white w-56">
            <DropdownMenuLabel>Financial Services</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-cosmic-purple/20" />
            <DropdownMenuItem 
              className="cursor-pointer hover:bg-cosmic-purple/10 flex items-center"
              onClick={() => navigateToFinanceHub("finance-hub")}
            >
              <Wallet className="w-4 h-4 mr-2" />
              Finance Hub
            </DropdownMenuItem>
            <DropdownMenuItem 
              className="cursor-pointer hover:bg-cosmic-purple/10 flex items-center"
              onClick={() => navigateToFinanceHub("credit-scoring")}
            >
              <CreditCard className="w-4 h-4 mr-2" />
              Credit Score
            </DropdownMenuItem>
            <DropdownMenuItem 
              className="cursor-pointer hover:bg-cosmic-purple/10 flex items-center"
              onClick={() => navigateToFinanceHub("service-marketplace")}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Service Marketplace
            </DropdownMenuItem>
            <DropdownMenuItem 
              className="cursor-pointer hover:bg-cosmic-purple/10 flex items-center"
              onClick={() => navigateToFinanceHub("reputation-graph")}
            >
              <Users className="w-4 h-4 mr-2" />
              Reputation Graph
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-cosmic-purple/20" />
            <DropdownMenuItem 
              className="cursor-pointer hover:bg-cosmic-purple/10 flex items-center"
              onClick={() => navigateToFinanceHub("ownership")}
            >
              <Link2 className="w-4 h-4 mr-2" />
              Ownership Features
            </DropdownMenuItem>
            <DropdownMenuItem 
              className="cursor-pointer hover:bg-cosmic-purple/10 flex items-center"
              onClick={() => navigateToFinanceHub("monetization")}
            >
              <CreditCard className="w-4 h-4 mr-2" />
              Monetization Tools
            </DropdownMenuItem>
            <DropdownMenuItem 
              className="cursor-pointer hover:bg-cosmic-purple/10 flex items-center"
              onClick={() => navigateToFinanceHub("ai-collaboration")}
            >
              <Zap className="w-4 h-4 mr-2" />
              AI Collaboration
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-cosmic-purple/20" />
            <DropdownMenuItem 
              className="text-red-400 cursor-pointer hover:bg-cosmic-purple/10"
              onClick={() => disconnect()}
            >
              Disconnect
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </>
  );
};
