
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { Wallet, Mail, Globe, Zap, Shield, Users } from "lucide-react";

interface OnboardingFlowProps {
  onComplete: () => void;
}

export const OnboardingFlow: React.FC<OnboardingFlowProps> = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [selectedChains, setSelectedChains] = useState<string[]>([]);
  const [authMethod, setAuthMethod] = useState<'wallet' | 'email' | null>(null);

  const chains = [
    { id: 'ethereum', name: 'Ethereum', gasStatus: 'High', color: 'blue' },
    { id: 'polygon', name: 'Polygon', gasStatus: 'Low', color: 'purple' },
    { id: 'bnb', name: 'BNB Chain', gasStatus: 'Medium', color: 'yellow' },
    { id: 'avalanche', name: 'Avalanche', gasStatus: 'Low', color: 'red' },
  ];

  const handleChainSelect = (chainId: string) => {
    setSelectedChains(prev => 
      prev.includes(chainId) 
        ? prev.filter(id => id !== chainId)
        : [...prev, chainId]
    );
  };

  const handleComplete = () => {
    toast.success("Welcome to Global Innovators!", {
      description: "Your multi-chain setup is complete. Start collaborating!"
    });
    onComplete();
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Welcome to Global Innovators</h2>
        <div className="flex justify-center space-x-2 mb-6">
          {[1, 2, 3].map((i) => (
            <div 
              key={i}
              className={`w-3 h-3 rounded-full ${i <= step ? 'bg-neura-cyan' : 'bg-gray-600'}`}
            />
          ))}
        </div>
      </div>

      {step === 1 && (
        <Card className="bg-neura-dark/80 border-neura-purple/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-neura-cyan" />
              Choose Your Authentication
            </CardTitle>
            <CardDescription>
              Select how you'd like to access the platform
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button
                variant={authMethod === 'wallet' ? 'default' : 'outline'}
                className="h-24 flex-col gap-2"
                onClick={() => setAuthMethod('wallet')}
              >
                <Wallet className="w-8 h-8" />
                <span>Connect Wallet</span>
                <span className="text-xs text-muted-foreground">MetaMask, WalletConnect</span>
              </Button>
              
              <Button
                variant={authMethod === 'email' ? 'default' : 'outline'}
                className="h-24 flex-col gap-2"
                onClick={() => setAuthMethod('email')}
              >
                <Mail className="w-8 h-8" />
                <span>Email Signup</span>
                <span className="text-xs text-muted-foreground">Traditional onboarding</span>
              </Button>
            </div>
            
            <Button 
              className="w-full" 
              disabled={!authMethod}
              onClick={() => setStep(2)}
            >
              Continue
            </Button>
          </CardContent>
        </Card>
      )}

      {step === 2 && (
        <Card className="bg-neura-dark/80 border-neura-purple/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-neura-cyan" />
              Multi-Chain Setup
            </CardTitle>
            <CardDescription>
              Select blockchain networks for optimal gas fees and ecosystem access
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {chains.map((chain) => (
                <div
                  key={chain.id}
                  className={`p-4 border rounded-lg cursor-pointer transition-all ${
                    selectedChains.includes(chain.id)
                      ? 'border-neura-cyan bg-neura-cyan/10'
                      : 'border-gray-600 hover:border-gray-500'
                  }`}
                  onClick={() => handleChainSelect(chain.id)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">{chain.name}</h3>
                    <Badge 
                      variant={chain.gasStatus === 'Low' ? 'default' : 'destructive'}
                      className="text-xs"
                    >
                      {chain.gasStatus} Gas
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Recommended for {chain.gasStatus.toLowerCase()} gas fee projects
                  </p>
                </div>
              ))}
            </div>
            
            <Button 
              className="w-full" 
              disabled={selectedChains.length === 0}
              onClick={() => setStep(3)}
            >
              Continue to Platform
            </Button>
          </CardContent>
        </Card>
      )}

      {step === 3 && (
        <Card className="bg-neura-dark/80 border-neura-purple/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-neura-cyan" />
              Platform Overview
            </CardTitle>
            <CardDescription>
              You're ready to start collaborating on breakthrough projects
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4">
                <Rocket className="w-8 h-8 text-neura-cyan mx-auto mb-2" />
                <h3 className="font-medium mb-1">Launch Projects</h3>
                <p className="text-sm text-muted-foreground">Create innovation projects with NFT ownership</p>
              </div>
              
              <div className="text-center p-4">
                <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <h3 className="font-medium mb-1">DAO Governance</h3>
                <p className="text-sm text-muted-foreground">Decentralized decision making</p>
              </div>
              
              <div className="text-center p-4">
                <Wallet className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <h3 className="font-medium mb-1">Funding Tools</h3>
                <p className="text-sm text-muted-foreground">Treasury management & NFT sales</p>
              </div>
            </div>
            
            <Separator className="bg-gray-600" />
            
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Selected Networks: {selectedChains.map(id => chains.find(c => c.id === id)?.name).join(', ')}
              </p>
              <Button 
                className="bg-gradient-to-r from-neura-cyan to-yellow-400 text-black font-semibold"
                onClick={handleComplete}
              >
                Enter Global Innovators Platform
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
