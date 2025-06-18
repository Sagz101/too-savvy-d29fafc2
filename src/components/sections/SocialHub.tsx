
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from '@/components/ui/card';
import { Share2, Link, TrendingUp, Users, Webhook, Award, LinkIcon, ArrowRight, Copy, Eye, Coins } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { Badge } from "@/components/ui/badge";
import { SocialShare } from "@/components/ui/social-share";
import { toast } from "sonner";

export const SocialHub = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const copySmartLink = (url: string) => {
    navigator.clipboard.writeText(url);
    toast.success('Smart link copied to clipboard');
  };

  const smartLinks = [
    { url: 'neura.app/content/x8f92?ref=0xAb3...', clicks: 12 },
    { url: 'neura.app/gallery/nft?ref=0xAb3...', clicks: 8 }
  ];

  const customChannels = [
    { name: 'Webhook Integration', status: 'Active', color: 'emerald' },
    { name: 'API Bridge', status: '2 Active', color: 'blue' },
    { name: 'Custom Protocol', status: 'Beta', color: 'orange' }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Enhanced Background with Gradient and Nodes */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-purple-950/20 to-cyan-950/20"></div>
      
      {/* Animated Network Nodes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 right-1/6 w-1 h-1 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        
        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" aria-hidden="true">
          <defs>
            <linearGradient id="node-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00FFCC" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#FF00FF" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <line x1="16%" y1="25%" x2="75%" y2="33%" stroke="url(#node-gradient)" strokeWidth="1" />
          <line x1="75%" y1="33%" x2="33%" y2="66%" stroke="url(#node-gradient)" strokeWidth="1" />
          <line x1="33%" y1="66%" x2="83%" y2="75%" stroke="url(#node-gradient)" strokeWidth="1" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Container with Neon Border */}
        <div 
          ref={ref}
          className={`bg-gray-900/80 backdrop-blur-sm border-2 border-cyan-400/60 rounded-3xl p-8 md:p-12 shadow-2xl shadow-cyan-400/10 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            boxShadow: '0 0 30px rgba(0, 255, 204, 0.15), inset 0 0 30px rgba(0, 255, 204, 0.05)'
          }}
        >
          {/* Enhanced Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 animate-pulse">
              NeuraSocial: Decentralized Social Sharing Hub
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Bridge your Web3 content with traditional social platforms without relying on centralized APIs. 
              NeuraSocial operates as an <em className="text-yellow-400 font-semibold">independent sharing layer</em>, 
              enhancing visibility and monetization across networks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Cross-Platform Distribution */}
            <Card className="bg-gray-800/60 border-2 border-purple-500/40 rounded-2xl overflow-hidden hover:border-purple-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-gradient-to-br from-purple-500/30 to-cyan-500/20 p-3 rounded-xl">
                    <Share2 className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-purple-400 border-b border-purple-500/30 pb-2">
                      Cross-Platform Distribution
                    </h3>
                    <p className="text-gray-300 mb-4">
                      Publish your content simultaneously to multiple Web2 platforms from one decentralized interface.
                    </p>
                    
                    <div className="bg-gray-900/80 border border-purple-500/30 rounded-xl p-4 mb-4">
                      <SocialShare 
                        url="https://neura.app/content/example" 
                        title="Check out my latest Web3 creation"
                        text="I just created something amazing with Neura. Take a look!"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Pro Tip Callout */}
                <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/40 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-yellow-400" />
                    <span className="font-bold text-yellow-400">Pro Tip</span>
                  </div>
                  <p className="text-sm text-gray-200">
                    High-performing posts that trend on Web2 can unlock NeuraSocial reputation scores and tiered reward pools.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Smart Links & Incentivization */}
            <Card className="bg-gray-800/60 border-2 border-cyan-500/40 rounded-2xl overflow-hidden hover:border-cyan-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-gradient-to-br from-cyan-500/30 to-blue-500/20 p-3 rounded-xl">
                    <Link className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-cyan-400 border-b border-cyan-500/30 pb-2">
                      Auto-Generated Smart Links
                    </h3>
                    <p className="text-gray-300 mb-4">
                      Each shared post includes a unique affiliate code embedded via smart contracts, enabling transparent tracking and revenue sharing.
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      {smartLinks.map((link, index) => (
                        <button
                          key={index}
                          onClick={() => copySmartLink(link.url)}
                          className="w-full bg-gray-900/80 border border-cyan-500/30 rounded-lg p-3 flex items-center justify-between hover:bg-cyan-900/20 hover:border-cyan-400/50 transition-all duration-200 group"
                        >
                          <div className="flex items-center gap-2">
                            <LinkIcon className="w-4 h-4 text-cyan-400" />
                            <span className="text-sm text-gray-300 font-mono truncate">{link.url}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge className="bg-pink-500/20 text-pink-400 border-pink-500/30">
                              +{link.clicks} clicks
                            </Badge>
                            <Copy className="w-4 h-4 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* $Neurax Incentivization */}
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/40 rounded-xl p-4">
                  <h4 className="font-bold text-green-400 mb-3 flex items-center gap-2">
                    <Coins className="w-5 h-5" />
                    $Neurax Incentivization
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      Earn tokens for driving traffic or conversions
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-green-400" />
                      Rewards for reposts and engagement milestones
                    </li>
                    <li className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-green-400" />
                      Community-curated amplification system
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Custom Channels */}
          <Card className="bg-gray-800/60 border-2 border-yellow-500/40 rounded-2xl overflow-hidden hover:border-yellow-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20 mb-8">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-yellow-500/30 to-orange-500/20 p-3 rounded-xl">
                  <Webhook className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-yellow-400 border-b border-yellow-500/30 pb-2 mb-2">
                    Custom Channels
                  </h3>
                  <p className="text-gray-300">
                    Support for custom integrations into niche networks or private group chats via Webhooks and API bridges.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {customChannels.map((channel, index) => (
                  <div key={index} className="bg-gray-900/80 border border-gray-600/50 rounded-xl p-4 hover:border-gray-500/70 transition-all duration-200">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-cyan-400 font-semibold">{channel.name}</span>
                      <Badge 
                        className={`
                          ${channel.color === 'emerald' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' : ''}
                          ${channel.color === 'blue' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' : ''}
                          ${channel.color === 'orange' ? 'bg-orange-500/20 text-orange-400 border-orange-500/30' : ''}
                        `}
                      >
                        {channel.status}
                      </Badge>
                    </div>
                    <Button 
                      size="sm" 
                      className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-200"
                    >
                      Configure
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Enhanced Launch CTA */}
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 hover:from-purple-700 hover:via-pink-700 hover:to-cyan-700 text-white font-bold px-10 py-4 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-cyan-400/50"
              style={{
                boxShadow: '0 10px 25px rgba(139, 92, 246, 0.3), 0 0 30px rgba(6, 182, 212, 0.2)'
              }}
              onClick={() => window.location.href = '/neura-social'}
            >
              <Share2 className="mr-3 h-6 w-6" />
              Launch NeuraSocial Hub
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
