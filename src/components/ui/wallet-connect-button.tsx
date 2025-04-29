
import { useState } from "react";
import { Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWallet } from "@/services/wallet";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

export const WalletConnectButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { wallet, isConnecting, error, connectWallet } = useWallet();

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

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant={wallet.isConnected ? "outline" : "default"}
          size="sm" 
          className={wallet.isConnected 
            ? "border-neura-purple/50 text-white hover:bg-neura-purple/10" 
            : "bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90"}
        >
          <Wallet size={16} className="mr-2" /> 
          {wallet.isConnected ? formatAddress(wallet.address!) : "Connect Wallet"}
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-neura-dark border-neura-purple/30 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl text-white">Connect Wallet</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <p className="text-white/70 text-center mb-4">
            Connect your wallet to access your personalized Neura portal.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {["MetaMask", "WalletConnect", "Coinbase", "Rainbow"].map((wallet) => (
              <Card 
                key={wallet}
                className="bg-neura-dark/80 border border-neura-purple/20 hover:border-neura-purple/50 transition-all cursor-pointer"
                onClick={() => handleConnect(wallet)}
              >
                <div className="p-4 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-neura-purple/20 to-neura-cyan/20 rounded-full flex items-center justify-center mb-3 border border-neura-purple/30">
                    <Wallet size={24} className="text-neura-cyan" />
                  </div>
                  <span className="text-white font-medium">{wallet}</span>
                </div>
              </Card>
            ))}
          </div>
          
          {isConnecting && (
            <div className="text-center text-white/70 mt-2 flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-neura-cyan border-t-transparent rounded-full animate-spin mr-2"></div>
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
  );
};
