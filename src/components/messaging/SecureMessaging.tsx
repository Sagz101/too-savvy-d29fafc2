
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Lock, 
  Send, 
  Shield, 
  Users, 
  Coins, 
  Eye,
  MessageCircle,
  Star,
  Globe,
  CheckCircle
} from 'lucide-react';
import { useWallet } from '@/services/wallet';
import { toast } from 'sonner';

interface Message {
  id: string;
  sender: string;
  senderName: string;
  content: string;
  timestamp: Date;
  encrypted: boolean;
  tokenGated?: boolean;
}

interface ChatRoom {
  id: string;
  name: string;
  description: string;
  members: number;
  tokenRequired?: string;
  isPrivate: boolean;
  lastMessage?: Message;
}

export const SecureMessaging: React.FC = () => {
  const { wallet } = useWallet();
  const [activeChat, setActiveChat] = useState<string | null>(null);
  const [newMessage, setNewMessage] = useState('');
  const [selectedTab, setSelectedTab] = useState('dms');

  // Mock data for demonstration
  const [directMessages] = useState<Message[]>([
    {
      id: '1',
      sender: '0xAb3...f92',
      senderName: 'Sarah Chen',
      content: 'Hey! Love your latest NFT drop. Are you planning any collaborations?',
      timestamp: new Date(Date.now() - 300000),
      encrypted: true
    },
    {
      id: '2',
      sender: wallet.address || '0x123...abc',
      senderName: 'You',
      content: 'Thanks! Yes, I\'m working on something exciting. Let\'s discuss privately.',
      timestamp: new Date(Date.now() - 180000),
      encrypted: true
    }
  ]);

  const [tokenGatedChats] = useState<ChatRoom[]>([
    {
      id: 'vip-creators',
      name: 'VIP Creators Circle',
      description: 'Exclusive chat for premium NFT holders',
      members: 247,
      tokenRequired: 'Creator Pass NFT',
      isPrivate: true,
      lastMessage: {
        id: '1',
        sender: '0xDef...456',
        senderName: 'Marcus',
        content: 'Just launched my new collection! Check it out 🚀',
        timestamp: new Date(Date.now() - 600000),
        encrypted: true,
        tokenGated: true
      }
    },
    {
      id: 'neurax-holders',
      name: '$Neurax Holders',
      description: 'Community for $Neurax token holders',
      members: 1847,
      tokenRequired: '100+ $Neurax',
      isPrivate: false,
      lastMessage: {
        id: '2',
        sender: '0xGhi...789',
        senderName: 'Priya',
        content: 'Weekly governance vote is live! Don\'t forget to participate.',
        timestamp: new Date(Date.now() - 900000),
        encrypted: true,
        tokenGated: true
      }
    }
  ]);

  const [communityChats] = useState<ChatRoom[]>([
    {
      id: 'general',
      name: 'General Discussion',
      description: 'Open community chat for all users',
      members: 3241,
      isPrivate: false,
      lastMessage: {
        id: '3',
        sender: '0xJkl...012',
        senderName: 'Alex',
        content: 'Anyone going to the Web3 conference next month?',
        timestamp: new Date(Date.now() - 1200000),
        encrypted: true
      }
    },
    {
      id: 'tech-talk',
      name: 'Tech Talk',
      description: 'Discuss Web3 development and innovations',
      members: 892,
      isPrivate: false,
      lastMessage: {
        id: '4',
        sender: '0xMno...345',
        senderName: 'Jordan',
        content: 'New XMTP integration looks promising for our platform',
        timestamp: new Date(Date.now() - 1800000),
        encrypted: true
      }
    }
  ]);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    if (!wallet.isConnected) {
      toast.error('Please connect your wallet to send messages');
      return;
    }

    // Simulate sending encrypted message
    toast.success('Message sent securely via XMTP protocol');
    setNewMessage('');
  };

  const handleJoinTokenGatedChat = (chatId: string, tokenRequired: string) => {
    // Simulate token verification
    toast.success(`Access granted to ${tokenRequired} holders`);
    setActiveChat(chatId);
  };

  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).format(date);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Secure Web3 Messaging</h2>
          <p className="text-muted-foreground">
            End-to-end encrypted, wallet-to-wallet communication
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="border-green-500/50 text-green-400">
            <Shield className="w-3 h-3 mr-1" />
            E2E Encrypted
          </Badge>
          <Badge variant="outline" className="border-cyan-500/50 text-cyan-400">
            <Lock className="w-3 h-3 mr-1" />
            XMTP Protocol
          </Badge>
        </div>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="dms" className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4" />
            Direct Messages
          </TabsTrigger>
          <TabsTrigger value="token-gated" className="flex items-center gap-2">
            <Coins className="w-4 h-4" />
            Token-Gated
          </TabsTrigger>
          <TabsTrigger value="community" className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            Community
          </TabsTrigger>
        </TabsList>

        <TabsContent value="dms" className="space-y-4">
          <Card className="bg-neura-dark/60 border-cyan-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-cyan-400" />
                Wallet-to-Wallet Messages
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Message Thread */}
              <div className="space-y-3 max-h-60 overflow-y-auto">
                {directMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${
                      message.sender === wallet.address ? 'flex-row-reverse' : ''
                    }`}
                  >
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${message.sender}`} />
                      <AvatarFallback>{message.senderName.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div
                      className={`max-w-xs p-3 rounded-lg ${
                        message.sender === wallet.address
                          ? 'bg-cyan-600/20 border border-cyan-500/30'
                          : 'bg-neura-dark/80 border border-border/50'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-medium">{message.senderName}</span>
                        {message.encrypted && (
                          <Lock className="w-3 h-3 text-green-400" />
                        )}
                      </div>
                      <p className="text-sm text-foreground">{message.content}</p>
                      <span className="text-xs text-muted-foreground mt-1 block">
                        {formatTime(message.timestamp)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="flex gap-2">
                <Input
                  placeholder="Type your encrypted message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="bg-neura-dark/40 border-cyan-500/20"
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <Button onClick={handleSendMessage} className="bg-cyan-600 hover:bg-cyan-700">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="token-gated" className="space-y-4">
          <div className="grid gap-4">
            {tokenGatedChats.map((chat) => (
              <Card key={chat.id} className="bg-neura-dark/60 border-yellow-500/20">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-yellow-400">{chat.name}</h3>
                        <Badge variant="outline" className="border-yellow-500/50 text-yellow-400">
                          <Star className="w-3 h-3 mr-1" />
                          Premium
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{chat.description}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {chat.members} members
                        </span>
                        <span className="flex items-center gap-1">
                          <Coins className="w-3 h-3" />
                          Requires: {chat.tokenRequired}
                        </span>
                      </div>
                      {chat.lastMessage && (
                        <div className="mt-3 p-2 bg-neura-dark/40 rounded-lg">
                          <p className="text-xs text-foreground">{chat.lastMessage.content}</p>
                          <span className="text-xs text-muted-foreground">
                            {chat.lastMessage.senderName} • {formatTime(chat.lastMessage.timestamp)}
                          </span>
                        </div>
                      )}
                    </div>
                    <Button
                      size="sm"
                      className="bg-yellow-600 hover:bg-yellow-700"
                      onClick={() => handleJoinTokenGatedChat(chat.id, chat.tokenRequired!)}
                    >
                      Join Chat
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="community" className="space-y-4">
          <div className="grid gap-4">
            {communityChats.map((chat) => (
              <Card key={chat.id} className="bg-neura-dark/60 border-green-500/20">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-green-400">{chat.name}</h3>
                        <Badge variant="outline" className="border-green-500/50 text-green-400">
                          <Globe className="w-3 h-3 mr-1" />
                          Open
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{chat.description}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {chat.members} members
                        </span>
                      </div>
                      {chat.lastMessage && (
                        <div className="mt-3 p-2 bg-neura-dark/40 rounded-lg">
                          <p className="text-xs text-foreground">{chat.lastMessage.content}</p>
                          <span className="text-xs text-muted-foreground">
                            {chat.lastMessage.senderName} • {formatTime(chat.lastMessage.timestamp)}
                          </span>
                        </div>
                      )}
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-green-500/50 text-green-400 hover:bg-green-900/20"
                    >
                      Join Chat
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Feature Highlights */}
      <Card className="bg-gradient-to-r from-neura-dark/60 via-neura-dark/40 to-neura-dark/60 border border-cyan-500/30">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-cyan-400">Web3 Messaging Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <Shield className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <h4 className="font-medium">End-to-End Encryption</h4>
                <p className="text-xs text-muted-foreground">XMTP protocol security</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-500/20 rounded-lg">
                <Coins className="w-5 h-5 text-yellow-400" />
              </div>
              <div>
                <h4 className="font-medium">Token-Gated Access</h4>
                <p className="text-xs text-muted-foreground">NFT & $Neurax verification</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-cyan-500/20 rounded-lg">
                <Globe className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h4 className="font-medium">Cross-Chain Support</h4>
                <p className="text-xs text-muted-foreground">Multi-chain interoperability</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
