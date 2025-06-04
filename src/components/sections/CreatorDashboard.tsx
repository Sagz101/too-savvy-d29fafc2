import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from "@/components/ui/button";
import { CreatorDiscoveryFeed } from '@/components/discovery/CreatorDiscoveryFeed';
import { BarChart3, Layers, Globe, PieChart, TrendingUp, Activity, Plus, BookOpen, File, Wallet, MessageSquare, Compass } from 'lucide-react';

export const CreatorDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-neura-cyan/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-neura-purple/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neura-purple to-neura-cyan bg-clip-text text-transparent">
              Unified Creator Dashboard
            </span>
          </h2>
          <p className="text-white/70 md:text-lg max-w-2xl mx-auto">
            All the tools you need to create, manage, and grow your digital presence in one place
          </p>
        </div>
        
        <div className="rounded-xl overflow-hidden border border-neura-purple/30 bg-neura-dark/60 backdrop-blur-md shadow-xl">
          <div className="p-1">
            <Tabs defaultValue="overview" className="w-full">
              <div className="flex justify-between items-center border-b border-neura-purple/20 px-4 py-2">
                <TabsList className="bg-neura-dark/50">
                  <TabsTrigger value="overview" className="data-[state=active]:bg-neura-purple/20">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Overview
                  </TabsTrigger>
                  <TabsTrigger value="content" className="data-[state=active]:bg-neura-purple/20">
                    <Layers className="w-4 h-4 mr-2" />
                    Content
                  </TabsTrigger>
                  <TabsTrigger value="analytics" className="data-[state=active]:bg-neura-purple/20">
                    <PieChart className="w-4 h-4 mr-2" />
                    Analytics
                  </TabsTrigger>
                  <TabsTrigger value="discover" className="data-[state=active]:bg-neura-purple/20">
                    <Compass className="w-4 h-4 mr-2" />
                    Discover
                  </TabsTrigger>
                  <TabsTrigger value="ecosystem" className="data-[state=active]:bg-neura-purple/20">
                    <Globe className="w-4 h-4 mr-2" />
                    Ecosystem
                  </TabsTrigger>
                </TabsList>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="border-neura-purple/30 text-white">
                    <Plus className="w-4 h-4 mr-2" /> Create
                  </Button>
                </div>
              </div>

              <TabsContent value="overview" className="p-6 mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <MetricCard 
                    title="Revenue" 
                    value="Ξ 0.87" 
                    change="+12.5%" 
                    icon={<TrendingUp className="w-5 h-5 text-emerald-400" />} 
                  />
                  
                  <MetricCard 
                    title="Engagement" 
                    value="32.7%" 
                    change="+5.2%" 
                    icon={<Activity className="w-5 h-5 text-neura-cyan" />} 
                  />
                  
                  <MetricCard 
                    title="Collectors" 
                    value="158" 
                    change="+23" 
                    icon={<Users className="w-5 h-5 text-neura-purple" />} 
                  />
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card className="bg-neura-dark/50 border-neura-purple/20">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-3 text-white">Quick Actions</h3>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        <ActionButton icon={<File />} label="New Post" />
                        <ActionButton icon={<BookOpen />} label="New Drop" />
                        <ActionButton icon={<MessageSquare />} label="Engage Fans" />
                        <ActionButton icon={<Wallet />} label="Wallet" />
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-neura-dark/50 border-neura-purple/20">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-3 text-white">Performance Summary</h3>
                      <div className="h-40 relative">
                        <div className="absolute inset-0 flex items-end">
                          <div className="w-1/6 bg-neura-purple/40 h-[20%] rounded-t-sm"></div>
                          <div className="w-1/6 bg-neura-purple/40 h-[45%] rounded-t-sm"></div>
                          <div className="w-1/6 bg-neura-purple/40 h-[30%] rounded-t-sm"></div>
                          <div className="w-1/6 bg-neura-purple/40 h-[60%] rounded-t-sm"></div>
                          <div className="w-1/6 bg-neura-purple/40 h-[40%] rounded-t-sm"></div>
                          <div className="w-1/6 bg-neura-cyan/60 h-[75%] rounded-t-sm"></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="content" className="p-6 mt-0">
                <div className="text-center py-12">
                  <p className="text-white/60 mb-4">Select a template to create new content</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                    <TemplateCard title="Post" icon={<File className="w-8 h-8" />} />
                    <TemplateCard title="Collection" icon={<Layers className="w-8 h-8" />} />
                    <TemplateCard title="Subscription" icon={<BookOpen className="w-8 h-8" />} />
                    <TemplateCard title="Product" icon={<ShoppingCart className="w-8 h-8" />} />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="analytics" className="p-6 mt-0">
                <div className="text-center py-8">
                  <p className="text-white/60">Analytics content will appear here</p>
                </div>
              </TabsContent>
              
              <TabsContent value="discover" className="p-6 mt-0">
                <CreatorDiscoveryFeed />
              </TabsContent>
              
              <TabsContent value="ecosystem" className="p-6 mt-0">
                <div className="text-center py-8">
                  <p className="text-white/60">Ecosystem integrations will appear here</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

const MetricCard = ({ title, value, change, icon }) => {
  const isPositive = change.startsWith('+');
  
  return (
    <Card className="bg-neura-dark/50 border-neura-purple/20">
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-white/60 text-sm">{title}</p>
            <p className="text-2xl font-bold text-white mt-1">{value}</p>
          </div>
          <div className={`p-2 rounded-full ${isPositive ? 'bg-emerald-500/10' : 'bg-rose-500/10'}`}>
            {icon}
          </div>
        </div>
        <div className={`mt-2 text-sm ${isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
          {change} <span className="text-white/40 text-xs">vs last period</span>
        </div>
      </CardContent>
    </Card>
  );
};

const ActionButton = ({ icon, label }) => {
  return (
    <Button variant="outline" className="flex flex-col items-center justify-center py-4 h-auto border-neura-purple/20 hover:bg-neura-purple/10">
      <div className="mb-1">{icon}</div>
      <span className="text-xs">{label}</span>
    </Button>
  );
};

const TemplateCard = ({ title, icon }) => {
  return (
    <Card className="bg-neura-dark/40 border-neura-purple/20 hover:border-neura-purple/50 transition-all duration-300 cursor-pointer">
      <CardContent className="p-6 flex flex-col items-center justify-center">
        <div className="p-3 rounded-full bg-neura-purple/10 mb-3">
          {icon}
        </div>
        <p className="font-medium">{title}</p>
      </CardContent>
    </Card>
  );
};

import { ShoppingCart, Users } from 'lucide-react';
