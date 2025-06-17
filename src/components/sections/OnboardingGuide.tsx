
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, ChevronRight, Wallet, Users, Coins, Shield } from 'lucide-react';

export const OnboardingGuide = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      icon: <Wallet className="w-6 h-6 text-primary" />,
      title: "Connect Your Wallet",
      description: "Link your Web3 wallet (like MetaMask) to get started. Don't have one? We'll show you how to create one safely.",
      action: "Connect Wallet",
      tips: "Your wallet is like your digital identity - it keeps your content and earnings secure."
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Choose Your Creator Path", 
      description: "Select what interests you most: Video Creation, Podcasting, E-commerce, or Social Content.",
      action: "Explore Studios",
      tips: "You can always change or add more interests later as you grow."
    },
    {
      icon: <Coins className="w-6 h-6 text-primary" />,
      title: "Create Your First NFT",
      description: "Turn your content into NFTs that you truly own. Set your own prices and royalties.",
      action: "Create Content",
      tips: "NFTs let you earn ongoing royalties every time your content is resold."
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Build Your Community",
      description: "Use token-gating to create exclusive experiences for your biggest supporters.",
      action: "Launch Community",
      tips: "Token-gated content means only holders of your NFTs can access premium material."
    }
  ];

  return (
    <section className="py-16 bg-card/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Get Started in 4 Simple Steps
            </span>
          </h2>
          <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
            New to Web3? No problem. We'll guide you through everything step by step.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Steps Navigation */}
            <div className="space-y-4">
              {steps.map((step, index) => (
                <Card 
                  key={index}
                  className={`cursor-pointer transition-all duration-300 ${
                    currentStep === index 
                      ? 'border-primary bg-primary/5' 
                      : 'border-border hover:border-primary/50'
                  }`}
                  onClick={() => setCurrentStep(index)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-lg ${
                        currentStep === index ? 'bg-primary/20' : 'bg-muted'
                      }`}>
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                      <ChevronRight className={`w-5 h-5 transition-transform ${
                        currentStep === index ? 'rotate-90 text-primary' : 'text-muted-foreground'
                      }`} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Current Step Details */}
            <div className="bg-card rounded-xl p-8 border border-border">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  {steps[currentStep].icon}
                  <h3 className="text-xl font-bold">{steps[currentStep].title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  {steps[currentStep].description}
                </p>
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-6">
                  <p className="text-sm text-primary">
                    💡 <strong>Pro Tip:</strong> {steps[currentStep].tips}
                  </p>
                </div>
              </div>
              
              <Button className="w-full mb-4">
                {steps[currentStep].action}
              </Button>
              
              <Button variant="outline" className="w-full" size="sm">
                <Play size={16} className="mr-2" />
                Watch Tutorial Video
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
