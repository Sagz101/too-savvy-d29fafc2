
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Shield, Zap } from "lucide-react";

type UXAdoptionFeaturesProps = {
  gaslessTransactionsEnabled: boolean;
  sovereigntyLevel: 'custodial' | 'social' | 'smart-contract' | 'mpc' | 'full';
  onToggleGasless?: (enabled: boolean) => Promise<boolean>;
  onUpgradeSovereignty?: (level: 'custodial' | 'social' | 'smart-contract' | 'mpc' | 'full') => Promise<boolean>;
};

export const UXAdoptionFeatures: React.FC<UXAdoptionFeaturesProps> = ({
  gaslessTransactionsEnabled,
  sovereigntyLevel,
  onToggleGasless,
  onUpgradeSovereignty
}) => {
  const getSovereigntyLevelInfo = (level: string) => {
    switch (level) {
      case 'custodial':
        return {
          title: 'Custodial',
          description: 'Neura manages your keys',
          security: 'Basic',
          control: 'Low'
        };
      case 'social':
        return {
          title: 'Social Recovery',
          description: 'Recovery via trusted contacts',
          security: 'Good',
          control: 'Medium'
        };
      case 'smart-contract':
        return {
          title: 'Smart Contract',
          description: 'Programmable wallet account',
          security: 'High',
          control: 'High'
        };
      case 'mpc':
        return {
          title: 'MPC Wallet',
          description: 'Multi-party computation',
          security: 'Advanced',
          control: 'High'
        };
      case 'full':
        return {
          title: 'Full Self-Custody',
          description: 'Complete key management',
          security: 'Highest',
          control: 'Complete'
        };
      default:
        return {
          title: 'Unknown',
          description: 'Unknown wallet type',
          security: 'Unknown',
          control: 'Unknown'
        };
    }
  };

  const sovereigntyLevels = ['custodial', 'social', 'smart-contract', 'mpc', 'full'];
  const currentLevelInfo = getSovereigntyLevelInfo(sovereigntyLevel);
  
  return (
    <div className="space-y-6">
      {/* Gasless Transactions Section */}
      <Card className="bg-neura-dark/80 border-neura-purple/20">
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Zap className="w-5 h-5 mr-2 text-neura-cyan" />
            Gasless Transactions
          </CardTitle>
          <CardDescription>
            Abstract gas fees for frictionless user experience
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-neura-dark/50 border border-neura-purple/20 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="font-medium">Gasless Transactions</div>
                <div className="text-sm text-white/70">
                  Enable transactions without paying gas fees
                </div>
              </div>
              <Switch 
                checked={gaslessTransactionsEnabled} 
                onCheckedChange={onToggleGasless}
              />
            </div>
            
            <div className="text-sm mb-3">
              {gaslessTransactionsEnabled ? (
                <>Gasless transactions are <span className="text-green-500">enabled</span>. Network fees are covered by Neura.</>
              ) : (
                <>Gasless transactions are <span className="text-yellow-500">disabled</span>. You'll pay standard network fees.</>
              )}
            </div>
            
            <div className="text-xs text-white/50">
              Powered by Biconomy Meta Transactions
            </div>
          </div>
          
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-2">
              <span>Monthly Free Transactions</span>
              <span>17 / 20</span>
            </div>
            <div className="w-full h-2 bg-neura-dark rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-neura-purple to-neura-cyan" style={{ width: '85%' }}></div>
            </div>
            <div className="text-xs text-white/50 mt-1">
              Resets on June 6, 2025
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Progressive Sovereignty Model Section */}
      <Card className="bg-neura-dark/80 border-neura-purple/20">
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Shield className="w-5 h-5 mr-2 text-neura-cyan" />
            Wallet Sovereignty
          </CardTitle>
          <CardDescription>
            Progressively upgrade to full self-custody
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm">Current Level</span>
              <Badge className="bg-neura-cyan/20 text-neura-cyan border-neura-cyan/30">
                {currentLevelInfo.title}
              </Badge>
            </div>
            <p className="text-sm text-white/70 mb-3">
              {currentLevelInfo.description}
            </p>
            
            <div className="grid grid-cols-2 gap-2 text-sm mb-2">
              <div className="bg-neura-dark/50 border border-neura-purple/20 rounded-lg p-2">
                <div className="text-white/50">Security</div>
                <div>{currentLevelInfo.security}</div>
              </div>
              <div className="bg-neura-dark/50 border border-neura-purple/20 rounded-lg p-2">
                <div className="text-white/50">Control</div>
                <div>{currentLevelInfo.control}</div>
              </div>
            </div>
          </div>
          
          {/* Upgrade path visualization */}
          <div className="mb-4">
            <div className="text-sm mb-2">Sovereignty Path</div>
            <div className="flex">
              {sovereigntyLevels.map((level, index) => (
                <div key={index} className="flex-1 relative">
                  <div 
                    className={`
                      w-full h-2 ${index < sovereigntyLevels.indexOf(sovereigntyLevel) ? 'bg-gradient-to-r from-neura-purple to-neura-cyan' : 'bg-neura-dark'}
                      ${index === 0 ? 'rounded-l-full' : ''} ${index === sovereigntyLevels.length - 1 ? 'rounded-r-full' : ''}
                    `}
                  ></div>
                  <div 
                    className={`
                      absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                      w-4 h-4 rounded-full ${level === sovereigntyLevel ? 'bg-neura-cyan' : 'bg-neura-dark border border-neura-purple/30'}
                    `}
                  ></div>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-xs mt-1">
              <span>Basic</span>
              <span className="text-center">Social</span>
              <span className="text-center">Contract</span>
              <span className="text-center">MPC</span>
              <span className="text-right">Full</span>
            </div>
          </div>
          
          <Card className="bg-neura-dark/80 border-neura-purple/10 p-4">
            <div className="text-sm mb-3">Upgrade to Next Level</div>
            
            {sovereigntyLevel !== 'full' ? (
              <>
                <div className="text-sm text-white/70 mb-3">
                  {sovereigntyLevel === 'custodial' && "Add trusted contacts for social recovery."}
                  {sovereigntyLevel === 'social' && "Deploy your own smart contract wallet."}
                  {sovereigntyLevel === 'smart-contract' && "Enable multi-party computation security."}
                  {sovereigntyLevel === 'mpc' && "Take full control of your private keys."}
                </div>
                <Button 
                  className="w-full bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90"
                  onClick={() => {
                    const currentIndex = sovereigntyLevels.indexOf(sovereigntyLevel);
                    if (currentIndex < sovereigntyLevels.length - 1 && onUpgradeSovereignty) {
                      onUpgradeSovereignty(sovereigntyLevels[currentIndex + 1] as any);
                    }
                  }}
                >
                  Upgrade Security
                </Button>
              </>
            ) : (
              <div className="text-sm text-white/70">
                You've reached the highest level of wallet sovereignty. You have complete control over your assets.
              </div>
            )}
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};
