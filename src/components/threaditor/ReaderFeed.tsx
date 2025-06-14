
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  TrendingUp, 
  Clock, 
  User, 
  Heart,
  MessageCircle,
  Share2,
  DollarSign,
  Search
} from 'lucide-react';

interface Post {
  id: string;
  title: string;
  author: string;
  authorAddress: string;
  content: string;
  tags: string[];
  timestamp: string;
  isVerified: boolean;
  isPremium: boolean;
  likes: number;
  comments: number;
  tips: number;
  threadId?: string;
}

export const ReaderFeed: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'trending' | 'latest' | 'verified'>('trending');

  const [posts] = useState<Post[]>([
    {
      id: '1',
      title: 'The Future of Decentralized Content Creation',
      author: 'CryptoJournalist',
      authorAddress: '0xAb3...F12',
      content: 'A deep dive into how Web3 technologies are revolutionizing content creation and ownership...',
      tags: ['web3', 'journalism', 'nft'],
      timestamp: '2024-06-14T10:30:00Z',
      isVerified: true,
      isPremium: false,
      likes: 45,
      comments: 12,
      tips: 3.5,
      threadId: 'thread-1'
    },
    {
      id: '2',
      title: 'Breaking: New DeFi Protocol Analysis',
      author: 'BlockchainAnalyst',
      authorAddress: '0x7Cd...E89',
      content: 'Our investigation into the latest DeFi protocol reveals interesting patterns in governance...',
      tags: ['defi', 'analysis', 'governance'],
      timestamp: '2024-06-14T08:15:00Z',
      isVerified: true,
      isPremium: true,
      likes: 78,
      comments: 23,
      tips: 12.8
    },
    {
      id: '3',
      title: 'Market Report: Q2 2024 Trends',
      author: 'MarketWatcher',
      authorAddress: '0x9Fb...A45',
      content: 'Comprehensive analysis of market trends and predictions for the remainder of 2024...',
      tags: ['market', 'analysis', 'trends'],
      timestamp: '2024-06-13T16:45:00Z',
      isVerified: false,
      isPremium: false,
      likes: 34,
      comments: 8,
      tips: 1.2
    }
  ]);

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search posts, authors, or tags..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <Button 
            variant={filter === 'trending' ? 'default' : 'outline'}
            onClick={() => setFilter('trending')}
            size="sm"
          >
            <TrendingUp className="w-4 h-4 mr-1" />
            Trending
          </Button>
          <Button 
            variant={filter === 'latest' ? 'default' : 'outline'}
            onClick={() => setFilter('latest')}
            size="sm"
          >
            <Clock className="w-4 h-4 mr-1" />
            Latest
          </Button>
          <Button 
            variant={filter === 'verified' ? 'default' : 'outline'}
            onClick={() => setFilter('verified')}
            size="sm"
          >
            Verified
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {filteredPosts.map((post) => (
          <Card key={post.id} className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.authorAddress}</span>
                    {post.isVerified && (
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        Verified
                      </Badge>
                    )}
                    {post.isPremium && (
                      <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                        Premium
                      </Badge>
                    )}
                    {post.threadId && (
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        Thread
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  {new Date(post.timestamp).toLocaleDateString()}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                {post.content.substring(0, 200)}...
              </p>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    #{tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="sm" className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    {post.likes}
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    {post.comments}
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center gap-1">
                    <Share2 className="w-4 h-4" />
                    Share
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-sm text-green-600">
                    <DollarSign className="w-4 h-4" />
                    {post.tips} $NEURAX
                  </div>
                  <Button size="sm">
                    Read More
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
