
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { UserCircle, Shield, Award, Key, Check } from 'lucide-react';
import { useWallet } from '@/services/wallet';
import { WalletConnectButton } from '@/components/ui/wallet-connect-button';

export const DecentralizedIdentity: React.FC = () => {
  const { toast } = useToast();
  const { wallet } = useWallet();
  const [hasIdentity, setHasIdentity] = useState(false);
  
  const handleCreateIdentity = () => {
    if (!wallet.isConnected) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet to create a decentralized identity",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Creating DID",
      description: "Generating your decentralized identity...",
    });
    
    // Simulate delay for identity creation
    setTimeout(() => {
      setHasIdentity(true);
      toast({
        title: "Identity Created!",
        description: "Your decentralized identity is ready to use",
      });
    }, 2000);
  };
  
  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-xl font-semibold mb-2">Decentralized Identity (DID)</h2>
        <p className="text-white/70">
          Create and manage your portable, self-sovereign identity across Web3 platforms
        </p>
      </div>
      
      {!wallet.isConnected ? (
        <div className="text-center py-8">
          <UserCircle className="w-16 h-16 mx-auto text-white/30 mb-4" />
          <h3 className="text-lg font-medium mb-3">Connect Your Wallet First</h3>
          <p className="text-white/70 mb-6 max-w-md mx-auto">
            Your decentralized identity is linked to your wallet address. Connect to get started.
          </p>
          <WalletConnectButton />
        </div>
      ) : !hasIdentity ? (
        <div className="max-w-md mx-auto">
          <Card className="bg-neura-dark/50 border-neura-purple/20 mb-6">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-neura-purple/20 rounded-full">
                  <UserCircle className="w-8 h-8 text-neura-cyan" />
                </div>
                <div>
                  <h3 className="font-medium mb-2">Create Your DID</h3>
                  <p className="text-sm text-white/70 mb-4">
                    Your decentralized identity will enable seamless, secure interactions across 
                    social platforms like Lens Protocol and Farcaster.
                  </p>
                  <Button 
                    className="w-full bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90"
                    onClick={handleCreateIdentity}
                  >
                    <Shield className="w-4 h-4 mr-2" /> Create Identity
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="bg-neura-purple/10 p-4 rounded-lg">
            <h4 className="font-medium flex items-center mb-3">
              <Key className="w-4 h-4 mr-2 text-neura-cyan" /> Benefits of DID
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-neura-cyan" />
                <span className="text-white/80">Cross-platform social login without passwords</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-neura-cyan" />
                <span className="text-white/80">Portable reputation and credentials</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-neura-cyan" />
                <span className="text-white/80">Control your own data and privacy</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-neura-cyan" />
                <span className="text-white/80">Verifiable credentials for privileged access</span>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div>
          <Card className="bg-neura-dark/50 border-neura-purple/20 mb-8">
            <CardContent className="p-6">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-neura-purple to-neura-cyan flex items-center justify-center">
                  <UserCircle className="w-12 h-12 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-lg">{wallet.address?.substring(0, 6)}...{wallet.address?.substring(38)}</h3>
                    <Badge className="bg-emerald-500/20 text-emerald-300 text-xs">Verified</Badge>
                  </div>
                  <p className="text-white/60 text-sm mb-2">
                    did:ethr:{wallet.address?.toLowerCase()}
                  </p>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-neura-purple/20 text-neura-cyan text-xs">Lens Protocol</Badge>
                    <Badge className="bg-neura-purple/20 text-neura-cyan text-xs">Farcaster</Badge>
                    <Badge className="bg-neura-purple/20 text-neura-cyan text-xs">XMTP</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <h3 className="font-medium mb-4">Verifiable Credentials</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-neura-dark/40 border border-neura-purple/20 p-4 rounded-lg flex items-start gap-3">
              <div className="p-2 bg-neura-purple/20 rounded-full">
                <Award className="w-5 h-5 text-neura-cyan" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-medium">NFT Collector</h4>
                  <Badge className="bg-emerald-500/20 text-emerald-300 text-xs">Active</Badge>
                </div>
                <p className="text-xs text-white/70 mb-2">
                  Owns 3+ NFTs from verified collections
                </p>
                <p className="text-xs text-white/50">Issued: April 2025</p>
              </div>
            </div>
            
            <div className="bg-neura-dark/40 border border-neura-purple/20 p-4 rounded-lg flex items-start gap-3">
              <div className="p-2 bg-neura-purple/20 rounded-full">
                <Shield className="w-5 h-5 text-neura-cyan" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-medium">Verified Human</h4>
                  <Badge className="bg-emerald-500/20 text-emerald-300 text-xs">Active</Badge>
                </div>
                <p className="text-xs text-white/70 mb-2">
                  Passed zero-knowledge proof of humanity
                </p>
                <p className="text-xs text-white/50">Issued: April 2025</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <Button className="bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90">
              Manage Identity
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
