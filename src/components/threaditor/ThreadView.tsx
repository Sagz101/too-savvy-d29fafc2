
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  FileText, 
  Clock, 
  User, 
  GitBranch,
  ExternalLink,
  CheckCircle
} from 'lucide-react';

interface ThreadEntry {
  id: string;
  title: string;
  content: string;
  timestamp: string;
  isVerified: boolean;
  nftTokenId?: string;
}

interface Thread {
  id: string;
  title: string;
  author: string;
  authorAddress: string;
  description: string;
  created: string;
  updated: string;
  entries: ThreadEntry[];
  totalEntries: number;
  isActive: boolean;
}

export const ThreadView: React.FC = () => {
  const [selectedThread, setSelectedThread] = useState<string | null>(null);

  const [threads] = useState<Thread[]>([
    {
      id: 'thread-1',
      title: 'Web3 Creator Economy Investigation',
      author: 'CryptoJournalist',
      authorAddress: '0xAb3...F12',
      description: 'An ongoing investigation into the Web3 creator economy and its impact on traditional content creation.',
      created: '2024-06-01T00:00:00Z',
      updated: '2024-06-14T10:30:00Z',
      totalEntries: 5,
      isActive: true,
      entries: [
        {
          id: 'entry-1',
          title: 'Introduction: The Shift to Web3',
          content: 'The content creation landscape is undergoing a fundamental transformation...',
          timestamp: '2024-06-01T00:00:00Z',
          isVerified: true,
          nftTokenId: 'nft-001'
        },
        {
          id: 'entry-2',
          title: 'Platform Analysis: Current State',
          content: 'Traditional platforms are facing pressure from decentralized alternatives...',
          timestamp: '2024-06-05T00:00:00Z',
          isVerified: true,
          nftTokenId: 'nft-002'
        },
        {
          id: 'entry-3',
          title: 'Creator Interviews: Real Stories',
          content: 'We spoke with 50+ creators about their experiences transitioning to Web3...',
          timestamp: '2024-06-10T00:00:00Z',
          isVerified: true,
          nftTokenId: 'nft-003'
        },
        {
          id: 'entry-4',
          title: 'Economic Impact Analysis',
          content: 'The numbers reveal interesting patterns in creator earnings...',
          timestamp: '2024-06-12T00:00:00Z',
          isVerified: false,
          nftTokenId: 'nft-004'
        },
        {
          id: 'entry-5',
          title: 'Future Predictions and Trends',
          content: 'Based on our research, here are the key trends to watch...',
          timestamp: '2024-06-14T10:30:00Z',
          isVerified: false,
          nftTokenId: 'nft-005'
        }
      ]
    },
    {
      id: 'thread-2',
      title: 'DeFi Security Audit Series',
      author: 'BlockchainAnalyst',
      authorAddress: '0x7Cd...E89',
      description: 'Comprehensive security analysis of major DeFi protocols.',
      created: '2024-05-15T00:00:00Z',
      updated: '2024-06-10T00:00:00Z',
      totalEntries: 3,
      isActive: true,
      entries: [
        {
          id: 'entry-6',
          title: 'Methodology and Framework',
          content: 'Our approach to analyzing DeFi protocol security...',
          timestamp: '2024-05-15T00:00:00Z',
          isVerified: true,
          nftTokenId: 'nft-006'
        },
        {
          id: 'entry-7',
          title: 'Protocol A: Findings',
          content: 'Detailed analysis of Protocol A reveals several areas of concern...',
          timestamp: '2024-05-30T00:00:00Z',
          isVerified: true,
          nftTokenId: 'nft-007'
        },
        {
          id: 'entry-8',
          title: 'Protocol B: Findings',
          content: 'Protocol B shows stronger security practices in most areas...',
          timestamp: '2024-06-10T00:00:00Z',
          isVerified: false,
          nftTokenId: 'nft-008'
        }
      ]
    }
  ]);

  const getCompletionPercentage = (thread: Thread) => {
    const verifiedEntries = thread.entries.filter(entry => entry.isVerified).length;
    return (verifiedEntries / thread.totalEntries) * 100;
  };

  return (
    <div className="space-y-6">
      {!selectedThread ? (
        <>
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Active Thread Series</h2>
            <p className="text-muted-foreground">
              Follow ongoing investigations and reports as they develop
            </p>
          </div>

          <div className="grid gap-4">
            {threads.map((thread) => (
              <Card key={thread.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{thread.title}</CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <User className="w-4 h-4" />
                        <span>{thread.author}</span>
                        <span>•</span>
                        <span>{thread.authorAddress}</span>
                        {thread.isActive && (
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Active
                          </Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground mb-4">{thread.description}</p>
                      
                      <div className="flex items-center gap-4 mb-3">
                        <div className="text-sm">
                          <span className="font-medium">{thread.entries.length}</span> entries
                        </div>
                        <div className="text-sm">
                          Started {new Date(thread.created).toLocaleDateString()}
                        </div>
                        <div className="text-sm">
                          Updated {new Date(thread.updated).toLocaleDateString()}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Verification Progress</span>
                          <span>{getCompletionPercentage(thread).toFixed(0)}%</span>
                        </div>
                        <Progress value={getCompletionPercentage(thread)} className="h-2" />
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button 
                    onClick={() => setSelectedThread(thread.id)}
                    className="w-full"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    View Thread
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      ) : (
        <>
          {(() => {
            const thread = threads.find(t => t.id === selectedThread);
            if (!thread) return null;

            return (
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <Button 
                    variant="outline" 
                    onClick={() => setSelectedThread(null)}
                  >
                    ← Back to Threads
                  </Button>
                  <div>
                    <h2 className="text-2xl font-bold">{thread.title}</h2>
                    <p className="text-muted-foreground">by {thread.author}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {thread.entries.map((entry, index) => (
                    <Card key={entry.id} className={`${entry.isVerified ? 'border-green-200' : 'border-yellow-200'}`}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-3">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">
                              {index + 1}
                            </div>
                            <div>
                              <CardTitle className="text-lg">{entry.title}</CardTitle>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                                <Clock className="w-4 h-4" />
                                <span>{new Date(entry.timestamp).toLocaleDateString()}</span>
                                {entry.isVerified && (
                                  <div className="flex items-center gap-1 text-green-600">
                                    <CheckCircle className="w-4 h-4" />
                                    <span>Verified</span>
                                  </div>
                                )}
                                {entry.nftTokenId && (
                                  <div className="flex items-center gap-1 text-blue-600">
                                    <GitBranch className="w-4 h-4" />
                                    <span>NFT #{entry.nftTokenId}</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          {entry.content.substring(0, 300)}...
                        </p>
                        <Button variant="outline" className="mt-3">
                          Read Full Entry
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })()}
        </>
      )}
    </div>
  );
};
