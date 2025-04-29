
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";
import { Award, Coins, ShoppingCart, Share2, Calendar, Clock, ArrowRight } from 'lucide-react';
import { useWallet } from '@/services/wallet';
import { WalletConnectButton } from '@/components/ui/wallet-connect-button';

interface TokenTransactionType {
  id: string;
  type: 'earned' | 'spent' | 'staked' | 'reward';
  amount: number;
  description: string;
  timestamp: string;
}

export const LoyaltyProgram: React.FC = () => {
  const { toast } = useToast();
  const { wallet } = useWallet();
  const [tokenBalance, setTokenBalance] = useState(125);
  const [stakedAmount, setStakedAmount] = useState(50);
  const [tierProgress, setTierProgress] = useState(75);
  const [availableRewards, setAvailableRewards] = useState(2);
  const [showTransactions, setShowTransactions] = useState(false);
  
  const transactions: TokenTransactionType[] = [
    { id: '1', type: 'earned', amount: 25, description: 'Purchase: NFT-Backed Hoodie', timestamp: '2 days ago' },
    { id: '2', type: 'earned', amount: 10, description: 'Content share: 25 engagements', timestamp: '5 days ago' },
    { id: '3', type: 'staked', amount: 50, description: 'Staked for tier advancement', timestamp: '1 week ago' },
    { id: '4', type: 'spent', amount: 15, description: 'Discount redemption', timestamp: '2 weeks ago' },
    { id: '5', type: 'earned', amount: 30, description: 'Monthly community rewards', timestamp: '3 weeks ago' },
  ];
  
  const handleClaimReward = () => {
    if (!wallet.isConnected) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet to claim rewards",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Claiming reward",
      description: "Processing your reward claim..."
    });
    
    // Simulate delay for reward processing
    setTimeout(() => {
      setAvailableRewards(prev => Math.max(0, prev - 1));
      setTokenBalance(prev => prev + 20);
      
      toast({
        title: "Reward claimed!",
        description: "You've received 20 $NEURA tokens"
      });
    }, 1500);
  };
  
  const handleStakeTokens = () => {
    if (!wallet.isConnected) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet to stake tokens",
        variant: "destructive",
      });
      return;
    }
    
    if (tokenBalance < 25) {
      toast({
        title: "Insufficient balance",
        description: "You need at least 25 tokens to stake",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Staking tokens",
      description: "Processing your staking request..."
    });
    
    // Simulate delay for staking
    setTimeout(() => {
      setTokenBalance(prev => prev - 25);
      setStakedAmount(prev => prev + 25);
      setTierProgress(prev => Math.min(100, prev + 15));
      
      toast({
        title: "Tokens staked!",
        description: "You've staked 25 $NEURA tokens"
      });
    }, 1500);
  };
  
  const getTransactionIcon = (type: 'earned' | 'spent' | 'staked' | 'reward') => {
    switch (type) {
      case 'earned':
        return <Coins className="w-4 h-4 text-emerald-400" />;
      case 'spent':
        return <ShoppingCart className="w-4 h-4 text-amber-400" />;
      case 'staked':
        return <Award className="w-4 h-4 text-neura-cyan" />;
      case 'reward':
        return <Gift className="w-4 h-4 text-purple-400" />;
    }
  };
  
  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-xl font-semibold mb-2">Tokenized Loyalty Program</h2>
        <p className="text-white/70">
          Earn and stake $NEURA tokens to unlock loyalty tiers, rewards, and DAO voting power
        </p>
      </div>
      
      {!wallet.isConnected ? (
        <div className="text-center py-8">
          <Award className="w-16 h-16 mx-auto text-white/30 mb-4" />
          <h3 className="text-lg font-medium mb-3">Connect Your Wallet</h3>
          <p className="text-white/70 mb-6 max-w-md mx-auto">
            Connect your wallet to view your loyalty status and token balance
          </p>
          <WalletConnectButton />
        </div>
      ) : (
        <div>
          <Card className="bg-neura-dark/50 border-neura-purple/20 mb-8">
            <CardContent className="p-5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col items-center p-4">
                  <div className="mb-2">
                    <span className="text-xs text-white/60">Current Tier</span>
                    <h3 className="text-2xl font-bold">Silver</h3>
                  </div>
                  <div className="w-full mb-2">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span>Silver</span>
                      <span>Gold</span>
                    </div>
                    <Progress value={tierProgress} className="h-2" />
                  </div>
                  <p className="text-xs text-white/70">{tierProgress}/100 points to next tier</p>
                </div>
                
                <div className="border-t md:border-t-0 md:border-l md:border-r border-neura-purple/20 p-4 text-center">
                  <div className="mb-1">
                    <span className="text-xs text-white/60">$NEURA Balance</span>
                    <div className="flex items-center justify-center gap-1">
                      <Coins className="w-4 h-4 text-neura-cyan" />
                      <h3 className="text-2xl font-bold">{tokenBalance}</h3>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="text-xs text-white/60">Staked</span>
                    <div className="flex items-center justify-center gap-1">
                      <Award className="w-4 h-4 text-neura-cyan" />
                      <p className="font-medium">{stakedAmount}</p>
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90"
                    onClick={handleStakeTokens}
                  >
                    Stake 25 Tokens
                  </Button>
                </div>
                
                <div className="border-t md:border-t-0 p-4 text-center flex flex-col">
                  <div className="mb-3">
                    <span className="text-xs text-white/60">Available Rewards</span>
                    <h3 className="text-2xl font-bold">{availableRewards}</h3>
                  </div>
                  
                  <Button 
                    className="bg-neura-purple/20 text-white hover:bg-neura-purple/30 mb-2"
                    disabled={availableRewards <= 0}
                    onClick={handleClaimReward}
                  >
                    <Gift className="w-4 h-4 mr-2" /> Claim Reward
                  </Button>
                  
                  <button 
                    className="text-xs text-white/70 hover:text-white flex items-center justify-center gap-1 mt-auto"
                    onClick={() => setShowTransactions(!showTransactions)}
                  >
                    {showTransactions ? 'Hide' : 'View'} Transaction History
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {showTransactions && (
            <Card className="bg-neura-dark/50 border-neura-purple/20 mb-8">
              <CardContent className="p-5">
                <h3 className="font-medium mb-4">Transaction History</h3>
                <div className="space-y-3">
                  {transactions.map(transaction => (
                    <div 
                      key={transaction.id}
                      className="flex items-center justify-between p-3 bg-neura-dark/40 rounded-lg border border-neura-purple/10"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-neura-purple/10 rounded-full">
                          {getTransactionIcon(transaction.type)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-sm">
                              {transaction.type === 'spent' || transaction.type === 'staked' ? '-' : '+'}{transaction.amount} $NEURA
                            </span>
                            <Badge className={`text-xs ${
                              transaction.type === 'earned' || transaction.type === 'reward' 
                                ? 'bg-emerald-500/20 text-emerald-300' 
                                : transaction.type === 'staked'
                                  ? 'bg-blue-500/20 text-blue-300'
                                  : 'bg-amber-500/20 text-amber-300'
                            }`}>
                              {transaction.type}
                            </Badge>
                          </div>
                          <p className="text-xs text-white/60">{transaction.description}</p>
                        </div>
                      </div>
                      <div className="text-xs text-white/50 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{transaction.timestamp}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-neura-dark/50 border-neura-purple/20">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-neura-purple/10 rounded-full">
                    <ShoppingCart className="w-5 h-5 text-neura-cyan" />
                  </div>
                  <h3 className="font-medium">Purchase Rewards</h3>
                </div>
                <p className="text-sm text-white/70 mb-3">
                  Earn tokens with every purchase based on your loyalty tier
                </p>
                <div className="text-xs space-y-2">
                  <div className="flex justify-between">
                    <span>Bronze Tier</span>
                    <span>2% back in tokens</span>
                  </div>
                  <div className="flex justify-between font-medium text-neura-cyan">
                    <span>Silver Tier (Current)</span>
                    <span>5% back in tokens</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Gold Tier</span>
                    <span>10% back in tokens</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-neura-dark/50 border-neura-purple/20">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-neura-purple/10 rounded-full">
                    <Share2 className="w-5 h-5 text-neura-cyan" />
                  </div>
                  <h3 className="font-medium">Share-to-Earn</h3>
                </div>
                <p className="text-sm text-white/70 mb-3">
                  Earn tokens when your shared content drives engagement
                </p>
                <div className="text-xs space-y-2">
                  <div className="flex justify-between">
                    <span>10 engagements</span>
                    <span>5 tokens</span>
                  </div>
                  <div className="flex justify-between">
                    <span>25 engagements</span>
                    <span>15 tokens</span>
                  </div>
                  <div className="flex justify-between">
                    <span>50+ engagements</span>
                    <span>40 tokens</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-neura-dark/50 border-neura-purple/20">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-neura-purple/10 rounded-full">
                    <Calendar className="w-5 h-5 text-neura-cyan" />
                  </div>
                  <h3 className="font-medium">Monthly Rewards</h3>
                </div>
                <p className="text-sm text-white/70 mb-3">
                  Staked tokens earn monthly rewards and boost your loyalty tier
                </p>
                <div className="text-xs space-y-2">
                  <div className="flex justify-between">
                    <span>Current stake</span>
                    <span>{stakedAmount} tokens</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly reward rate</span>
                    <span>8% APR</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Next reward date</span>
                    <span>May 15, 2025</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

import { Gift } from 'lucide-react';
