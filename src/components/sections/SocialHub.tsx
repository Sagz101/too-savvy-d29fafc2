
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from '@/components/ui/card';
import { Share2, Link, TrendingUp, Users, Webhook, Award, LinkIcon } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { Badge } from "@/components/ui/badge";
import { SocialShare } from "@/components/ui/social-share";

export const SocialHub: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-20 relative overflow-hidden" id="social">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-neura-purple/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-neura-cyan/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neura-purple to-neura-cyan bg-clip-text text-transparent">
              NeuraSocial: Decentralized Social Sharing Hub
            </span>
          </h2>
          <p className="text-white/70 md:text-lg max-w-3xl mx-auto">
            Bridge your Web3 content with traditional social platforms without relying on centralized APIs. 
            NeuraSocial operates as an independent sharing layer, enhancing visibility and monetization across networks.
          </p>
        </div>
        
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Cross-Platform Distribution */}
          <Card className={`bg-neura-dark/50 border border-neura-purple/30 overflow-hidden transition-all duration-500 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} 
                style={{ transitionDelay: '100ms' }}>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-neura-purple/20 to-neura-cyan/10 p-3 rounded-full">
                  <Share2 className="w-6 h-6 text-neura-cyan" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-white">Cross-Platform Distribution</h3>
                  <p className="text-white/70 mb-4">
                    Publish your content simultaneously to multiple Web2 platforms (e.g., X, Instagram) from one decentralized interface.
                  </p>
                  
                  <div className="bg-neura-dark/80 border border-neura-purple/20 rounded-lg p-4 mb-4">
                    <SocialShare 
                      url="https://neura.app/content/example" 
                      title="Check out my latest Web3 creation"
                      text="I just created something amazing with Neura. Take a look!"
                    />
                  </div>
                  
                  <div className="bg-neura-purple/10 p-3 rounded-lg">
                    <p className="text-sm text-white/80">
                      <span className="font-semibold text-neura-cyan">Pro Tip:</span> Boost your earning potential: high-performing posts that trend on Web2 can unlock NeuraSocial reputation scores and tiered reward pools.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Smart Links & Incentivization */}
          <Card className={`bg-neura-dark/50 border border-neura-purple/30 overflow-hidden transition-all duration-500 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} 
                style={{ transitionDelay: '200ms' }}>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-neura-purple/20 to-neura-cyan/10 p-3 rounded-full">
                  <Link className="w-6 h-6 text-neura-cyan" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-white">Auto-Generated Smart Links</h3>
                  <p className="text-white/70 mb-4">
                    Each shared post includes a unique affiliate code embedded via smart contracts, enabling transparent tracking and revenue sharing.
                  </p>
                  
                  <div className="grid grid-cols-1 gap-3 mb-4">
                    <div className="bg-neura-dark/80 border border-neura-purple/20 rounded-lg p-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <LinkIcon className="w-4 h-4 text-neura-cyan" />
                        <span className="text-sm text-white/80 truncate">neura.app/content/x8f92?ref=0xAb3...</span>
                      </div>
                      <Badge className="bg-neura-purple/30 text-white">+12 clicks</Badge>
                    </div>
                    <div className="bg-neura-dark/80 border border-neura-purple/20 rounded-lg p-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <LinkIcon className="w-4 h-4 text-neura-cyan" />
                        <span className="text-sm text-white/80 truncate">neura.app/gallery/nft?ref=0xAb3...</span>
                      </div>
                      <Badge className="bg-neura-purple/30 text-white">+8 clicks</Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-medium text-white">$Neurax Incentivization</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm text-white/70">
                        <TrendingUp className="w-4 h-4 text-neura-cyan" />
                        Earn tokens for driving traffic or conversions
                      </li>
                      <li className="flex items-center gap-2 text-sm text-white/70">
                        <Users className="w-4 h-4 text-neura-cyan" />
                        Rewards for reposts and engagement milestones
                      </li>
                      <li className="flex items-center gap-2 text-sm text-white/70">
                        <Award className="w-4 h-4 text-neura-cyan" />
                        Community-curated amplification system
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Custom Channels */}
          <Card className={`bg-neura-dark/50 border border-neura-purple/30 overflow-hidden transition-all duration-500 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} lg:col-span-2`} 
                style={{ transitionDelay: '300ms' }}>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="bg-gradient-to-br from-neura-purple/20 to-neura-cyan/10 p-3 rounded-full">
                  <Webhook className="w-6 h-6 text-neura-cyan" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-white">Custom Channels</h3>
                  <p className="text-white/70 mb-4">
                    Support for custom integrations into niche networks or private group chats via Webhooks and API bridges.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-neura-dark/80 border border-neura-purple/20 rounded-lg p-4">
                      <h4 className="font-medium text-white mb-2">Webhook Integration</h4>
                      <p className="text-sm text-white/70 mb-3">Connect to custom platforms with webhook endpoints</p>
                      <div className="flex items-center justify-between">
                        <Badge className="bg-emerald-500/20 text-emerald-300">Active</Badge>
                        <Button size="sm" variant="outline" className="border-neura-purple/30 text-white hover:bg-neura-purple/10">
                          Configure
                        </Button>
                      </div>
                    </div>
                    
                    <div className="bg-neura-dark/80 border border-neura-purple/20 rounded-lg p-4">
                      <h4 className="font-medium text-white mb-2">API Bridge</h4>
                      <p className="text-sm text-white/70 mb-3">Create custom protocols for private networks</p>
                      <div className="flex items-center justify-between">
                        <Badge className="bg-neura-purple/30 text-white">2 Active</Badge>
                        <Button size="sm" variant="outline" className="border-neura-purple/30 text-white hover:bg-neura-purple/10">
                          Configure
                        </Button>
                      </div>
                    </div>
                    
                    <div className="bg-neura-dark/80 border border-neura-purple/20 rounded-lg p-4">
                      <h4 className="font-medium text-white mb-2">Custom Protocol</h4>
                      <p className="text-sm text-white/70 mb-3">Build your own sharing mechanism</p>
                      <div className="flex items-center justify-between">
                        <Badge className="bg-amber-500/20 text-amber-300">Beta</Badge>
                        <Button size="sm" variant="outline" className="border-neura-purple/30 text-white hover:bg-neura-purple/10">
                          Configure
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
