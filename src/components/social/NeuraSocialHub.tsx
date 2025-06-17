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

  // Placeholder share action
  const handleShare = async (platform: string) => {
    toast({
      title: "Coming Soon!",
      description: `Share to ${platform} will be supported soon.`,
    });
  };

  // New: Handle top-level actions
  const handleDiscover = () => {
    setActiveTab('discover');
    toast({ title: "Discover Content", description: "Explore trending and new creator content!" });
  };

  const handleShareNeuraSocial = () => {
    toast({
      title: "Share to NeuraSocial coming soon",
      description: "You'll soon be able to share content directly from anywhere into NeuraSocial and your Web2 feeds.",
    });
  };

  const handleJoinCommunity = () => {
    window.open("https://discord.gg/t00savvy", "_blank");
    toast({
      title: "Join Our DAO Community",
      description: "Opened T00 Savvy DAO community Discord in a new tab.",
    });
  };

  // For responsive bottom bar on mobile
  // (optional sticky nav for key actions; omitted for brevity unless requested)

  return (
    <div className="min-h-screen bg-background p-6 relative">
      <div className="max-w-7xl mx-auto">

        {/* Top action bar */}
        <div className="flex flex-col sm:flex-row items-center gap-2 mb-6 justify-between">
          <div className="flex gap-2 flex-wrap">
            <Button
              variant="outline"
              className="border-[#00C4B4] text-[#00C4B4] font-bold hover:bg-[#00C4B4]/10"
              size="sm"
              onClick={handleDiscover}
            >
              <Store className="w-4 h-4 mr-1" /> Discover Content
            </Button>
            <Button
              variant="outline"
              className="border-[#8F10EB] text-[#8F10EB] font-bold hover:bg-[#8F10EB]/10"
              size="sm"
              onClick={handleShareNeuraSocial}
            >
              <Share2 className="w-4 h-4 mr-1" /> Share to NeuraSocial
            </Button>
            <Button
              variant="outline"
              className="border-[#FF5733] text-[#FF5733] font-bold hover:bg-[#FF5733]/10"
              size="sm"
              onClick={() => setActiveTab('channels')}
            >
              <Webhook className="w-4 h-4 mr-1" /> Custom Channels
            </Button>
            <Button
              variant="outline"
              className="border-[#00FF99] text-[#00FF99] font-bold hover:bg-[#00FF99]/10"
              size="sm"
              onClick={() => setActiveTab('messaging')}
            >
              <Shield className="w-4 h-4 mr-1" /> Secure Chat
            </Button>
          </div>
          <Button
            variant="secondary"
            size="sm"
            className="bg-gradient-to-r from-neura-cyan to-green-600 text-white font-bold shadow-lg"
            onClick={handleJoinCommunity}
          >
            <UsersRound className="w-4 h-4 mr-1" /> Join Community
          </Button>
        </div>

        {/* Hero Section */}
        <section className="mb-8 px-4 py-8 rounded-3xl bg-gradient-to-br from-neura-cyan/20 via-background to-card/60 border border-neura-cyan/40 shadow-2xl">
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center md:items-start">
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl font-bold font-porscha mb-2 text-neura-cyan uppercase">
                NeuraSocial: Decentralized Social Sharing Hub
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-3">
                Bridge your Web3 content with traditional social platforms—no centralized APIs, more visibility, more reward.
              </p>
              <p className="text-base text-foreground mb-2">
                <b>NeuraSocial operates as an independent sharing layer, supercharging reach and monetization across all networks.</b>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button className="grok-button-primary text-lg px-8 py-3 rounded-xl shadow-lg" size="lg">
                  🚀 Launch NeuraSocial Hub
                </Button>
                <span className="hidden sm:inline-flex items-center ml-4 font-bold text-neura-cyan uppercase tracking-wider text-sm">
                  Early Access Beta
                </span>
              </div>
            </div>
            {/* Feature Cards Section */}
            <div className="flex flex-col gap-4 flex-shrink-0 w-full md:w-80 mt-8 md:mt-0">
              {/* Cross-Platform Distribution */}
              <Card className="bg-black/70 border-neura-cyan/40">
                <CardContent className="pt-4 pb-3 px-4 flex flex-col gap-1">
                  <span className="flex items-center gap-2 font-semibold text-neura-cyan text-lg">
                    <BarChart3 className="w-5 h-5" /> Cross-Platform Distribution
                  </span>
                  <span className="text-sm text-foreground mt-1">
                    Instantly publish across X, Instagram & more
                  </span>
                </CardContent>
              </Card>
              {/* $Neurax Rewards */}
              <Card className="bg-black/70 border-green-500/40">
                <CardContent className="pt-4 pb-3 px-4 flex flex-col gap-1">
                  <span className="flex items-center gap-2 font-semibold text-green-400 text-lg">
                    <Coins className="w-5 h-5" /> $Neurax Incentivization
                  </span>
                  <span className="text-xs mt-1 mb-1">
                    Earn tokens for driving traffic & engagement
                  </span>
                  <span className="flex gap-2 text-xs text-green-400">
                    <span className="bg-green-800/20 px-2 py-1 rounded font-mono">+12 clicks</span>
                    <span className="bg-green-800/20 px-2 py-1 rounded font-mono">$Rewards</span>
                  </span>
                </CardContent>
              </Card>
              {/* Smart Links */}
              <Card className="bg-black/70 border-cyan-400/40">
                <CardContent className="pt-4 pb-3 px-4 flex flex-col gap-1">
                  <span className="flex items-center gap-2 font-semibold text-cyan-400 text-lg">
                    <Link2 className="w-5 h-5" /> Auto-Generated Smart Links
                  </span>
                  <span className="text-xs text-cyan-300 flex flex-col mt-1">
                    <span className="font-mono bg-cyan-900/30 rounded px-2 py-1 inline-block mb-1">
                      neura.app/content/x8f92?ref=0xAb3...
                    </span>
                    <span className="font-mono bg-cyan-900/30 rounded px-2 py-1 inline-block">
                      neura.app/gallery/nft?ref=0xAb3...
                    </span>
                  </span>
                </CardContent>
              </Card>
              {/* Custom Channels */}
              <Card className="bg-black/70 border-yellow-400/40">
                <CardContent className="pt-4 pb-3 px-4 flex flex-col gap-1">
                  <span className="flex items-center gap-2 font-semibold text-yellow-400 text-lg">
                    <Webhook className="w-5 h-5" /> Custom Channels
                  </span>
                  <span className="text-xs mt-1">
                    Webhook & API bridge to niche/private networks
                  </span>
                </CardContent>
              </Card>
              {/* Secure Messaging */}
              <Card className="bg-black/70 border-green-400/40">
                <CardContent className="pt-4 pb-3 px-4 flex flex-col gap-1">
                  <span className="flex items-center gap-2 font-semibold text-green-400 text-lg">
                    <Shield className="w-5 h-5" /> Secure Messaging
                  </span>
                  <span className="text-xs mt-1">
                    End-to-end encrypted Web3 communication
                  </span>
                </CardContent>
              </Card>
            </div>
          </div>
          {/* Share On Section */}
          <div className="mt-10">
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <span className="text-foreground font-semibold mr-4 text-base">Share On:</span>
              <div className="flex gap-2 flex-wrap">
                <Button variant="outline" className="border-cyan-500 text-cyan-300 hover:bg-cyan-900" size="sm" onClick={() => handleShare('Twitter')}>
                  <Twitter className="w-5 h-5" />
                  Twitter
                </Button>
                <Button variant="outline" className="border-blue-500 text-blue-300 hover:bg-blue-900" size="sm" onClick={() => handleShare('Facebook')}>
                  <Facebook className="w-5 h-5" />
                  Facebook
                </Button>
                <Button variant="outline" className="border-blue-400 text-blue-200 hover:bg-blue-800" size="sm" onClick={() => handleShare('LinkedIn')}>
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </Button>
              </div>
              <span className="flex-1"></span>
            </div>
            <div className="text-xs text-muted-foreground mt-4 font-mono">
              <b>Pro Tip:</b> Boost your earning potential—high-performing posts that trend on Web2 can unlock NeuraSocial reputation scores and tiered reward pools.
            </div>
          </div>
          {/* How it Works - Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 border-t border-border/40 pt-6">
            <div className="flex flex-col items-center min-w-[120px]">
              <BarChart3 className="w-6 h-6 text-neura-cyan" /><span className="text-xs mt-2">Cross-Platform</span>
            </div>
            <div className="flex flex-col items-center min-w-[120px]">
              <Coins className="w-6 h-6 text-green-400" /><span className="text-xs mt-2">$Rewards</span>
            </div>
            <div className="flex flex-col items-center min-w-[120px]">
              <Link2 className="w-6 h-6 text-cyan-400" /><span className="text-xs mt-2">Smart Links</span>
            </div>
            <div className="flex flex-col items-center min-w-[120px]">
              <Webhook className="w-6 h-6 text-yellow-400" /><span className="text-xs mt-2">Integrations</span>
            </div>
            <div className="flex flex-col items-center min-w-[120px]">
              <Store className="w-6 h-6 text-purple-400" /><span className="text-xs mt-2">Custom Channels</span>
            </div>
            <div className="flex flex-col items-center min-w-[120px]">
              <Shield className="w-6 h-6 text-green-400" /><span className="text-xs mt-2">Secure Chat</span>
            </div>
          </div>
        </section>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-8">
            <TabsTrigger value="compose" className="flex items-center gap-2">
              <Share2 className="w-4 h-4" />
              Compose
            </TabsTrigger>
            <TabsTrigger value="links" className="flex items-center gap-2">
              <Link2 className="w-4 h-4" />
              Smart Links
            </TabsTrigger>
            <TabsTrigger value="rewards" className="flex items-center gap-2">
              <Coins className="w-4 h-4" />
              Rewards
            </TabsTrigger>
            <TabsTrigger value="channels" className="flex items-center gap-2">
              <Webhook className="w-4 h-4" />
              Channels
            </TabsTrigger>
            <TabsTrigger value="distribution" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Distribution
            </TabsTrigger>
            <TabsTrigger value="messaging" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Messaging
            </TabsTrigger>
            <TabsTrigger value="discover" className="flex items-center gap-2">
              <Store className="w-4 h-4" />
              Discover
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Analytics
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
            <Tabs defaultValue="secure-chat" className="space-y-4">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="secure-chat">Secure Chat</TabsTrigger>
                <TabsTrigger value="cross-platform">Cross-Platform Share</TabsTrigger>
              </TabsList>
              
              <TabsContent value="secure-chat">
                <SecureMessaging />
              </TabsContent>
              
              <TabsContent value="cross-platform">
                <CrossPlatformShare />
              </TabsContent>
            </Tabs>
          </TabsContent>

          <TabsContent value="discover">
            <DiscoverFeed />
          </TabsContent>

          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Analytics Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comprehensive analytics and insights coming soon...
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer join button for mobile */}
        <div className="sm:hidden fixed bottom-4 left-0 right-0 px-4 flex justify-center z-40 pointer-events-none">
          <Button
            className="pointer-events-auto w-full bg-gradient-to-r from-neura-cyan to-green-700 font-bold"
            size="lg"
            onClick={handleJoinCommunity}
          >
            <UsersRound className="w-4 h-4 mr-2" /> Join Community
          </Button>
        </div>
      </div>
    </div>
  );
};
