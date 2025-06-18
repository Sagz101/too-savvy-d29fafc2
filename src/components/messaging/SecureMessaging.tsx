
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Web3MessagingCore } from './Web3MessagingCore';
import { CrossPlatformShare } from './CrossPlatformShare';
import { 
  MessageCircle, 
  Share2, 
  Shield, 
  Users,
  Coins,
  Globe
} from 'lucide-react';

export const SecureMessaging: React.FC = () => {
  const [activeTab, setActiveTab] = useState('secure-chat');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFCC] via-[#FF00FF] to-[#FFFF00]">
            Web3 Secure Messaging
          </h2>
          <p className="text-white/70 text-lg mt-2">
            Decentralized, encrypted communication with token-gated access
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 bg-[#1A1A2E]/60 backdrop-blur-sm border border-[#00FFCC]/20 rounded-full px-4 py-2 text-sm">
            <Shield className="w-4 h-4 text-[#00FFCC]" />
            <span className="text-white/90 font-medium">XMTP Protocol</span>
          </div>
          <div className="flex items-center gap-2 bg-[#1A1A2E]/60 backdrop-blur-sm border border-green-500/20 rounded-full px-4 py-2 text-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white/90 font-medium">E2E Encrypted</span>
          </div>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4 bg-[#1A1A2E]/60 border border-[#00FFCC]/20">
          <TabsTrigger value="secure-chat" className="flex items-center gap-2 data-[state=active]:bg-[#00FFCC]/20 data-[state=active]:text-[#00FFCC]">
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Secure Chat</span>
          </TabsTrigger>
          <TabsTrigger value="communities" className="flex items-center gap-2 data-[state=active]:bg-yellow-500/20 data-[state=active]:text-yellow-400">
            <Users className="w-4 h-4" />
            <span className="hidden sm:inline">Communities</span>
          </TabsTrigger>
          <TabsTrigger value="token-gated" className="flex items-center gap-2 data-[state=active]:bg-[#FF00FF]/20 data-[state=active]:text-[#FF00FF]">
            <Coins className="w-4 h-4" />
            <span className="hidden sm:inline">Token-Gated</span>
          </TabsTrigger>
          <TabsTrigger value="cross-platform" className="flex items-center gap-2 data-[state=active]:bg-green-500/20 data-[state=active]:text-green-400">
            <Share2 className="w-4 h-4" />
            <span className="hidden sm:inline">Share</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="secure-chat">
          <Web3MessagingCore />
        </TabsContent>

        <TabsContent value="communities">
          <Web3MessagingCore />
        </TabsContent>

        <TabsContent value="token-gated">
          <Web3MessagingCore />
        </TabsContent>

        <TabsContent value="cross-platform">
          <CrossPlatformShare />
        </TabsContent>
      </Tabs>
    </div>
  );
};
