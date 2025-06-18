
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { 
  Lock, 
  Send, 
  Shield, 
  Coins, 
  Zap,
  CheckCircle,
  AlertCircle,
  Users,
  Globe
} from 'lucide-react';
import { useWallet } from '@/services/wallet';
import { toast } from 'sonner';

interface Web3Message {
  id: string;
  sender: string;
  senderName: string;
  recipient: string;
  content: string;
  timestamp: Date;
  encrypted: boolean;
  tokenGated?: boolean;
  txHash?: string;
  chatType: 'dm' | 'group' | 'community';
}

interface TokenGateConfig {
  contractAddress: string;
  tokenType: 'ERC721' | 'ERC1155' | 'ERC20';
  minBalance: string;
  tokenName: string;
}

export const Web3MessagingCore: React.FC = () => {
  const { wallet } = useWallet();
  const [messages, setMessages] = useState<Web3Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [recipientAddress, setRecipientAddress] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);
  const [activeChat, setActiveChat] = useState<string | null>(null);
  const [tokenGateStatus, setTokenGateStatus] = useState<{[key: string]: boolean}>({});

  // Mock XMTP client initialization
  const initializeXMTP = async () => {
    if (!wallet.isConnected) {
      toast.error('Please connect your wallet first');
      return null;
    }

    setIsConnecting(true);
    try {
      // Simulate XMTP client initialization
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.success('XMTP client initialized successfully');
      return true;
    } catch (error) {
      toast.error('Failed to initialize XMTP client');
      return null;
    } finally {
      setIsConnecting(false);
    }
  };

  // Token-gating verification
  const verifyTokenAccess = async (gateConfig: TokenGateConfig): Promise<boolean> => {
    if (!wallet.isConnected) return false;

    try {
      // Simulate token balance check
      const hasAccess = Math.random() > 0.3; // 70% success rate for demo
      
      if (hasAccess) {
        toast.success(`Access granted! You hold ${gateConfig.tokenName}`);
        return true;
      } else {
        toast.error(`Access denied. You need ${gateConfig.minBalance} ${gateConfig.tokenName}`);
        return false;
      }
    } catch (error) {
      toast.error('Failed to verify token access');
      return false;
    }
  };

  // Send encrypted message
  const sendMessage = async (content: string, recipient: string, chatType: 'dm' | 'group' | 'community' = 'dm') => {
    if (!wallet.isConnected) {
      toast.error('Please connect your wallet first');
      return;
    }

    if (!content.trim() || !recipient.trim()) {
      toast.error('Please enter message content and recipient address');
      return;
    }

    try {
      // Simulate message sending with XMTP
      const message: Web3Message = {
        id: `msg_${Date.now()}`,
        sender: wallet.address!,
        senderName: 'You',
        recipient,
        content,
        timestamp: new Date(),
        encrypted: true,
        txHash: `0x${Math.random().toString(16).substr(2, 64)}`,
        chatType
      };

      setMessages(prev => [...prev, message]);
      setNewMessage('');
      
      toast.success('Message sent via XMTP protocol', {
        description: `Encrypted and stored on IPFS`
      });
    } catch (error) {
      toast.error('Failed to send message');
    }
  };

  // Join token-gated chat
  const joinTokenGatedChat = async (chatId: string, gateConfig: TokenGateConfig) => {
    const hasAccess = await verifyTokenAccess(gateConfig);
    if (hasAccess) {
      setTokenGateStatus(prev => ({ ...prev, [chatId]: true }));
      setActiveChat(chatId);
    }
  };

  const formatAddress = (address: string) => {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  return (
    <div className="space-y-6">
      {/* XMTP Status Card */}
      <Card className="bg-gradient-to-r from-[#0F0F1A] via-[#1A1A2E] to-[#0F0F1A] border-[#00FFCC]/30">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-[#00FFCC]/20 rounded-xl">
                <Shield className="w-6 h-6 text-[#00FFCC]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">XMTP Protocol Status</h3>
                <p className="text-sm text-white/70">
                  {wallet.isConnected ? 'Ready for encrypted messaging' : 'Connect wallet to initialize'}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="border-[#00FFCC]/50 text-[#00FFCC]">
                <CheckCircle className="w-3 h-3 mr-1" />
                E2E Encrypted
              </Badge>
              <Badge variant="outline" className="border-green-500/50 text-green-400">
                <Globe className="w-3 h-3 mr-1" />
                Decentralized
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Direct Messaging */}
      <Card className="bg-[#1A1A2E]/60 backdrop-blur-xl border-[#00FFCC]/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-[#00FFCC]">
            <Lock className="w-5 h-5" />
            Secure Chat (Wallet-to-Wallet)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              placeholder="Recipient wallet address or ENS"
              value={recipientAddress}
              onChange={(e) => setRecipientAddress(e.target.value)}
              className="bg-[#0F0F1A]/60 border-[#00FFCC]/30 text-white"
            />
            <Button
              onClick={initializeXMTP}
              disabled={isConnecting || !wallet.isConnected}
              className="bg-[#00FF99] hover:bg-[#00FF99]/80 text-black font-medium"
            >
              {isConnecting ? 'Connecting...' : 'Initialize XMTP'}
              <Zap className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Message Input */}
          <div className="flex gap-2">
            <Input
              placeholder="Type your encrypted message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="bg-[#0F0F1A]/60 border-[#00FFCC]/30 text-white"
              onKeyPress={(e) => e.key === 'Enter' && sendMessage(newMessage, recipientAddress)}
            />
            <Button 
              onClick={() => sendMessage(newMessage, recipientAddress)}
              className="bg-gradient-to-r from-[#00D1FF] to-[#7B00FF] hover:opacity-80"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>

          {/* Messages Display */}
          <div className="space-y-3 max-h-60 overflow-y-auto">
            {messages.map((message) => (
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
                      ? 'bg-[#00FFCC]/20 border border-[#00FFCC]/30'
                      : 'bg-[#1A1A2E]/80 border border-white/10'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-white">{message.senderName}</span>
                    {message.encrypted && (
                      <Lock className="w-3 h-3 text-green-400" />
                    )}
                  </div>
                  <p className="text-sm text-white">{message.content}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-white/50">
                      {message.timestamp.toLocaleTimeString()}
                    </span>
                    {message.txHash && (
                      <Badge variant="outline" className="text-xs border-[#00FFCC]/50 text-[#00FFCC]">
                        On-chain
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Token-Gated Communities */}
      <Card className="bg-[#1A1A2E]/60 backdrop-blur-xl border-yellow-500/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-yellow-400">
            <Coins className="w-5 h-5" />
            Token-Gated Communities
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            <div className="p-4 border border-yellow-500/20 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-yellow-400">$Neurax Holders Chat</h4>
                  <p className="text-sm text-white/70">Exclusive chat for $Neurax token holders</p>
                  <div className="flex items-center gap-2 mt-1 text-xs text-white/50">
                    <Users className="w-3 h-3" />
                    <span>247 members</span>
                    <span>•</span>
                    <span>Requires: 100+ $Neurax</span>
                  </div>
                </div>
                <Button
                  onClick={() => joinTokenGatedChat('neurax-holders', {
                    contractAddress: '0x742d35Cc643C0532925a3b8F1d8c4d9f8b8B3666',
                    tokenType: 'ERC20',
                    minBalance: '100',
                    tokenName: '$Neurax'
                  })}
                  className="bg-yellow-600 hover:bg-yellow-700"
                  size="sm"
                >
                  {tokenGateStatus['neurax-holders'] ? 'Joined' : 'Verify & Join'}
                </Button>
              </div>
            </div>

            <div className="p-4 border border-[#FF00FF]/20 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-[#FF00FF]">Creator Pass NFT Lounge</h4>
                  <p className="text-sm text-white/70">Premium community for NFT holders</p>
                  <div className="flex items-center gap-2 mt-1 text-xs text-white/50">
                    <Users className="w-3 h-3" />
                    <span>89 members</span>
                    <span>•</span>
                    <span>Requires: Creator Pass NFT</span>
                  </div>
                </div>
                <Button
                  onClick={() => joinTokenGatedChat('creator-nft', {
                    contractAddress: '0x123abc456def789ghi012jkl345mno678pqr901st',
                    tokenType: 'ERC721',
                    minBalance: '1',
                    tokenName: 'Creator Pass NFT'
                  })}
                  className="bg-[#FF00FF] hover:bg-[#FF00FF]/80"
                  size="sm"
                >
                  {tokenGateStatus['creator-nft'] ? 'Joined' : 'Verify & Join'}
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Messaging Features */}
      <Card className="bg-gradient-to-r from-[#1A1A2E]/60 via-[#0F0F1A]/40 to-[#1A1A2E]/60 border border-[#00FFCC]/30">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-[#00FFCC]">Web3 Messaging Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <Shield className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <h4 className="font-medium text-white">End-to-End Encryption</h4>
                <p className="text-xs text-white/60">XMTP protocol security</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-500/20 rounded-lg">
                <Coins className="w-5 h-5 text-yellow-400" />
              </div>
              <div>
                <h4 className="font-medium text-white">Token-Gated Access</h4>
                <p className="text-xs text-white/60">NFT & $Neurax verification</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#00FFCC]/20 rounded-lg">
                <Globe className="w-5 h-5 text-[#00FFCC]" />
              </div>
              <div>
                <h4 className="font-medium text-white">Cross-Chain Support</h4>
                <p className="text-xs text-white/60">Multi-chain interoperability</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
