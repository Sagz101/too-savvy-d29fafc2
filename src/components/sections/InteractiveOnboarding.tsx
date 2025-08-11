
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Users, 
  Trophy, 
  Star, 
  ArrowRight, 
  CheckCircle,
  Zap,
  Gift
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface InteractiveOnboardingProps {
  selectedInterests: string[];
}

export const InteractiveOnboarding: React.FC<InteractiveOnboardingProps> = ({ 
  selectedInterests 
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [xpPoints, setXpPoints] = useState(0);

  const onboardingSteps = [
    {
      title: 'Choose Your Path',
      description: 'Select the creator tools that match your vision',
      xpReward: 50,
      badge: 'Explorer',
      completed: selectedInterests.length > 0
    },
    {
      title: 'Connect Your Wallet',
      description: 'Secure your digital identity and assets',
      xpReward: 100,
      badge: 'Web3 Native',
      completed: false
    },
    {
      title: 'Create Your First Asset',
      description: 'Mint your inaugural NFT or publish content',
      xpReward: 200,
      badge: 'Creator',
      completed: false
    },
    {
      title: 'Join the Community',
      description: 'Connect with fellow creators and start collaborating',
      xpReward: 150,
      badge: 'Community Member',
      completed: false
    }
  ];

  const totalXP = onboardingSteps.reduce((sum, step) => sum + step.xpReward, 0);
  const earnedXP = onboardingSteps
    .filter(step => step.completed)
    .reduce((sum, step) => sum + step.xpReward, 0);

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-6">
          Your Creator Journey Starts Here
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Complete challenges, earn XP, and unlock exclusive creator perks as you build your Web3 presence.
        </p>
        
        {/* XP Progress Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-300">Creator XP</span>
            <Badge className="bg-web3-accent/20 text-web3-accent border-web3-accent/30">
              {earnedXP} / {totalXP} XP
            </Badge>
          </div>
          <Progress 
            value={(earnedXP / totalXP) * 100} 
            className="h-3 bg-gray-800"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {onboardingSteps.map((step, index) => (
          <Card
            key={index}
            className={`relative overflow-hidden transition-all duration-300 ${
              step.completed 
                ? 'bg-web3-green/10 border-web3-green/30 ring-1 ring-web3-green/20' 
                : currentStep === index
                ? 'bg-web3-cyan/10 border-web3-cyan/30 ring-1 ring-web3-cyan/20'
                : 'bg-background/40 backdrop-blur-sm hover:bg-background/60'
            }`}
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  step.completed 
                    ? 'bg-web3-green/20 text-web3-green'
                    : 'bg-web3-cyan/20 text-web3-cyan'
                }`}>
                  {step.completed ? (
                    <CheckCircle size={20} />
                  ) : (
                    <span className="font-bold">{index + 1}</span>
                  )}
                </div>
                <Badge variant="outline" className="text-xs">
                  <Zap size={10} className="mr-1" />
                  +{step.xpReward} XP
                </Badge>
              </div>
              
              <CardTitle className="text-base font-semibold text-white">
                {step.title}
              </CardTitle>
              <p className="text-sm text-gray-300">{step.description}</p>
            </CardHeader>
            
            <CardContent className="pt-0">
              {step.completed ? (
                <div className="flex items-center gap-2 text-web3-green text-sm">
                  <Trophy size={16} />
                  <span>Badge: {step.badge}</span>
                </div>
              ) : (
                <Button 
                  size="sm" 
                  className="w-full"
                  variant={currentStep === index ? "default" : "outline"}
                >
                  {currentStep === index ? 'Current Step' : 'Start'}
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Community Achievements */}
      <div className="bg-gradient-to-r from-web3-purple/20 to-web3-cyan/20 rounded-2xl p-8 border border-web3-cyan/20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-web3-purple/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users size={24} className="text-web3-purple" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Join 12,847 Creators</h3>
            <p className="text-gray-300 text-sm">Active monthly creators building their empire</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-web3-accent/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gift size={24} className="text-web3-accent" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Exclusive Perks</h3>
            <p className="text-gray-300 text-sm">Unlock premium features and early access</p>
          </div>
          
          <div className="text-center">
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-web3-cyan to-web3-purple hover:opacity-90 text-white font-semibold"
            >
              <Link to="/onboarding">
                Begin Your Journey
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
