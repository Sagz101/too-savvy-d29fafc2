
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
          size="lg" 
          className={connected 
            ? "border-solar-radiative text-solar-core hover:bg-solar-photosphere/20 shadow-lg cosmic-glow" 
            : "bg-gradient-to-r from-solar-core to-solar-radiative text-white hover:from-solar-radiative hover:to-solar-convection shadow-xl cosmic-glow"}
        >
          <Wallet size={20} className="mr-3" /> 
          {connected ? "0x7A...F3" : "Connect Wallet"}
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-gradient-to-br from-dzuwa-warm-white to-dzuwa-gentle-blue border-solar-photosphere/40 text-gray-800 max-w-md shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-center text-xl text-solar-core font-bold">Connect Wallet</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <p className="text-gray-600 text-center mb-4 font-medium">
            Connect your wallet to access your personalized DzuwaSpace portal.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {["MetaMask", "WalletConnect", "Coinbase", "Rainbow"].map((wallet) => (
              <Card 
                key={wallet}
                className="bg-gradient-to-br from-solar-photosphere/10 to-solar-corona/10 border-2 border-solar-photosphere/30 hover:border-solar-radiative/60 transition-all cursor-pointer hover:shadow-lg"
                onClick={() => handleConnect(wallet)}
              >
                <div className="p-4 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-solar-radiative/20 to-solar-photosphere/30 rounded-full flex items-center justify-center mb-3 border-2 border-solar-corona/40">
                    <Wallet size={24} className="text-solar-core" />
                  </div>
                  <span className="text-solar-core font-semibold">{wallet}</span>
                </div>
              </Card>
            ))}
          </div>
          
          {connecting && (
            <div className="text-center text-solar-radiative font-medium mt-2 flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-solar-core border-t-transparent rounded-full animate-spin mr-2"></div>
              Connecting...
            </div>
          )}
          
          <p className="text-gray-500 text-xs text-center mt-4">
            By connecting your wallet, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
