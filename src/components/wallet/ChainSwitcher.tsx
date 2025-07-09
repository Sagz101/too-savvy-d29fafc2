import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, CheckCircle, Circle } from 'lucide-react';
import { useAccount, useChainId, useSwitchChain } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, base } from 'wagmi/chains';
import { toast } from 'sonner';

const SUPPORTED_CHAINS = [
  { 
    ...mainnet, 
    logo: '🔵', 
    color: 'text-blue-400',
    description: 'Ethereum Mainnet - Most secure, higher fees'
  },
  { 
    ...polygon, 
    logo: '🟣', 
    color: 'text-purple-400',
    description: 'Polygon - Fast & low cost'
  },
  { 
    ...optimism, 
    logo: '🔴', 
    color: 'text-red-400',
    description: 'Optimism - L2 scaling solution'
  },
  { 
    ...arbitrum, 
    logo: '🔵', 
    color: 'text-cyan-400',
    description: 'Arbitrum - Low fees, fast transactions'
  },
  { 
    ...base, 
    logo: '🔵', 
    color: 'text-blue-500',
    description: 'Base - Coinbase L2 network'
  },
];

export const ChainSwitcher: React.FC = () => {
  const { isConnected } = useAccount();
  const chainId = useChainId();
  const { switchChain, isPending } = useSwitchChain();

  const currentChain = SUPPORTED_CHAINS.find(chain => chain.id === chainId);

  const handleChainSwitch = async (targetChainId: number) => {
    if (targetChainId === chainId) return;
    
    try {
      await switchChain({ chainId: targetChainId });
      const targetChain = SUPPORTED_CHAINS.find(chain => chain.id === targetChainId);
      toast.success(`Switched to ${targetChain?.name}`);
    } catch (error) {
      console.error('Chain switch error:', error);
      toast.error('Failed to switch network. Please try again.');
    }
  };

  if (!isConnected) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="sm"
          disabled={isPending}
          className="bg-gradient-to-r from-slate-800/50 to-gray-800/50 border-cyan-400/20 text-white hover:from-slate-700/50 hover:to-gray-700/50 hover:border-cyan-400/40"
        >
          <span className="mr-2">{currentChain?.logo || '🌐'}</span>
          <span className={currentChain?.color || 'text-white'}>
            {currentChain?.name || 'Unknown'}
          </span>
          <ChevronDown className="w-4 h-4 ml-2" />
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent className="bg-slate-900 border-cyan-400/30 text-white w-72">
        <DropdownMenuLabel className="text-cyan-400">Select Network</DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-cyan-400/20" />
        
        {SUPPORTED_CHAINS.map((chain) => {
          const isActive = chain.id === chainId;
          const Icon = isActive ? CheckCircle : Circle;
          
          return (
            <DropdownMenuItem
              key={chain.id}
              onClick={() => handleChainSwitch(chain.id)}
              disabled={isPending}
              className="cursor-pointer hover:bg-slate-800/50 focus:bg-slate-800/50 p-3"
            >
              <div className="flex items-start gap-3 w-full">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{chain.logo}</span>
                  <Icon className={`w-4 h-4 ${isActive ? 'text-green-400' : 'text-gray-400'}`} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`font-medium ${chain.color}`}>
                      {chain.name}
                    </span>
                    {isActive && (
                      <Badge variant="outline" className="text-xs border-green-400/50 text-green-400">
                        Active
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-gray-400 leading-tight">
                    {chain.description}
                  </p>
                </div>
              </div>
            </DropdownMenuItem>
          );
        })}
        
        <DropdownMenuSeparator className="bg-cyan-400/20" />
        <div className="p-2 text-xs text-gray-500 text-center">
          Zero platform fees on all networks
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};