
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { X, ChevronRight, ChevronLeft, Play, Wallet, Coins, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface TutorialStep {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType;
  visual?: string;
  tips?: string[];
}

interface InteractiveTutorialProps {
  onComplete: () => void;
  onSkip: () => void;
  userType?: 'new' | 'returning';
}

export const InteractiveTutorial: React.FC<InteractiveTutorialProps> = ({ 
  onComplete, 
  onSkip, 
  userType = 'new' 
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const newUserSteps: TutorialStep[] = [
    {
      id: 'welcome',
      title: 'Welcome to Web3 Creation',
      description: 'T00 Savvy is your gateway to creating, owning, and monetizing content on the blockchain. Let\'s explore the basics!',
      icon: Play,
      tips: ['Own your content forever', 'Earn directly from fans', 'No platform fees']
    },
    {
      id: 'wallet',
      title: 'Connect Your Digital Wallet',
      description: 'A crypto wallet is like your digital identity. It stores your cryptocurrencies, NFTs, and proves ownership of your creations.',
      icon: Wallet,
      tips: ['MetaMask is beginner-friendly', 'Your wallet = your account', 'Keep your seed phrase safe']
    },
    {
      id: 'nfts',
      title: 'Understanding NFTs',
      description: 'NFTs (Non-Fungible Tokens) are unique digital certificates that prove you own a specific piece of content or art.',
      icon: Shield,
      tips: ['Each NFT is unique', 'Stored on blockchain', 'Can be sold or traded']
    },
    {
      id: 'gas-fees',
      title: 'Gas Fees Explained',
      description: 'Gas fees are small payments to process transactions on the blockchain. We optimize these costs for you!',
      icon: Coins,
      tips: ['Varies by network activity', 'We use low-cost chains', 'Batch transactions to save']
    }
  ];

  const returningUserSteps: TutorialStep[] = [
    {
      id: 'dashboard',
      title: 'Your Creator Dashboard',
      description: 'Track your content performance, revenue, and community growth all in one place.',
      icon: Play,
      tips: ['Real-time analytics', 'Revenue tracking', 'Community insights']
    },
    {
      id: 'new-features',
      title: 'What\'s New',
      description: 'Discover new features: AI content assistant, cross-chain support, and enhanced monetization tools.',
      icon: Shield,
      tips: ['AI-powered suggestions', 'Multi-chain deployment', 'Advanced royalties']
    }
  ];

  const steps = userType === 'new' ? newUserSteps : returningUserSteps;
  const progress = ((currentStep + 1) / steps.length) * 100;

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    setIsVisible(false);
    setTimeout(onSkip, 300);
  };

  if (!isVisible) return null;

  const currentStepData = steps[currentStep];
  const Icon = currentStepData.icon;

  return (
    <AnimatePresence>
      <motion.div
        key="tutorial-modal"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <Card className="w-full max-w-lg bg-gradient-to-br from-slate-800/95 to-gray-800/95 border border-cyan-400/20 backdrop-blur-xl">
          <CardHeader className="text-center">
            <div className="flex justify-between items-start mb-4">
              <Badge variant="outline" className="bg-cyan-400/10 text-cyan-400 border-cyan-400/30">
                {userType === 'new' ? 'New User Guide' : 'Welcome Back'}
              </Badge>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleSkip}
                className="text-gray-400 hover:text-white"
              >
                <X size={16} />
              </Button>
            </div>
            
            <div className="mb-4">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full flex items-center justify-center">
                <Icon className="w-8 h-8 text-cyan-400" />
              </div>
              <CardTitle className="text-xl text-white mb-2">
                {currentStepData.title}
              </CardTitle>
              <div className="w-full mb-4">
                <Progress value={progress} />
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <p className="text-gray-300 text-center leading-relaxed">
              {currentStepData.description}
            </p>
            
            {currentStepData.tips && (
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-cyan-400">Quick Tips:</h4>
                <ul className="space-y-1">
                  {currentStepData.tips.map((tip, index) => (
                    <li key={index} className="text-sm text-gray-300 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="flex justify-between items-center pt-4">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 0}
                className="flex items-center gap-2"
              >
                <ChevronLeft size={16} />
                Back
              </Button>
              
              <span className="text-sm text-gray-400">
                {currentStep + 1} of {steps.length}
              </span>
              
              <Button
                onClick={nextStep}
                className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white flex items-center gap-2"
              >
                {currentStep === steps.length - 1 ? 'Get Started' : 'Next'}
                <ChevronRight size={16} />
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
};
