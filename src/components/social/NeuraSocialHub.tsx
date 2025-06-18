import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Twitter, Facebook, Linkedin,
  Share2, Link2, Coins, Webhook, BarChart3, Wallet, Settings, Store, UsersRound, Star, Zap, MessageSquare, Shield
} from 'lucide-react';
import { PostDashboard } from './PostDashboard';
import { SmartLinkMonitor } from './SmartLinkMonitor';
import { RewardsWallet } from './RewardsWallet';
import { CustomChannels } from './CustomChannels';
import { CrossPlatformDistribution } from './CrossPlatformDistribution';
import { DiscoverFeed } from "./DiscoverFeed";
import { SecureMessaging } from '../messaging/SecureMessaging';
import { CrossPlatformShare } from '../messaging/CrossPlatformShare';
import { useToast } from "@/hooks/use-toast";

export const NeuraSocialHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState('compose');
  const { toast } = useToast();

  // Enhanced action handlers
  const handleSecureChat = () => {
    setActiveTab('messaging');
    toast({
      title: "Secure Chat Activated",
      description: "Access end-to-end encrypted Web3 messaging with token-gating",
    });
  };

  const handleSocialHub = () => {
    setActiveTab('distribution');
    toast({
      title: "Social Hub Opened",
      description: "Cross-platform sharing with smart links and $Neurax rewards",
    });
  };

  const handleDiscoverChats = () => {
    setActiveTab('discover');
    toast({
      title: "Discover Community Chats",
      description: "Find token-gated communities and public channels",
    });
  };

  const handleShare = async (platform: string) => {
    toast({
      title: "Coming Soon!",
      description: `Share to ${platform} will be supported soon.`,
    });
  };

  const handleJoinCommunity = () => {
    window.open("https://discord.gg/t00savvy", "_blank");
    toast({
      title: "Join Our DAO Community",
      description: "Opened T00 Savvy DAO community Discord in a new tab.",
    });
  };

  return (
    <div className="min-h-screen bg-background p-6 relative">
      <div className="max-w-7xl mx-auto">

        {/* Enhanced Top Action Bar */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mb-6 justify-between">
          <div className="flex gap-3 flex-wrap">
            <Button
              variant="outline"
              className="border-[#00FF99] text-[#00FF99] font-bold hover:bg-[#00FF99]/10 bg-[#1A1A2E]/60"
              size="sm"
              onClick={handleSecureChat}
            >
              <Shield className="w-4 h-4 mr-2" /> Secure Chat
            </Button>
            <Button
              variant="outline"
              className="border-[#00D1FF] text-[#00D1FF] font-bold hover:bg-[#00D1FF]/10 bg-[#1A1A2E]/60"
              size="sm"
              onClick={handleSocialHub}
            >
              <Share2 className="w-4 h-4 mr-2" /> Social Hub
            </Button>
            <Button
              variant="outline"
              className="border-[#00D1FF] text-[#00D1FF] font-bold hover:bg-[#00D1FF]/10 bg-[#1A1A2E]/60"
              size="sm"
              onClick={handleDiscoverChats}
            >
              <Store className="w-4 h-4 mr-2" /> Discover Chats
            </Button>
            <Button
              variant="outline"
              className="border-[#FF5733] text-[#FF5733] font-bold hover:bg-[#FF5733]/10 bg-[#1A1A2E]/60"
              size="sm"
              onClick={() => setActiveTab('channels')}
            >
              <Webhook className="w-4 h-4 mr-2" /> Custom Channels
            </Button>
          </div>
          <Button
            variant="secondary"
            size="sm"
            className="bg-gradient-to-r from-neura-cyan to-green-600 text-white font-bold shadow-lg hover:shadow-xl"
            onClick={handleJoinCommunity}
          >
            <UsersRound className="w-4 h-4 mr-2" /> Join Community
          </Button>
        </div>

        {/* Enhanced Hero Section */}
        <section className="mb-8 px-6 py-10 rounded-3xl bg-gradient-to-br from-neura-cyan/20 via-background to-card/60 border border-neura-cyan/40 shadow-2xl">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl font-bold font-porscha mb-3 text-neura-cyan uppercase">
                NeuraSocial: Web3 Messaging & Social Hub
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-4">
                Secure, decentralized messaging with token-gated communities and cross-platform sharing—no centralized APIs, enhanced privacy, better rewards.
              </p>
              <p className="text-base text-foreground mb-3">
                <b>Powered by XMTP protocol with end-to-end encryption, dm3 cross-chain messaging, and $Neurax incentives.</b>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button 
                  className="bg-gradient-to-r from-[#00FF99] to-[#00D1FF] hover:from-[#00FF99]/80 hover:to-[#00D1FF]/80 text-black font-bold text-lg px-8 py-3 rounded-xl shadow-lg" 
                  size="lg"
                  onClick={handleSecureChat}
                >
                  🔒 Start Secure Chat
                </Button>
                <Button 
                  className="bg-gradient-to-r from-[#00D1FF] to-[#7B00FF] hover:from-[#00D1FF]/80 hover:to-[#7B00FF]/80 text-white font-bold text-lg px-8 py-3 rounded-xl shadow-lg" 
                  size="lg"
                  onClick={handleSocialHub}
                >
                  🚀 Launch Social Hub
                </Button>
              </div>
            </div>
            
            {/* Enhanced Feature Cards */}
            <div className="flex flex-col gap-4 flex-shrink-0 w-full md:w-80 mt-8 md:mt-0">
              {/* Secure Messaging */}
              <Card className="bg-black/70 border-[#00FF99]/40">
                <CardContent className="pt-4 pb-3 px-4 flex flex-col gap-1">
                  <span className="flex items-center gap-2 font-semibold text-[#00FF99] text-lg">
                    <Shield className="w-5 h-5" /> Secure Web3 Messaging
                  </span>
                  <span className="text-sm text-foreground mt-1">
                    XMTP protocol with wallet-to-wallet encryption
                  </span>
                </CardContent>
              </Card>
              
              {/* Token-Gated Communities */}
              <Card className="bg-black/70 border-yellow-500/40">
                <CardContent className="pt-4 pb-3 px-4 flex flex-col gap-1">
                  <span className="flex items-center gap-2 font-semibold text-yellow-400 text-lg">
                    <Coins className="w-5 h-5" /> Token-Gated Communities
                  </span>
                  <span className="text-xs mt-1 mb-1">
                    Exclusive chats for NFT & $Neurax holders
                  </span>
                  <span className="flex gap-2 text-xs text-yellow-400">
                    <span className="bg-yellow-800/20 px-2 py-1 rounded font-mono">NFT Access</span>
                    <span className="bg-yellow-800/20 px-2 py-1 rounded font-mono">$Neurax</span>
                  </span>
                </CardContent>
              </Card>

              {/* Cross-Platform Distribution */}
              <Card className="bg-black/70 border-neura-cyan/40">
                <CardContent className="pt-4 pb-3 px-4 flex flex-col gap-1">
                  <span className="flex items-center gap-2 font-semibold text-neura-cyan text-lg">
                    <BarChart3 className="w-5 h-5" /> Cross-Platform Distribution
                  </span>
                  <span className="text-sm text-foreground mt-1">
                    Share to X, Instagram & more with smart links
                  </span>
                </CardContent>
              </Card>

              {/* Smart Links */}
              <Card className="bg-black/70 border-cyan-400/40">
                <CardContent className="pt-4 pb-3 px-4 flex flex-col gap-1">
                  <span className="flex items-center gap-2 font-semibold text-cyan-400 text-lg">
                    <Link2 className="w-5 h-5" />  Smart Links & $Neurax Rewards
                  </span>
                  <span className="text-xs text-cyan-300 flex flex-col mt-1">
                    <span className="font-mono bg-cyan-900/30 rounded px-2 py-1 inline-block mb-1">
                      neura.app/chat/x8f92?ref=0xAb3...
                    </span>
                    <span className="font-mono bg-green-900/30 rounded px-2 py-1 inline-block text-green-400">
                      +$Neurax for engagement
                    </span>
                  </span>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Enhanced Share On Section */}
          <div className="mt-10">
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <span className="text-foreground font-semibold mr-4 text-base">Share & Connect:</span>
              <div className="flex gap-2 flex-wrap">
                <Button variant="outline" className="border-cyan-500 text-cyan-300 hover:bg-cyan-900 bg-[#1A1A2E]/60" size="sm" onClick={() => handleShare('Twitter')}>
                  <Twitter className="w-5 h-5" />
                  Twitter
                </Button>
                <Button variant="outline" className="border-blue-500 text-blue-300 hover:bg-blue-900 bg-[#1A1A2E]/60" size="sm" onClick={() => handleShare('Facebook')}>
                  <Facebook className="w-5 h-5" />
                  Facebook
                </Button>
                <Button variant="outline" className="border-blue-400 text-blue-200 hover:bg-blue-800 bg-[#1A1A2E]/60" size="sm" onClick={() => handleShare('LinkedIn')}>
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-8 bg-[#1A1A2E]/60 border border-[#00FFCC]/20">
            <TabsTrigger value="compose" className="flex items-center gap-2 data-[state=active]:bg-[#00FFCC]/20">
              <Share2 className="w-4 h-4" />
              <span className="hidden sm:inline">Compose</span>
            </TabsTrigger>
            <TabsTrigger value="links" className="flex items-center gap-2 data-[state=active]:bg-cyan-500/20">
              <Link2 className="w-4 h-4" />
              <span className="hidden sm:inline">Smart Links</span>
            </TabsTrigger>
            <TabsTrigger value="rewards" className="flex items-center gap-2 data-[state=active]:bg-green-500/20">
              <Coins className="w-4 h-4" />
              <span className="hidden sm:inline">Rewards</span>
            </TabsTrigger>
            <TabsTrigger value="channels" className="flex items-center gap-2 data-[state=active]:bg-orange-500/20">
              <Webhook className="w-4 h-4" />
              <span className="hidden sm:inline">Channels</span>
            </TabsTrigger>
            <TabsTrigger value="distribution" className="flex items-center gap-2 data-[state=active]:bg-purple-500/20">
              <BarChart3 className="w-4 h-4" />
              <span className="hidden sm:inline">Distribution</span>
            </TabsTrigger>
            <TabsTrigger value="messaging" className="flex items-center gap-2 data-[state=active]:bg-[#00FF99]/20">
              <MessageSquare className="w-4 h-4" />
              <span className="hidden sm:inline">Messaging</span>
            </TabsTrigger>
            <TabsTrigger value="discover" className="flex items-center gap-2 data-[state=active]:bg-blue-500/20">
              <Store className="w-4 h-4" />
              <span className="hidden sm:inline">Discover</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2 data-[state=active]:bg-gray-500/20">
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Analytics</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="compose">
            <PostDashboard />
          </TabsContent>

          <TabsContent value="links">
            <SmartLinkMonitor />
          </TabsContent>

          <TabsContent value="rewards">
            <RewardsWallet />
          </TabsContent>

          <TabsContent value="channels">
            <CustomChannels />
          </TabsContent>

          <TabsContent value="distribution">
            <CrossPlatformDistribution />
          </TabsContent>

          <TabsContent value="messaging">
            <SecureMessaging />
          </TabsContent>

          <TabsContent value="discover">
            <DiscoverFeed />
          </TabsContent>

          <TabsContent value="analytics">
            <Card className="bg-[#1A1A2E]/60 backdrop-blur-xl border-gray-500/20">
              <CardHeader>
                <CardTitle className="text-gray-400">Analytics Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comprehensive messaging analytics and engagement insights coming soon...
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Enhanced Mobile Community Button */}
        <div className="sm:hidden fixed bottom-4 left-0 right-0 px-4 flex justify-center z-40 pointer-events-none">
          <Button
            className="pointer-events-auto w-full bg-gradient-to-r from-[#00FF99] to-[#00D1FF] font-bold text-black shadow-xl"
            size="lg"
            onClick={handleJoinCommunity}
          >
            <UsersRound className="w-4 h-4 mr-2" /> Join Web3 Community
          </Button>
        </div>
      </div>
    </div>
  );
};
