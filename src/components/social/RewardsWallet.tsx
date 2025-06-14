
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Coins, 
  Trophy, 
  Gift, 
  TrendingUp, 
  Star,
  Award,
  Target,
  Zap
} from 'lucide-react';

interface RewardTier {
  name: string;
  requirement: number;
  reward: string;
  unlocked: boolean;
  progress: number;
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  earned: boolean;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  reward: number;
}

export const RewardsWallet: React.FC = () => {
  const [balance] = useState({
    neurax: 1247.8,
    pending: 156.3,
    totalEarned: 5420.1
  });

  const [rewardTiers] = useState<RewardTier[]>([
    {
      name: 'Social Butterfly',
      requirement: 1000,
      reward: 'Silver Badge NFT',
      unlocked: true,
      progress: 100
    },
    {
      name: 'Viral Creator',
      requirement: 5000,
      reward: 'Gold Badge NFT',
      unlocked: false,
      progress: 85
    },
    {
      name: 'Community Legend',
      requirement: 10000,
      reward: 'Diamond Badge NFT',
      unlocked: false,
      progress: 42
    }
  ]);

  const [achievements] = useState<Achievement[]>([
    {
      id: '1',
      title: 'First Share',
      description: 'Share your first post across platforms',
      icon: 'share',
      earned: true,
      rarity: 'common',
      reward: 10
    },
    {
      id: '2',
      title: 'Viral Hit',
      description: 'Reach 1,000 shares on a single post',
      icon: 'trending',
      earned: true,
      rarity: 'rare',
      reward: 100
    },
    {
      id: '3',
      title: 'Community Builder',
      description: 'Help 50 other creators with engagement',
      icon: 'users',
      earned: false,
      rarity: 'epic',
      reward: 500
    },
    {
      id: '4',
      title: 'Platform Master',
      description: 'Successfully publish to all 5 platforms',
      icon: 'crown',
      earned: false,
      rarity: 'legendary',
      reward: 1000
    }
  ]);

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'bg-gray-500';
      case 'rare': return 'bg-blue-500';
      case 'epic': return 'bg-purple-500';
      case 'legendary': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-green-100 rounded-full">
                <Coins className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Available Balance</p>
                <p className="text-2xl font-bold">{balance.neurax} $NEURAX</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-yellow-100 rounded-full">
                <Zap className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Pending Rewards</p>
                <p className="text-2xl font-bold">{balance.pending} $NEURAX</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-100 rounded-full">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Earned</p>
                <p className="text-2xl font-bold">{balance.totalEarned} $NEURAX</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="w-5 h-5" />
            Reward Tiers
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {rewardTiers.map((tier, index) => (
            <div key={index} className="border rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{tier.name}</h3>
                <div className="flex items-center gap-2">
                  {tier.unlocked ? (
                    <Badge className="bg-green-500 text-white">Unlocked</Badge>
                  ) : (
                    <Badge variant="outline">Locked</Badge>
                  )}
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress: {tier.requirement.toLocaleString()} shares needed</span>
                  <span>{tier.progress}%</span>
                </div>
                <Progress value={tier.progress} className="h-2" />
              </div>
              
              <div className="flex items-center gap-2">
                <Gift className="w-4 h-4 text-purple-500" />
                <span className="text-sm font-medium">Reward: {tier.reward}</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="w-5 h-5" />
            Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement) => (
              <div 
                key={achievement.id} 
                className={`border rounded-lg p-4 ${achievement.earned ? 'bg-green-50 border-green-200' : 'bg-gray-50'}`}
              >
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-full ${achievement.earned ? 'bg-green-100' : 'bg-gray-200'}`}>
                    <Star className={`w-5 h-5 ${achievement.earned ? 'text-green-600' : 'text-gray-400'}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium">{achievement.title}</h3>
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${getRarityColor(achievement.rarity)} text-white`}
                      >
                        {achievement.rarity}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {achievement.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <Coins className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm font-medium">
                        {achievement.reward} $NEURAX
                      </span>
                      {achievement.earned && (
                        <Badge variant="outline" className="text-xs bg-green-100 text-green-800">
                          Claimed
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Claim Rewards</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h3 className="font-medium">Pending Share Rewards</h3>
              <p className="text-sm text-muted-foreground">
                From 23 qualifying shares this week
              </p>
            </div>
            <div className="text-right">
              <p className="font-semibold">{balance.pending} $NEURAX</p>
              <Button size="sm">Claim</Button>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h3 className="font-medium">Viral Bonus</h3>
              <p className="text-sm text-muted-foreground">
                Reached 1K shares milestone
              </p>
            </div>
            <div className="text-right">
              <p className="font-semibold">500 $NEURAX</p>
              <Button size="sm" variant="outline" disabled>
                <Target className="w-4 h-4 mr-1" />
                Pending
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
