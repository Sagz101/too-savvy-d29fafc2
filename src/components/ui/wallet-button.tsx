
import { useState } from "react";
import { Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";

export const WalletButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [connected, setConnected] = useState(false);

  const handleConnect = (walletType: string) => {
    setConnecting(true);
    
    // Simulate connection process
    setTimeout(() => {
      setConnecting(false);
      setConnected(true);
      setIsOpen(false);
    }, 1500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant={connected ? "outline" : "default"}
          size="sm" 
          className={connected 
            ? "border-neura-purple/50 text-white hover:bg-neura-purple/10" 
            : "bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90"}
        >
          <Wallet size={16} className="mr-2" /> 
          {connected ? "0x7A...F3" : "Connect Wallet"}
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
          
          {connecting && (
            <div className="text-center text-white/70 mt-2 flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-neura-cyan border-t-transparent rounded-full animate-spin mr-2"></div>
              Connecting...
            </div>
          )}
          
          <p className="text-white/50 text-xs text-center mt-4">
            By connecting your wallet, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
