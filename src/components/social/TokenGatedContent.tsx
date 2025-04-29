
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Lock, MessageSquare, Users, Coins, Key } from 'lucide-react';
import { useWallet } from '@/services/wallet';
import { WalletConnectButton } from '@/components/ui/wallet-connect-button';

type Comment = {
  id: string;
  author: string;
  avatar: string;
  content: string;
  timestamp: string;
};

const mockComments: Comment[] = [
  {
    id: '1',
    author: '0x1a2b...3c4d',
    avatar: 'https://via.placeholder.com/40',
    content: 'This is amazing! I love the integration with Lens Protocol.',
    timestamp: '2 hours ago'
  },
  {
    id: '2',
    author: '0x5e6f...7g8h',
    avatar: 'https://via.placeholder.com/40',
    content: 'Just connected my Farcaster account. The cross-posting works perfectly!',
    timestamp: '1 day ago'
  },
  {
    id: '3',
    author: '0x9i0j...1k2l',
    avatar: 'https://via.placeholder.com/40',
    content: 'How do I connect my ENS name to this interface?',
    timestamp: '3 days ago'
  }
];

export const TokenGatedContent: React.FC = () => {
  const { toast } = useToast();
  const { wallet } = useWallet();
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<Comment[]>(mockComments);
  const [hasAccess, setHasAccess] = useState(false);
  
  const handleCheckAccess = () => {
    if (!wallet.isConnected) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet to check access",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Checking token access",
      description: "Verifying your wallet for required tokens...",
    });
    
    // Simulate delay for verification
    setTimeout(() => {
      setHasAccess(true);
      toast({
        title: "Access Granted!",
        description: "You have the necessary tokens to view this content",
      });
    }, 1500);
  };
  
  const handleAddComment = () => {
    if (!comment.trim()) {
      toast({
        title: "Empty comment",
        description: "Please enter a comment before submitting",
        variant: "destructive",
      });
      return;
    }
    
    const newComment: Comment = {
      id: Date.now().toString(),
      author: wallet.address?.substring(0, 6) + '...' + wallet.address?.substring(38) || 'Anonymous',
      avatar: 'https://via.placeholder.com/40',
      content: comment,
      timestamp: 'Just now'
    };
    
    setComments([newComment, ...comments]);
    setComment('');
    
    toast({
      title: "Comment Posted",
      description: "Your comment has been added to the discussion",
    });
  };
  
  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-xl font-semibold mb-2">Token Gated Community</h2>
        <p className="text-white/70">
          Exclusive content and discussions only available to token holders
        </p>
      </div>
      
      {!wallet.isConnected ? (
        <div className="text-center py-8">
          <Lock className="w-16 h-16 mx-auto text-white/30 mb-4" />
          <h3 className="text-lg font-medium mb-3">Connect Your Wallet</h3>
          <p className="text-white/70 mb-6 max-w-md mx-auto">
            Connect your wallet to verify if you have the required tokens for access
          </p>
          <WalletConnectButton />
        </div>
      ) : !hasAccess ? (
        <div className="max-w-md mx-auto">
          <Card className="bg-neura-dark/50 border-neura-purple/20 mb-6">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-neura-purple/20 rounded-full">
                  <Lock className="w-8 h-8 text-neura-cyan" />
                </div>
                <div>
                  <h3 className="font-medium mb-2">Token Gated Access</h3>
                  <p className="text-sm text-white/70 mb-4">
                    This content is only available to wallets holding Neurapathy token or NFTs.
                  </p>
                  <Button 
                    className="w-full bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90"
                    onClick={handleCheckAccess}
                  >
                    <Key className="w-4 h-4 mr-2" /> Check Access
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="bg-neura-purple/10 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Requirements for Access</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-2 bg-neura-dark/30 rounded">
                <div className="flex items-center gap-2">
                  <Coins className="w-4 h-4 text-neura-cyan" />
                  <span className="text-sm">Hold 100 $NEURA Tokens</span>
                </div>
                <Badge className="bg-neura-purple/20 text-neura-cyan text-xs">OR</Badge>
              </div>
              <div className="flex items-center justify-between p-2 bg-neura-dark/30 rounded">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-neura-cyan" />
                  <span className="text-sm">Own at least 1 Neurapathy NFT</span>
                </div>
                <Badge className="bg-neura-purple/20 text-neura-cyan text-xs">OR</Badge>
              </div>
              <div className="flex items-center justify-between p-2 bg-neura-dark/30 rounded">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-neura-cyan" />
                  <span className="text-sm">Be invited by existing member</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="bg-neura-purple/10 p-4 rounded-lg mb-6">
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-5 h-5 text-neura-cyan" />
              <h3 className="font-medium">Private Community Discussion</h3>
            </div>
            <p className="text-sm text-white/80">
              Welcome to the token-gated community! This space is exclusive to Neurapathy token holders.
              Feel free to participate in conversations and connect with other members.
            </p>
          </div>
          
          <div className="mb-6">
            <h3 className="font-medium mb-3">Add to the discussion</h3>
            <div className="space-y-4">
              <Textarea 
                placeholder="Write your comment here..."
                className="bg-neura-dark/80 border-neura-purple/30 min-h-[100px]"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <Button 
                className="bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90"
                onClick={handleAddComment}
              >
                <MessageSquare className="w-4 h-4 mr-2" /> Post Comment
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Community Comments</h3>
            <div className="space-y-4">
              {comments.map((comment) => (
                <div key={comment.id} className="bg-neura-dark/40 border border-neura-purple/20 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <img 
                      src={comment.avatar} 
                      alt={comment.author}
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <p className="text-sm font-medium">{comment.author}</p>
                      <p className="text-xs text-white/60">{comment.timestamp}</p>
                    </div>
                  </div>
                  <p className="text-sm text-white/80">{comment.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
