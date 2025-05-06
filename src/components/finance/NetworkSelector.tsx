
import React from 'react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, CheckCircle2 } from "lucide-react";
import { useWallet } from '@/services/wallet';

export const NetworkSelector: React.FC = () => {
  const { wallet, switchNetwork } = useWallet();
  
  const handleNetworkChange = async (chainId: number) => {
    await switchNetwork(chainId);
  };
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="h-9 bg-neura-dark/80 border-neura-purple/20 hover:bg-neura-purple/20 gap-1.5"
        >
          {wallet.selectedChain?.name || 'Select Network'}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {wallet.supportedChains.map((chain) => (
          <DropdownMenuItem
            key={chain.id}
            className="flex items-center justify-between"
            onClick={() => handleNetworkChange(chain.id)}
          >
            <div className="flex items-center">
              {chain.logoUrl && <img src={chain.logoUrl} alt={chain.name} className="w-4 h-4 mr-2" />}
              {chain.name}
            </div>
            {wallet.chainId === chain.id && <CheckCircle2 className="h-4 w-4 text-green-500" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
