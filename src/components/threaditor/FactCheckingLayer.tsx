
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  CheckCircle, 
  XCircle, 
  AlertTriangle,
  Users,
  TrendingUp,
  ExternalLink
} from 'lucide-react';

interface FactCheckData {
  id: string;
  claim: string;
  postTitle: string;
  author: string;
  votes: {
    verified: number;
    disputed: number;
    needsReview: number;
  };
  status: 'verified' | 'disputed' | 'pending';
  sources: string[];
  stakeAmount: number;
}

export const FactCheckingLayer: React.FC = () => {
  const [factChecks] = useState<FactCheckData[]>([
    {
      id: '1',
      claim: 'DeFi TVL increased by 40% in Q2 2024',
      postTitle: 'Market Report: Q2 2024 Trends',
      author: 'MarketWatcher',
      votes: { verified: 23, disputed: 2, needsReview: 5 },
      status: 'verified',
      sources: ['DeFiLlama', 'CoinGecko', 'DeBank'],
      stakeAmount: 150
    },
    {
      id: '2',
      claim: 'New protocol has zero security audits',
      postTitle: 'Breaking: New DeFi Protocol Analysis',
      author: 'BlockchainAnalyst',
      votes: { verified: 18, disputed: 8, needsReview: 12 },
      status: 'pending',
      sources: ['GitHub', 'Protocol Documentation'],
      stakeAmount: 89
    },
    {
      id: '3',
      claim: 'Creator earnings increased 300% with Web3 platforms',
      postTitle: 'The Future of Decentralized Content Creation',
      author: 'CryptoJournalist',
      votes: { verified: 45, disputed: 15, needsReview: 8 },
      status: 'disputed',
      sources: ['Survey Data', 'Platform Analytics'],
      stakeAmount: 203
    }
  ]);

  const getTotalVotes = (votes: FactCheckData['votes']) => {
    return votes.verified + votes.disputed + votes.needsReview;
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'verified':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'disputed':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'verified':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'disputed':
        return 'bg-red-100 text-red-700 border-red-200';
      default:
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
    }
  };

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Fact-Checking Dashboard</h2>
        <p className="text-muted-foreground">
          Community-driven verification system for claims in published content
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <div>
                <p className="text-sm text-muted-foreground">Verified Claims</p>
                <p className="text-2xl font-bold">156</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-yellow-500" />
              <div>
                <p className="text-sm text-muted-foreground">Under Review</p>
                <p className="text-2xl font-bold">23</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-500" />
              <div>
                <p className="text-sm text-muted-foreground">Active Reviewers</p>
                <p className="text-2xl font-bold">89</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        {factChecks.map((factCheck) => (
          <Card key={factCheck.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    {getStatusIcon(factCheck.status)}
                    <Badge variant="outline" className={getStatusColor(factCheck.status)}>
                      {factCheck.status.charAt(0).toUpperCase() + factCheck.status.slice(1)}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg mb-2">{factCheck.claim}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    From: <span className="font-medium">{factCheck.postTitle}</span> by {factCheck.author}
                  </p>
                </div>
                <Button variant="ghost" size="sm">
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Community Verification</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Verified ({factCheck.votes.verified})
                    </span>
                    <span>{((factCheck.votes.verified / getTotalVotes(factCheck.votes)) * 100).toFixed(1)}%</span>
                  </div>
                  <Progress 
                    value={(factCheck.votes.verified / getTotalVotes(factCheck.votes)) * 100} 
                    className="h-2" 
                  />
                  
                  <div className="flex justify-between text-sm">
                    <span className="flex items-center gap-1">
                      <XCircle className="w-4 h-4 text-red-500" />
                      Disputed ({factCheck.votes.disputed})
                    </span>
                    <span>{((factCheck.votes.disputed / getTotalVotes(factCheck.votes)) * 100).toFixed(1)}%</span>
                  </div>
                  <Progress 
                    value={(factCheck.votes.disputed / getTotalVotes(factCheck.votes)) * 100} 
                    className="h-2" 
                  />
                  
                  <div className="flex justify-between text-sm">
                    <span className="flex items-center gap-1">
                      <AlertTriangle className="w-4 h-4 text-yellow-500" />
                      Needs Review ({factCheck.votes.needsReview})
                    </span>
                    <span>{((factCheck.votes.needsReview / getTotalVotes(factCheck.votes)) * 100).toFixed(1)}%</span>
                  </div>
                  <Progress 
                    value={(factCheck.votes.needsReview / getTotalVotes(factCheck.votes)) * 100} 
                    className="h-2" 
                  />
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Sources Referenced</h4>
                <div className="flex flex-wrap gap-2">
                  {factCheck.sources.map((source, index) => (
                    <Badge key={index} variant="outline">
                      {source}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium">{factCheck.stakeAmount} $NEURAX</span> staked by community
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="text-green-600 border-green-600">
                    Verify
                  </Button>
                  <Button variant="outline" size="sm" className="text-red-600 border-red-600">
                    Dispute
                  </Button>
                  <Button variant="outline" size="sm">
                    Review Sources
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Reviewer Stats</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold">67</div>
              <div className="text-sm text-muted-foreground">Reviews Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">94%</div>
              <div className="text-sm text-muted-foreground">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">234</div>
              <div className="text-sm text-muted-foreground">$NEURAX Earned</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">Gold</div>
              <div className="text-sm text-muted-foreground">Reviewer Badge</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
