
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { PodcastDashboard } from './PodcastDashboard';
import { PodcastCreator } from './PodcastCreator';
import { PodcastDistribution } from './PodcastDistribution';
import { PodcastMonetization } from './PodcastMonetization';
import { PodcastAnalytics } from './PodcastAnalytics';
import { Mic, Radio, DollarSign, BarChart3, Settings } from 'lucide-react';

export const PodcastStudio: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Podcast Studio
          </h1>
          <p className="text-muted-foreground text-lg">
            Create, distribute, and monetize your podcasts with token-gated content
          </p>
        </div>

        <Card className="grok-card">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-5 bg-card/20 p-1">
              <TabsTrigger 
                value="dashboard" 
                className="flex items-center gap-2 data-[state=active]:bg-primary/20"
              >
                <Settings size={16} />
                Dashboard
              </TabsTrigger>
              <TabsTrigger 
                value="create" 
                className="flex items-center gap-2 data-[state=active]:bg-primary/20"
              >
                <Mic size={16} />
                Create
              </TabsTrigger>
              <TabsTrigger 
                value="distribute" 
                className="flex items-center gap-2 data-[state=active]:bg-primary/20"
              >
                <Radio size={16} />
                Distribute
              </TabsTrigger>
              <TabsTrigger 
                value="monetize" 
                className="flex items-center gap-2 data-[state=active]:bg-primary/20"
              >
                <DollarSign size={16} />
                Monetize
              </TabsTrigger>
              <TabsTrigger 
                value="analytics" 
                className="flex items-center gap-2 data-[state=active]:bg-primary/20"
              >
                <BarChart3 size={16} />
                Analytics
              </TabsTrigger>
            </TabsList>

            <div className="mt-6">
              <TabsContent value="dashboard">
                <PodcastDashboard />
              </TabsContent>
              
              <TabsContent value="create">
                <PodcastCreator />
              </TabsContent>
              
              <TabsContent value="distribute">
                <PodcastDistribution />
              </TabsContent>
              
              <TabsContent value="monetize">
                <PodcastMonetization />
              </TabsContent>
              
              <TabsContent value="analytics">
                <PodcastAnalytics />
              </TabsContent>
            </div>
          </Tabs>
        </Card>
      </div>
    </div>
  );
};
