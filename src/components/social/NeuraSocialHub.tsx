import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Share2, 
  Link2, 
  Coins, 
  Webhook, 
  BarChart3,
  Wallet,
  Settings,
  Store
} from 'lucide-react';
import { PostDashboard } from './PostDashboard';
import { SmartLinkMonitor } from './SmartLinkMonitor';
import { RewardsWallet } from './RewardsWallet';
import { CustomChannels } from './CustomChannels';
import { CrossPlatformDistribution } from './CrossPlatformDistribution';
import { DiscoverFeed } from "./DiscoverFeed";

export const NeuraSocialHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState('compose');

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">NeuraSocial Hub</h1>
          <p className="text-muted-foreground">
            Decentralized Social Sharing with Smart Links & $Neurax Rewards
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-7">
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
      </div>
    </div>
  );
};
