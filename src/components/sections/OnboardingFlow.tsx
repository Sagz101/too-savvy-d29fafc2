import React, { useState } from 'react';
import { DualOnboarding } from '@/components/auth/DualOnboarding';
import { Web3UpgradePrompt } from '@/components/auth/Web3UpgradePrompt';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/services/auth';
import { 
  Palette, 
  BookOpen, 
  ShoppingCart, 
  Crown, 
  Star,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export const OnboardingFlow = () => {
  const [showUpgradePrompt, setShowUpgradePrompt] = useState(false);
  const auth = useAuth();

  const templates = [
    {
      icon: <Palette className="w-6 h-6 text-neura-cyan" />,
      title: "Portfolio for Artists",
      description: "Showcase and sell your visual works",
      features: ["NFT Gallery", "Commission System", "Social Proof"]
    },
    {
      icon: <BookOpen className="w-6 h-6 text-neura-cyan" />,
      title: "Blog for Writers", 
      description: "Publish and monetize written content",
      features: ["Content Monetization", "Reader Analytics", "Newsletter"]
    },
    {
      icon: <ShoppingCart className="w-6 h-6 text-neura-cyan" />,
      title: "Store for Creators",
      description: "Sell digital and physical products",
      features: ["Product Catalog", "Payment Processing", "Inventory"]
    }
  ];

  if (auth.isAuthenticated) {
    return (
      <section className="py-20 relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neura-dark/0 via-neura-purple/5 to-neura-dark/0"></div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-neura-purple to-neura-cyan bg-clip-text text-transparent">
                Welcome to Too Savvy, {auth.user?.profile?.name || 'Creator'}!
              </span>
            </h2>
            <p className="text-white/70 md:text-lg max-w-2xl mx-auto">
              {auth.canUpgradeToWeb3 
                ? "You're using traditional login. Ready to unlock Web3 features?"
                : "You're all set with Web3! Explore what you can build."}
            </p>
            
            {auth.canUpgradeToWeb3 && (
              <div className="mt-6">
                <Button 
                  onClick={() => setShowUpgradePrompt(true)}
                  className="bg-gradient-to-r from-solar-core to-solar-radiative"
                >
                  <Crown className="mr-2 w-4 h-4" />
                  Upgrade to Web3
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {templates.map((template, index) => (
              <TemplateCard 
                key={index}
                {...template}
                isPremium={auth.canUpgradeToWeb3}
              />
            ))}
          </div>
          
          <p className="text-center mt-8 text-white/60 text-sm">
            Pre-built templates to get you started immediately
          </p>
        </div>

        {showUpgradePrompt && (
          <Web3UpgradePrompt 
            onClose={() => setShowUpgradePrompt(false)}
            onUpgrade={() => setShowUpgradePrompt(false)}
          />
        )}
      </section>
    );
  }

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neura-dark/0 via-neura-purple/5 to-neura-dark/0"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neura-purple to-neura-cyan bg-clip-text text-transparent">
              Start Your Web3 Journey
            </span>
          </h2>
          <p className="text-white/70 md:text-lg max-w-2xl mx-auto">
            Choose how you want to enter the decentralized web - we've simplified the process
          </p>
        </div>
        
        <DualOnboarding />
      </div>
    </section>
  );
};

const TemplateCard = ({ icon, title, description, features, isPremium }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  isPremium?: boolean;
}) => {
  return (
    <Card className="bg-neura-dark/30 border-neura-purple/20 hover:border-neura-purple/50 transition-all cursor-pointer relative">
      <CardContent className="p-6">
        {isPremium && (
          <Badge variant="outline" className="absolute top-3 right-3 border-solar-core text-solar-core text-xs">
            Upgrade for Premium
          </Badge>
        )}
        <div className="p-3 rounded-full bg-neura-purple/10 w-14 h-14 flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="font-medium mb-2">{title}</h3>
        <p className="text-white/60 text-sm mb-4">{description}</p>
        <div className="space-y-2">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center text-xs text-white/70">
              <CheckCircle className="w-3 h-3 mr-2 text-neura-cyan" />
              {feature}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
