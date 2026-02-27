
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  FileText, 
  Edit, 
  Users, 
  TrendingUp,
  Search,
  Wallet
} from 'lucide-react';
import { WriterDashboard } from './WriterDashboard';
import { ReaderFeed } from './ReaderFeed';
import { ThreadView } from './ThreadView';
import { MonetizationInterface } from './MonetizationInterface';
import { FactCheckingLayer } from './FactCheckingLayer';

export const ThreaditorHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState('feed');

  return (
    <div className="min-h-screen p-6 pt-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Threaditor</h1>
          <p className="text-muted-foreground">
            Decentralized Blogging & Reporting Platform - Own Your Voice, Publish with Purpose
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="feed" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Feed
            </TabsTrigger>
            <TabsTrigger value="write" className="flex items-center gap-2">
              <Edit className="w-4 h-4" />
              Write
            </TabsTrigger>
            <TabsTrigger value="threads" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Threads
            </TabsTrigger>
            <TabsTrigger value="verify" className="flex items-center gap-2">
              <Search className="w-4 h-4" />
              Verify
            </TabsTrigger>
            <TabsTrigger value="earnings" className="flex items-center gap-2">
              <Wallet className="w-4 h-4" />
              Earnings
            </TabsTrigger>
            <TabsTrigger value="community" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Community
            </TabsTrigger>
          </TabsList>

          <TabsContent value="feed">
            <ReaderFeed />
          </TabsContent>

          <TabsContent value="write">
            <WriterDashboard />
          </TabsContent>

          <TabsContent value="threads">
            <ThreadView />
          </TabsContent>

          <TabsContent value="verify">
            <FactCheckingLayer />
          </TabsContent>

          <TabsContent value="earnings">
            <MonetizationInterface />
          </TabsContent>

          <TabsContent value="community">
            <Card>
              <CardHeader>
                <CardTitle>Contributor DAO</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Community governance and contributor verification coming soon...
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
