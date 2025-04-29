
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { Rss, Twitter, MessageSquare, Share2, Award, ThumbsUp, MessageCircle, Repeat } from 'lucide-react';
import { SocialShare } from '@/components/ui/social-share';
import { useWallet } from '@/services/wallet';
import { WalletConnectButton } from '@/components/ui/wallet-connect-button';

type SocialPost = {
  id: string;
  platform: 'lens' | 'farcaster' | 'internal';
  author: string;
  avatar: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  reposts: number;
  timestamp: string;
  isLiked: boolean;
};

const mockPosts: SocialPost[] = [
  {
    id: '1',
    platform: 'lens',
    author: 'lens/neurauser',
    avatar: 'https://via.placeholder.com/40',
    content: 'Just launched our Web3 social integration layer! Now you can post once and share across all decentralized social platforms.',
    image: 'https://via.placeholder.com/500x300',
    likes: 42,
    comments: 7,
    reposts: 12,
    timestamp: '3 hours ago',
    isLiked: false
  },
  {
    id: '2',
    platform: 'farcaster',
    author: 'fc/web3builder',
    avatar: 'https://via.placeholder.com/40',
    content: 'The integration between @neurapathy and Farcaster is incredible. Love how I can share content and earn $NEURA tokens simultaneously.',
    likes: 18,
    comments: 3,
    reposts: 5,
    timestamp: '1 day ago',
    isLiked: false
  },
  {
    id: '3',
    platform: 'internal',
    author: 'neura/official',
    avatar: 'https://via.placeholder.com/40',
    content: 'Excited to announce our Share-to-Earn program! Users who share content from Neurapathy to Web3 social platforms earn tokens based on engagement metrics.',
    image: 'https://via.placeholder.com/500x300',
    likes: 87,
    comments: 14,
    reposts: 31,
    timestamp: '2 days ago',
    isLiked: false
  }
];

export const SocialFeedIntegration: React.FC = () => {
  const { toast } = useToast();
  const { wallet } = useWallet();
  const [posts, setPosts] = useState<SocialPost[]>(mockPosts);
  const [sharingPostId, setSharingPostId] = useState<string | null>(null);
  
  const handleLike = (postId: string) => {
    if (!wallet.isConnected) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet to interact with posts",
        variant: "destructive",
      });
      return;
    }
    
    setPosts(posts.map(post => {
      if (post.id === postId) {
        const newIsLiked = !post.isLiked;
        return {
          ...post,
          isLiked: newIsLiked,
          likes: newIsLiked ? post.likes + 1 : post.likes - 1
        };
      }
      return post;
    }));
  };
  
  const handleShare = (postId: string) => {
    if (!wallet.isConnected) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet to share posts",
        variant: "destructive",
      });
      return;
    }
    
    setSharingPostId(sharingPostId === postId ? null : postId);
  };
  
  const getPlatformBadge = (platform: 'lens' | 'farcaster' | 'internal') => {
    switch (platform) {
      case 'lens':
        return <Badge className="bg-emerald-500/20 text-emerald-300">Lens Protocol</Badge>;
      case 'farcaster':
        return <Badge className="bg-blue-500/20 text-blue-300">Farcaster</Badge>;
      case 'internal':
        return <Badge className="bg-neura-purple/20 text-neura-cyan">Neurapathy</Badge>;
    }
  };
  
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Cross-Platform Social Feed</h2>
        {!wallet.isConnected && <WalletConnectButton />}
      </div>
      
      <div className="space-y-6">
        {posts.map((post) => (
          <React.Fragment key={post.id}>
            <Card className="bg-neura-dark/50 border-neura-purple/20">
              <CardContent className="p-5">
                <div className="flex items-start gap-3 mb-3">
                  <img 
                    src={post.avatar} 
                    alt={post.author}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-medium">{post.author}</h3>
                      {getPlatformBadge(post.platform)}
                    </div>
                    <p className="text-xs text-white/60">{post.timestamp}</p>
                  </div>
                </div>
                
                <p className="text-white/80 mb-4">{post.content}</p>
                
                {post.image && (
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <img 
                      src={post.image} 
                      alt="Post image"
                      className="w-full object-cover"
                    />
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className={`flex items-center gap-1 ${post.isLiked ? 'text-neura-purple' : 'text-white/70'}`}
                      onClick={() => handleLike(post.id)}
                    >
                      <ThumbsUp className="w-4 h-4" />
                      <span>{post.likes}</span>
                    </Button>
                    
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="flex items-center gap-1 text-white/70"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{post.comments}</span>
                    </Button>
                    
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="flex items-center gap-1 text-white/70"
                    >
                      <Repeat className="w-4 h-4" />
                      <span>{post.reposts}</span>
                    </Button>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-white/70 hover:text-neura-cyan"
                    onClick={() => handleShare(post.id)}
                  >
                    <Share2 className="w-4 h-4 mr-1" /> Share
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {sharingPostId === post.id && (
              <Card className="bg-neura-dark/30 border-neura-purple/20">
                <CardContent className="p-5">
                  <SocialShare 
                    url={`https://neurapathy.io/posts/${post.id}`} 
                    title={`Post by ${post.author}`}
                    text={post.content}
                  />
                  
                  <div className="mt-4 bg-neura-purple/10 p-3 rounded-lg flex items-center gap-3">
                    <Award className="w-5 h-5 text-neura-cyan" />
                    <p className="text-sm text-white/80">
                      Earn 5 $NEURA tokens per 10 engagements your shared post receives
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
