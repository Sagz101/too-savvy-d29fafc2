import React from 'react';
import { GatedContent } from '@/components/wallet/GatedContent';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Crown, 
  Zap, 
  Shield, 
  Gem, 
  Rocket, 
  Star,
  TrendingUp,
  Users
} from 'lucide-react';

const premiumFeatures = [
  {
    icon: Crown,
    title: 'Priority Minting',
    description: 'Get early access to limited NFT drops before they go public',
    badge: 'Exclusive',
  },
  {
    icon: Zap,
    title: 'Zero Gas Fees',
    description: 'Enjoy gasless transactions on all supported chains',
    badge: 'Pro',
  },
  {
    icon: Shield,
    title: 'Enhanced Security',
    description: 'Advanced wallet protection and multi-sig support',
    badge: 'Premium',
  },
  {
    icon: Gem,
    title: 'Revenue Share',
    description: 'Earn a share of platform fees as a verified creator',
    badge: 'Creator',
  },
  {
    icon: Rocket,
    title: 'Launch Pad Access',
    description: 'Early access to new project launches and IDOs',
    badge: 'VIP',
  },
  {
    icon: Star,
    title: 'Verified Badge',
    description: 'Stand out with a verified creator badge on your profile',
    badge: 'Verified',
  },
];

const PremiumContent = () => (
  <div className="space-y-8">
    <div className="text-center mb-8">
      <Badge variant="outline" className="border-primary/50 text-primary bg-primary/10 mb-4">
        <Crown className="w-3 h-3 mr-1" />
        Wallet Connected
      </Badge>
      <h3 className="text-2xl font-bold text-foreground mb-2">
        Welcome to Premium Features
      </h3>
      <p className="text-muted-foreground">
        Unlock exclusive benefits as a verified member
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {premiumFeatures.map((feature, index) => (
        <Card 
          key={index}
          className="bg-card/50 border-border/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group"
        >
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <Badge variant="secondary" className="text-xs">
                {feature.badge}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <CardTitle className="text-lg mb-2">{feature.title}</CardTitle>
            <p className="text-sm text-muted-foreground">{feature.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
      <div className="bg-primary/10 rounded-xl p-4 text-center border border-primary/20">
        <TrendingUp className="w-6 h-6 text-primary mx-auto mb-2" />
        <p className="text-2xl font-bold text-foreground">25%</p>
        <p className="text-xs text-muted-foreground">Fee Discount</p>
      </div>
      <div className="bg-primary/10 rounded-xl p-4 text-center border border-primary/20">
        <Users className="w-6 h-6 text-primary mx-auto mb-2" />
        <p className="text-2xl font-bold text-foreground">10K+</p>
        <p className="text-xs text-muted-foreground">Premium Members</p>
      </div>
      <div className="bg-primary/10 rounded-xl p-4 text-center border border-primary/20">
        <Gem className="w-6 h-6 text-primary mx-auto mb-2" />
        <p className="text-2xl font-bold text-foreground">$2.1M</p>
        <p className="text-xs text-muted-foreground">Rewards Distributed</p>
      </div>
      <div className="bg-primary/10 rounded-xl p-4 text-center border border-primary/20">
        <Rocket className="w-6 h-6 text-primary mx-auto mb-2" />
        <p className="text-2xl font-bold text-foreground">48</p>
        <p className="text-xs text-muted-foreground">Exclusive Drops</p>
      </div>
    </div>
  </div>
);

export const PremiumFeatures: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <Badge variant="outline" className="border-primary/50 text-primary bg-primary/10 mb-4">
            <Crown className="w-3 h-3 mr-1" />
            Premium Access
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Exclusive Member Benefits
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Connect your wallet to unlock premium features and exclusive benefits available only to verified members.
          </p>
        </div>

        <GatedContent
          title="Premium Features Locked"
          description="Connect your wallet and sign in with Ethereum to access exclusive member benefits, priority minting, and special rewards."
          requireSIWE={true}
        >
          <PremiumContent />
        </GatedContent>
      </div>
    </section>
  );
};
