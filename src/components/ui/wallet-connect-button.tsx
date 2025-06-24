import { useState } from "react";
import { Wallet, ChevronDown, CreditCard, ShoppingCart, Users, Link2, Zap } from "lucide-react";
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
      {!wallet.isConnected ? (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button 
              variant="outline"
              size="lg" 
              className="bg-gradient-to-r from-cosmic-purple to-cosmic-blue text-white border-cosmic-purple/50 hover:from-cosmic-purple-light hover:to-cosmic-blue hover:border-cosmic-purple-light/70 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg cosmic-glow"
            >
              <Wallet size={20} className="mr-3" /> Connect Wallet
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-cosmic-dark border-cosmic-purple/30 text-white max-w-md">
            <DialogHeader>
              <DialogTitle className="text-center text-xl text-white">Connect Wallet</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <p className="text-white/70 text-center mb-4">
                Connect your wallet to access your personalized Too Savvy portal.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["MetaMask", "WalletConnect", "Coinbase", "Rainbow"].map((wallet) => (
                  <Card 
                    key={wallet}
                    className="bg-cosmic-dark/80 border border-cosmic-purple/20 hover:border-cosmic-purple/50 transition-all cursor-pointer hover:shadow-lg hover:shadow-cosmic-purple/20"
                    onClick={() => handleConnect(wallet)}
                  >
                    <div className="p-4 flex flex-col items-center justify-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-cosmic-purple/20 to-cosmic-blue/20 rounded-full flex items-center justify-center mb-3 border border-cosmic-purple/30">
                        <Wallet size={24} className="text-cosmic-purple-light" />
                      </div>
                      <span className="text-white font-medium">{wallet}</span>
                    </div>
                  </Card>
                ))}
              </div>
              
              {isConnecting && (
                <div className="text-center text-white/70 mt-2 flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-cosmic-purple-light border-t-transparent rounded-full animate-spin mr-2"></div>
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
              size="lg" 
              className="bg-gradient-to-r from-cosmic-purple/20 to-cosmic-blue/20 border-cosmic-purple/50 text-white hover:from-cosmic-purple/30 hover:to-cosmic-blue/30 hover:border-cosmic-purple-light/70 flex items-center shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-3 text-base cosmic-glow"
            >
              <Wallet size={18} className="mr-2" /> 
              {formatAddress(wallet.address!)}
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
              onClick={disconnectWallet}
            >
              Disconnect
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </>
  );
};
