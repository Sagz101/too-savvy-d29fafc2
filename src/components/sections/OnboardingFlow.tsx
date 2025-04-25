
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Mail, Wallet, Key, Fingerprint, Check, ChevronRight } from 'lucide-react';

export const OnboardingFlow = () => {
  const [step, setStep] = useState(1);
  
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
        
        <div className="max-w-3xl mx-auto">
          <Card className="bg-neura-dark/50 backdrop-blur-md border border-neura-purple/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-8">
                <StepIndicator step={1} currentStep={step} label="Choose Method" />
                <div className="h-1 w-10 bg-neura-purple/30"></div>
                <StepIndicator step={2} currentStep={step} label="Create" />
                <div className="h-1 w-10 bg-neura-purple/30"></div>
                <StepIndicator step={3} currentStep={step} label="Complete" />
              </div>
              
              {step === 1 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-center mb-6">Choose Your Onboarding Path</h3>
                  
                  <Tabs defaultValue="beginner" className="w-full">
                    <TabsList className="grid grid-cols-2 w-full bg-neura-dark/60">
                      <TabsTrigger value="beginner" className="data-[state=active]:bg-neura-purple/20">
                        <Mail className="w-4 h-4 mr-2" />
                        Beginner-Friendly
                      </TabsTrigger>
                      <TabsTrigger value="advanced" className="data-[state=active]:bg-neura-purple/20">
                        <Wallet className="w-4 h-4 mr-2" />
                        Web3 Native
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="beginner" className="mt-4 space-y-4">
                      <div className="bg-neura-purple/10 p-4 rounded-lg">
                        <h4 className="font-medium flex items-center mb-2">
                          <Mail className="w-5 h-5 mr-2 text-neura-cyan" />
                          Email + Password
                        </h4>
                        <p className="text-white/70 text-sm mb-4">
                          Start with a traditional login. We'll create a managed wallet for you behind the scenes.
                        </p>
                        <div className="space-y-3">
                          <Input placeholder="Your email" className="bg-neura-dark/50 border-neura-purple/30" />
                          <Input type="password" placeholder="Create password" className="bg-neura-dark/50 border-neura-purple/30" />
                          <Button className="w-full bg-gradient-to-r from-neura-purple to-neura-cyan">
                            Continue <ChevronRight className="ml-2 w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <p className="text-center text-white/50 text-xs">
                        Your email is only used for account recovery and important notifications
                      </p>
                    </TabsContent>
                    
                    <TabsContent value="advanced" className="mt-4 space-y-4">
                      <div className="bg-neura-purple/10 p-4 rounded-lg flex flex-col items-center">
                        <h4 className="font-medium mb-4">Connect Your Wallet</h4>
                        
                        <div className="grid grid-cols-2 gap-4 w-full">
                          <WalletOption name="MetaMask" />
                          <WalletOption name="WalletConnect" />
                          <WalletOption name="Coinbase" />
                          <WalletOption name="Rainbow" />
                        </div>
                      </div>
                      
                      <p className="text-center text-white/50 text-xs">
                        Connect your existing wallet to access the full power of Web3
                      </p>
                    </TabsContent>
                  </Tabs>
                </div>
              )}
              
              {step === 2 && (
                <div className="text-center">
                  <h3>Step 2 content would go here</h3>
                </div>
              )}
              
              {step === 3 && (
                <div className="text-center">
                  <h3>Step 3 content would go here</h3>
                </div>
              )}
            </CardContent>
          </Card>
          
          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <TemplateCard 
                icon={<Palette className="w-6 h-6 text-neura-cyan" />}
                title="Portfolio for Artists"
                description="Showcase and sell your visual works"
              />
              
              <TemplateCard 
                icon={<BookOpen className="w-6 h-6 text-neura-cyan" />}
                title="Blog for Writers" 
                description="Publish and monetize written content"
              />
              
              <TemplateCard 
                icon={<ShoppingCart className="w-6 h-6 text-neura-cyan" />}
                title="Store for Creators"
                description="Sell digital and physical products"
              />
            </div>
            <p className="text-center mt-4 text-white/60 text-sm">Pre-built templates to get you started immediately</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const StepIndicator = ({ step, currentStep, label }) => {
  const isActive = currentStep >= step;
  
  return (
    <div className="flex flex-col items-center">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
        isActive ? 'bg-neura-purple text-white' : 'bg-neura-purple/20 text-white/50'
      }`}>
        {currentStep > step ? <Check className="w-5 h-5" /> : step}
      </div>
      <span className={`text-xs mt-2 ${isActive ? 'text-white' : 'text-white/50'}`}>{label}</span>
    </div>
  );
};

const WalletOption = ({ name }) => {
  return (
    <Button variant="outline" className="border-neura-purple/30 hover:bg-neura-purple/10 justify-start">
      <div className="w-5 h-5 bg-gradient-to-br from-neura-purple/20 to-neura-cyan/20 rounded-full flex items-center justify-center mr-2 border border-neura-purple/30">
        <Wallet className="w-3 h-3 text-neura-cyan" />
      </div>
      {name}
    </Button>
  );
};

const TemplateCard = ({ icon, title, description }) => {
  return (
    <Card className="bg-neura-dark/30 border-neura-purple/20 hover:border-neura-purple/50 transition-all cursor-pointer">
      <CardContent className="p-5">
        <div className="p-2 rounded-full bg-neura-purple/10 w-12 h-12 flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="font-medium mb-1">{title}</h3>
        <p className="text-white/60 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

import { Palette, BookOpen, ShoppingCart } from 'lucide-react';
