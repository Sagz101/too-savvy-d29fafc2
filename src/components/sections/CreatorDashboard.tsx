
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from "@/components/ui/button";
import { CreatorDiscoveryFeed } from '@/components/discovery/CreatorDiscoveryFeed';
import { BarChart3, Layers, Globe, PieChart, TrendingUp, Activity, Plus, BookOpen, File, Wallet, MessageSquare, Compass, Users, ShoppingCart } from 'lucide-react';

export const CreatorDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-cyan-400/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-400/5 rounded-full filter blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-orbitron">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-hero-glow">
              Unified Creator Dashboard
            </span>
          </h2>
          <p className="text-white/80 md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed font-medium">
            All the tools you need to create, manage, and grow your digital presence in one place
          </p>
          
          {/* Decorative Elements */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        </div>
        
        {/* Main Dashboard Container */}
        <div className="relative">
          {/* Glowing Border Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-emerald-400/20 rounded-2xl blur-sm"></div>
          
          <div className="relative rounded-2xl overflow-hidden border border-cyan-400/30 bg-gradient-to-br from-slate-800/90 via-gray-800/90 to-slate-900/90 backdrop-blur-xl shadow-2xl">
            <Tabs defaultValue="overview" className="w-full">
              {/* Enhanced Navigation Header */}
              <div className="border-b border-gradient-to-r from-cyan-400/20 via-purple-500/20 to-emerald-400/20 bg-gradient-to-r from-slate-800/50 via-gray-800/50 to-slate-900/50 backdrop-blur-sm">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center p-6 gap-4">
                  <TabsList className="bg-slate-900/80 backdrop-blur-sm border border-cyan-400/20 p-1 rounded-xl">
                    <TabsTrigger 
                      value="overview" 
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-400 data-[state=active]:to-purple-600 data-[state=active]:text-white hover:bg-slate-700/50 transition-all duration-300 rounded-lg px-4 py-2"
                    >
                      <BarChart3 className="w-4 h-4 mr-2" />
                      Overview
                    </TabsTrigger>
                    <TabsTrigger 
                      value="content"
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-400 data-[state=active]:to-purple-600 data-[state=active]:text-white hover:bg-slate-700/50 transition-all duration-300 rounded-lg px-4 py-2"
                    >
                      <Layers className="w-4 h-4 mr-2" />
                      Content
                    </TabsTrigger>
                    <TabsTrigger 
                      value="analytics"
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-400 data-[state=active]:to-purple-600 data-[state=active]:text-white hover:bg-slate-700/50 transition-all duration-300 rounded-lg px-4 py-2"
                    >
                      <PieChart className="w-4 h-4 mr-2" />
                      Analytics
                    </TabsTrigger>
                    <TabsTrigger 
                      value="discover"
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-400 data-[state=active]:to-purple-600 data-[state=active]:text-white hover:bg-slate-700/50 transition-all duration-300 rounded-lg px-4 py-2"
                    >
                      <Compass className="w-4 h-4 mr-2" />
                      Discover
                    </TabsTrigger>
                    <TabsTrigger 
                      value="ecosystem"
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-400 data-[state=active]:to-purple-600 data-[state=active]:text-white hover:bg-slate-700/50 transition-all duration-300 rounded-lg px-4 py-2"
                    >
                      <Globe className="w-4 h-4 mr-2" />
                      Ecosystem
                    </TabsTrigger>
                  </TabsList>

                  <div className="flex gap-3">
                    <Button className="bg-gradient-to-r from-emerald-400 to-cyan-500 hover:from-emerald-500 hover:to-cyan-600 text-white font-semibold shadow-lg hover:shadow-xl hover:shadow-emerald-400/25 transform hover:scale-105 transition-all duration-300 rounded-xl px-6 py-2">
                      <Plus className="w-4 h-4 mr-2" /> 
                      Create
                    </Button>
                  </div>
                </div>
              </div>

              <TabsContent value="overview" className="p-8 mt-0 space-y-8">
                {/* Key Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <EnhancedMetricCard 
                    title="Revenue" 
                    value="Ξ 0.87" 
                    change="+12.5%" 
                    icon={<TrendingUp className="w-6 h-6 text-emerald-400" />}
                    gradient="from-emerald-400/10 to-cyan-400/10"
                  />
                  
                  <EnhancedMetricCard 
                    title="Engagement" 
                    value="32.7%" 
                    change="+5.2%" 
                    icon={<Activity className="w-6 h-6 text-cyan-400" />}
                    gradient="from-cyan-400/10 to-blue-500/10"
                  />
                  
                  <EnhancedMetricCard 
                    title="Collectors" 
                    value="158" 
                    change="+23" 
                    icon={<Users className="w-6 h-6 text-purple-400" />}
                    gradient="from-purple-400/10 to-pink-500/10"
                  />
                </div>
                
                {/* Main Content Grid */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                  {/* Quick Actions */}
                  <Card className="bg-gradient-to-br from-slate-800/80 via-gray-800/80 to-slate-900/80 border border-cyan-400/20 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-cyan-400/10 transition-all duration-500">
                    <CardContent className="p-8">
                      <h3 className="font-bold text-2xl mb-6 text-white bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        Quick Actions
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <QuickActionButton icon={<File className="w-5 h-5" />} label="New Post" gradient="from-cyan-400 to-blue-500" />
                        <QuickActionButton icon={<BookOpen className="w-5 h-5" />} label="New Drop" gradient="from-purple-500 to-pink-500" />
                        <QuickActionButton icon={<MessageSquare className="w-5 h-5" />} label="Engage Fans" gradient="from-emerald-400 to-teal-500" />
                        <QuickActionButton icon={<Wallet className="w-5 h-5" />} label="Wallet" gradient="from-yellow-400 to-orange-500" />
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Performance Summary */}
                  <Card className="bg-gradient-to-br from-slate-800/80 via-gray-800/80 to-slate-900/80 border border-purple-500/20 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500">
                    <CardContent className="p-8">
                      <h3 className="font-bold text-2xl mb-6 text-white bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                        Performance Summary
                      </h3>
                      <div className="h-48 relative overflow-hidden rounded-xl bg-gradient-to-r from-slate-900/50 to-gray-900/50 p-4">
                        <div className="absolute inset-0 flex items-end justify-between px-4 pb-4">
                          {[20, 45, 30, 60, 40, 75, 55, 80].map((height, index) => (
                            <div
                              key={index}
                              className={`w-8 bg-gradient-to-t rounded-t-lg transition-all duration-1000 hover:scale-110 ${
                                index === 7 ? 'from-cyan-400 to-blue-500 shadow-lg shadow-cyan-400/50' : 
                                index % 2 === 0 ? 'from-purple-400/60 to-purple-500/60' : 'from-cyan-400/60 to-blue-500/60'
                              }`}
                              style={{ 
                                height: `${height}%`,
                                animationDelay: `${index * 100}ms`
                              }}
                            ></div>
                          ))}
                        </div>
                        
                        {/* Chart Overlay Effects */}
                        <div className="absolute top-2 right-2 text-xs text-white/60 bg-slate-800/80 px-2 py-1 rounded">
                          Last 7 days
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="content" className="p-8 mt-0">
                <div className="text-center py-16">
                  <h3 className="text-2xl font-bold text-white mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Create New Content
                  </h3>
                  <p className="text-white/70 mb-8 text-lg">Select a template to get started with your next creation</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    <TemplateCard title="Post" icon={<File className="w-10 h-10" />} gradient="from-cyan-400 to-blue-500" />
                    <TemplateCard title="Collection" icon={<Layers className="w-10 h-10" />} gradient="from-purple-500 to-pink-500" />
                    <TemplateCard title="Subscription" icon={<BookOpen className="w-10 h-10" />} gradient="from-emerald-400 to-teal-500" />
                    <TemplateCard title="Product" icon={<ShoppingCart className="w-10 h-10" />} gradient="from-yellow-400 to-orange-500" />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="analytics" className="p-8 mt-0">
                <div className="text-center py-16">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
                    <PieChart className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Analytics Dashboard</h3>
                  <p className="text-white/60 max-w-md mx-auto">Comprehensive analytics and insights will appear here</p>
                </div>
              </TabsContent>
              
              <TabsContent value="discover" className="p-8 mt-0">
                <CreatorDiscoveryFeed />
              </TabsContent>
              
              <TabsContent value="ecosystem" className="p-8 mt-0">
                <div className="text-center py-16">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full flex items-center justify-center">
                    <Globe className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Ecosystem Integrations</h3>
                  <p className="text-white/60 max-w-md mx-auto">Connect with Web3 platforms and tools</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

const EnhancedMetricCard = ({ title, value, change, icon, gradient }) => {
  const isPositive = change.startsWith('+');
  
  return (
    <Card className={`bg-gradient-to-br ${gradient} border border-cyan-400/20 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-cyan-400/10 transition-all duration-500 hover:scale-105 group`}>
      <CardContent className="p-6 relative overflow-hidden">
        {/* Background Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-white/70 text-sm font-medium uppercase tracking-wider">{title}</p>
              <p className="text-3xl font-bold text-white mt-2 font-orbitron">{value}</p>
            </div>
            <div className="p-3 rounded-full bg-gradient-to-r from-slate-800/80 to-gray-800/80 backdrop-blur-sm shadow-lg group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
          </div>
          <div className={`flex items-center gap-2 ${isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
            <span className="text-lg font-semibold">{change}</span>
            <span className="text-white/50 text-sm">vs last period</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const QuickActionButton = ({ icon, label, gradient }) => {
  return (
    <Button className={`bg-gradient-to-r ${gradient} hover:shadow-xl hover:shadow-current/25 text-white font-semibold transform hover:scale-105 transition-all duration-300 rounded-xl h-auto py-4 px-4 flex flex-col items-center justify-center gap-2 group`}>
      <div className="group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <span className="text-sm font-medium">{label}</span>
    </Button>
  );
};

const TemplateCard = ({ title, icon, gradient }) => {
  return (
    <Card className="bg-gradient-to-br from-slate-800/60 via-gray-800/60 to-slate-900/60 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 cursor-pointer group hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/10">
      <CardContent className="p-8 flex flex-col items-center justify-center text-center relative overflow-hidden">
        {/* Background Effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
        
        <div className={`relative z-10 p-4 rounded-full bg-gradient-to-r ${gradient} mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
          {icon}
        </div>
        <p className="font-semibold text-lg text-white group-hover:text-cyan-100 transition-colors duration-300">{title}</p>
      </CardContent>
    </Card>
  );
};
