
import { useState } from "react";
import { Wallet, ChevronDown, CreditCard, ShoppingCart, Users, Link2, Zap, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWallet } from "@/services/wallet";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export const WalletConnectButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { wallet, isConnecting, error, connectWallet, disconnectWallet } = useWallet();
  const navigate = useNavigate();

  const handleConnect = async (walletType: string) => {
    try {
      await connectWallet();
      setIsOpen(false);
      toast.success(`Connected to ${walletType}`, {
        description: "Your wallet has been successfully connected"
      });
    } catch (err) {
      toast.error("Connection failed", {
        description: "Failed to connect wallet. Please try again."
      });
    }
  };

  const formatAddress = (address: string) => {
    return `${address.substring(0, 4)}...${address.substring(address.length - 4)}`;
  };
  
  const navigateToFinanceHub = (tab: string = "finance-hub") => {
    navigate("/finance-hub");
    window.history.pushState({}, "", `/finance-hub?tab=${tab}`);
    
    const tabChangeEvent = new CustomEvent('neura-tab-change', { detail: { tabId: tab } });
    window.dispatchEvent(tabChangeEvent);
  };

  const handleDisconnect = () => {
    disconnectWallet();
    toast.success("Wallet disconnected", {
      description: "You have been successfully logged out"
    });
  };

  return (
    <>
      {!wallet.isConnected ? (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button 
              variant="default"
              size="sm" 
              className="bg-gradient-to-r from-[#00FFCC] to-[#FF00FF] hover:from-[#00FFCC]/80 hover:to-[#FF00FF]/80 text-white font-medium border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 min-h-[48px] px-6"
            >
              <Wallet size={18} className="mr-2" /> 
              Connect Wallet
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-[#0F0F1A] border border-[#00FFCC]/30 text-white max-w-md backdrop-blur-xl">
            <DialogHeader>
              <DialogTitle className="text-center text-xl text-white mb-4">Connect Your Wallet</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <p className="text-white/70 text-center mb-4">
                Connect your wallet to access your personalized Web3 creator portal.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["MetaMask", "WalletConnect", "Coinbase", "Rainbow"].map((walletName) => (
                  <Card 
                    key={walletName}
                    className="bg-[#1A1A2E]/60 border border-[#00FFCC]/20 hover:border-[#00FFCC]/50 transition-all cursor-pointer group hover:scale-105 duration-200"
                    onClick={() => handleConnect(walletName)}
                  >
                    <div className="p-4 flex flex-col items-center justify-center min-h-[120px]">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#00FFCC]/20 to-[#FF00FF]/20 rounded-full flex items-center justify-center mb-3 border border-[#00FFCC]/30 group-hover:scale-110 transition-transform">
                        <Wallet size={24} className="text-[#00FFCC]" />
                      </div>
                      <span className="text-white font-medium text-sm">{walletName}</span>
                    </div>
                  </Card>
                ))}
              </div>
              
              {isConnecting && (
                <div className="text-center text-white/70 mt-2 flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-[#00FFCC] border-t-transparent rounded-full animate-spin mr-2"></div>
                  Connecting...
                </div>
              )}
              
              {error && <p className="text-red-400 text-center text-sm">{error}</p>}
              
              <p className="text-white/50 text-xs text-center mt-4">
                By connecting your wallet, you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </DialogContent>
        </Dialog>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="outline"
              size="sm" 
              className="border-[#00FFCC]/50 text-white hover:bg-[#00FFCC]/10 hover:border-[#00FFCC] flex items-center bg-[#1A1A2E]/60 backdrop-blur-sm min-h-[48px] px-4"
            >
              <div className="w-2 h-2 bg-[#00FFCC] rounded-full mr-2 animate-pulse"></div>
              {formatAddress(wallet.address!)}
              <ChevronDown size={14} className="ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-[#0F0F1A] border border-[#00FFCC]/30 text-white w-56 backdrop-blur-xl">
            <DropdownMenuLabel className="text-[#00FFCC]">Financial Services</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-[#00FFCC]/20" />
            
            <DropdownMenuItem 
              className="cursor-pointer hover:bg-[#00FFCC]/10 flex items-center focus:bg-[#00FFCC]/10 focus:text-white"
              onClick={() => navigateToFinanceHub("finance-hub")}
            >
              <Wallet className="w-4 h-4 mr-2" />
              Finance Hub
            </DropdownMenuItem>
            
            <DropdownMenuItem 
              className="cursor-pointer hover:bg-[#00FFCC]/10 flex items-center focus:bg-[#00FFCC]/10 focus:text-white"
              onClick={() => navigateToFinanceHub("credit-scoring")}
            >
              <CreditCard className="w-4 h-4 mr-2" />
              Credit Score
            </DropdownMenuItem>
            
            <DropdownMenuItem 
              className="cursor-pointer hover:bg-[#00FFCC]/10 flex items-center focus:bg-[#00FFCC]/10 focus:text-white"
              onClick={() => navigateToFinanceHub("service-marketplace")}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Service Marketplace
            </DropdownMenuItem>
            
            <DropdownMenuItem 
              className="cursor-pointer hover:bg-[#00FFCC]/10 flex items-center focus:bg-[#00FFCC]/10 focus:text-white"
              onClick={() => navigateToFinanceHub("reputation-graph")}
            >
              <Users className="w-4 h-4 mr-2" />
              Reputation Graph
            </DropdownMenuItem>
            
            <DropdownMenuSeparator className="bg-[#00FFCC]/20" />
            
            <DropdownMenuItem 
              className="cursor-pointer hover:bg-[#00FFCC]/10 flex items-center focus:bg-[#00FFCC]/10 focus:text-white"
              onClick={() => navigateToFinanceHub("ownership")}
            >
              <Link2 className="w-4 h-4 mr-2" />
              Ownership Features
            </DropdownMenuItem>
            
            <DropdownMenuItem 
              className="cursor-pointer hover:bg-[#00FFCC]/10 flex items-center focus:bg-[#00FFCC]/10 focus:text-white"
              onClick={() => navigateToFinanceHub("monetization")}
            >
              <CreditCard className="w-4 h-4 mr-2" />
              Monetization Tools
            </DropdownMenuItem>
            
            <DropdownMenuItem 
              className="cursor-pointer hover:bg-[#00FFCC]/10 flex items-center focus:bg-[#00FFCC]/10 focus:text-white"
              onClick={() => navigateToFinanceHub("ai-collaboration")}
            >
              <Zap className="w-4 h-4 mr-2" />
              AI Collaboration
            </DropdownMenuItem>
            
            <DropdownMenuSeparator className="bg-[#00FFCC]/20" />
            
            <DropdownMenuItem 
              className="text-red-400 cursor-pointer hover:bg-red-500/10 focus:bg-red-500/10 focus:text-red-400"
              onClick={handleDisconnect}
            >
              <LogOut className="w-4 h-4 mr-2" />
              Disconnect
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </>
  );
};
