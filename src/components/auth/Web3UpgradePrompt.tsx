
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Wallet, 
  Star, 
  Crown, 
  Coins, 
  Shield, 
  ArrowRight,
  X,
  Sparkles
} from 'lucide-react';
import { useAuth } from '@/components/auth/AuthProvider';
import { toast } from 'sonner';

interface Web3UpgradePromptProps {
  onClose?: () => void;
  onUpgrade?: () => void;
}

export const Web3UpgradePrompt: React.FC<Web3UpgradePromptProps> = ({ 
  onClose, 
  onUpgrade 
}) => {
  const [isUpgrading, setIsUpgrading] = useState(false);
  const { signOut } = useAuth();

  const handleUpgrade = async () => {
    setIsUpgrading(true);
    try {
      // For demo purposes, just simulate success
      toast.success('Successfully upgraded to Web3!');
      onUpgrade?.();
    } catch (error) {
      toast.error('Failed to upgrade to Web3');
    } finally {
      setIsUpgrading(false);
    }
  };

  const premiumFeatures = [
    {
      icon: <Coins className="w-5 h-5" />,
      title: "NFT Creation & Trading",
      description: "Mint, buy, and sell NFTs directly on the platform",
      premium: true
    },
    {
      icon: <Crown className="w-5 h-5" />,
      title: "DAO Governance",
      description: "Vote on platform decisions and feature requests",
      premium: true
    },
    {
      icon: <Star className="w-5 h-5" />,
      title: "Token Rewards",
      description: "Earn platform tokens for activity and contributions",
      premium: true
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Full Asset Ownership",
      description: "True ownership of your digital assets and content",
      premium: true
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="max-w-2xl w-full enhanced-card shadow-2xl cosmic-glow">
        <CardHeader className="relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
          >
            <X size={20} />
          </button>
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-12 h-12 bg-gradient-to-br from-solar-core to-solar-radiative rounded-full flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Upgrade to Web3</CardTitle>
              <p className="text-gray-600">Unlock premium features and true ownership</p>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="bg-gradient-to-r from-solar-photosphere/10 to-solar-corona/10 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-4 flex items-center">
              <Crown className="w-5 h-5 mr-2 text-solar-core" />
              Premium Web3 Features
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {premiumFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-white/50 rounded-lg">
                  <div className="text-solar-radiative mt-1">{feature.icon}</div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium text-sm">{feature.title}</h4>
                      <Badge variant="outline" className="text-xs border-solar-core text-solar-core">
                        Premium
                      </Badge>
                    </div>
                    <p className="text-gray-600 text-xs mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-l-4 border-solar-core bg-solar-photosphere/10 p-4 rounded-r-lg">
            <h4 className="font-medium text-solar-core mb-2">How it works:</h4>
            <ol className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="bg-solar-core text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">1</span>
                Connect your crypto wallet (MetaMask, WalletConnect, etc.)
              </li>
              <li className="flex items-start">
                <span className="bg-solar-core text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">2</span>
                Link it to your existing account - keep all your data
              </li>
              <li className="flex items-start">
                <span className="bg-solar-core text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">3</span>
                Instantly access all Web3 features and earn rewards
              </li>
            </ol>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              onClick={handleUpgrade}
              disabled={isUpgrading}
              className="flex-1 h-12 text-lg"
            >
              {isUpgrading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Connecting Wallet...
                </>
              ) : (
                <>
                  <Wallet className="mr-2 w-5 h-5" />
                  Upgrade to Web3
                  <ArrowRight className="ml-2 w-4 h-4" />
                </>
              )}
            </Button>
            <Button 
              variant="outline" 
              onClick={onClose}
              className="px-6 h-12"
            >
              Maybe Later
            </Button>
          </div>

          <p className="text-center text-xs text-gray-500">
            Your existing account and data will remain safe during the upgrade
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
