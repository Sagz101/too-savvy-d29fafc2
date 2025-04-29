
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from '@/components/ui/card';
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Shield, Check, X, QrCode, Scan } from 'lucide-react';

export const NFTVerification: React.FC = () => {
  const { toast } = useToast();
  const [tokenId, setTokenId] = useState('');
  const [scanMode, setScanMode] = useState(false);
  const [verificationResult, setVerificationResult] = useState<'success' | 'failure' | null>(null);
  
  const handleVerify = () => {
    if (!tokenId.trim()) {
      toast({
        title: "Verification Error",
        description: "Please enter a token ID or scan a QR code",
        variant: "destructive",
      });
      return;
    }
    
    // In a real implementation, this would call a blockchain service to verify the token
    // For demo purposes, we'll randomly succeed or fail
    const isVerified = Math.random() > 0.3;
    
    setVerificationResult(isVerified ? 'success' : 'failure');
    
    toast({
      title: isVerified ? "Verification Successful" : "Verification Failed",
      description: isVerified 
        ? "This product has been verified as authentic" 
        : "We could not verify this product. It might be counterfeit.",
      variant: isVerified ? "default" : "destructive",
    });
  };
  
  const handleScanQR = () => {
    setScanMode(true);
    // In a real implementation, this would activate the camera for QR scanning
    // For demo purposes, we'll just simulate a scan after a delay
    setTimeout(() => {
      setScanMode(false);
      setTokenId('NFT#' + Math.floor(Math.random() * 10000));
    }, 2000);
  };
  
  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-xl font-semibold mb-2">Verify Product Authenticity</h2>
        <p className="text-white/70">
          Scan the QR code on your product or enter the NFT token ID to verify authenticity
        </p>
      </div>
      
      <div className="max-w-md mx-auto">
        <Card className="bg-neura-dark/50 border-neura-purple/20">
          <CardContent className="p-6">
            {scanMode ? (
              <div className="aspect-square bg-black/30 rounded-lg flex items-center justify-center mb-4">
                <div className="relative w-32 h-32">
                  <div className="absolute inset-0 border-2 border-neura-cyan animate-pulse"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Scan className="w-12 h-12 text-neura-cyan/50" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1">
                  <Input
                    placeholder="Enter NFT Token ID"
                    value={tokenId}
                    onChange={(e) => setTokenId(e.target.value)}
                    className="bg-neura-dark/80 border-neura-purple/30 text-white"
                  />
                </div>
                <Button 
                  variant="outline" 
                  size="icon"
                  className="border-neura-purple/30 text-white hover:bg-neura-purple/10"
                  onClick={handleScanQR}
                >
                  <QrCode className="w-4 h-4" />
                </Button>
              </div>
            )}
            
            <Button 
              className="w-full bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90 mb-6"
              onClick={handleVerify}
              disabled={scanMode || !tokenId.trim()}
            >
              <Shield className="w-4 h-4 mr-2" /> Verify Authenticity
            </Button>
            
            {verificationResult && (
              <div className={`p-4 rounded-lg ${verificationResult === 'success' ? 'bg-emerald-500/10' : 'bg-rose-500/10'}`}>
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full ${verificationResult === 'success' ? 'bg-emerald-500/20' : 'bg-rose-500/20'}`}>
                    {verificationResult === 'success' ? (
                      <Check className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <X className="w-5 h-5 text-rose-400" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-medium">
                      {verificationResult === 'success' ? 'Authentic Product' : 'Verification Failed'}
                    </h4>
                    <p className="text-sm text-white/70">
                      {verificationResult === 'success' 
                        ? 'This product has been verified on the blockchain' 
                        : 'This product could not be verified or may be counterfeit'}
                    </p>
                  </div>
                </div>
                
                {verificationResult === 'success' && (
                  <div className="mt-4 text-xs border-t border-emerald-500/20 pt-4">
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <p className="text-white/60">Token ID</p>
                        <p>{tokenId}</p>
                      </div>
                      <div>
                        <p className="text-white/60">Minted</p>
                        <p>April 15, 2025</p>
                      </div>
                      <div>
                        <p className="text-white/60">Owner</p>
                        <p>0x1a2...3b4c</p>
                      </div>
                      <div>
                        <p className="text-white/60">Transfers</p>
                        <p>2</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
