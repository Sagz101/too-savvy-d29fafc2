
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";
import { Award, Wallet, TrendingUp, Share2, Vote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface LoyaltyRewardsProps {
  onClose: () => void;
}

export const LoyaltyRewards: React.FC<LoyaltyRewardsProps> = ({ onClose }) => {
  const { toast } = useToast();
  const [rewardsClaimed, setRewardsClaimed] = useState(false);
  
  const handleClaimRewards = () => {
    toast({
      title: "Rewards Claimed!",
      description: "You've earned 25 $NEURA tokens for your purchase"
    });
    setRewardsClaimed(true);
  };
  
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold flex items-center">
          <Award className="w-5 h-5 mr-2 text-neura-cyan" /> 
          Loyalty Rewards
        </h2>
        <Button 
          variant="outline" 
          size="sm"
          className="border-neura-purple/30 text-white hover:bg-neura-purple/10"
          onClick={onClose}
        >
          Close
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-neura-dark/50 border-neura-purple/20 col-span-2">
          <CardContent className="p-5">
            <h3 className="font-medium mb-3">Purchase Rewards</h3>
            
            {!rewardsClaimed ? (
              <>
                <p className="text-white/70 text-sm mb-4">
                  You've earned tokens for your purchase! Claim them to increase your loyalty tier.
                </p>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-neura-purple/20 rounded-full">
                    <Wallet className="w-6 h-6 text-neura-cyan" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">25 $NEURA Tokens</span>
                      <span className="text-xs text-white/60">~$12.50 USD</span>
                    </div>
                    <Progress value={100} className="h-1 mt-1" />
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90"
                  onClick={handleClaimRewards}
                >
                  Claim Rewards
                </Button>
              </>
            ) : (
              <div className="text-center py-4">
                <div className="w-16 h-16 mx-auto bg-neura-purple/20 rounded-full flex items-center justify-center mb-3">
                  <Award className="w-8 h-8 text-neura-cyan" />
                </div>
                <h4 className="font-medium mb-2">Rewards Claimed!</h4>
                <p className="text-white/70 text-sm">
                  You've earned 25 $NEURA tokens for your purchase
                </p>
              </div>
            )}
          </CardContent>
        </Card>
        
        <Card className="bg-neura-dark/50 border-neura-purple/20">
          <CardContent className="p-5">
            <h3 className="font-medium mb-3">Your Loyalty Status</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-4 h-4 text-neura-cyan" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Tier Progress</span>
                    <span className="text-xs font-medium">75/100</span>
                  </div>
                  <Progress value={75} className="h-1 mt-1" />
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Share2 className="w-4 h-4 text-neura-cyan" />
                <div>
                  <p className="text-sm">Share-to-Earn Points</p>
                  <p className="text-xs text-white/60">15 points</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Vote className="w-4 h-4 text-neura-cyan" />
                <div>
                  <p className="text-sm">DAO Voting Power</p>
                  <p className="text-xs text-white/60">3 votes</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
