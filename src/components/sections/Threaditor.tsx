
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Pen, Edit, MessageSquare, Share2, Users, TrendingUp } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { Badge } from "@/components/ui/badge";
import { ModuleCard } from "@/components/ui/module-card";

export const Threaditor: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  
  const features = [
    {
      icon: <FileText className="w-6 h-6 text-cyan-400" />,
      title: "Web3-Native Publishing",
      description: "Mint your posts as permanent, tamper-proof content using NFT-backed entries."
    },
    {
      icon: <Pen className="w-6 h-6 text-cyan-400" />,
      title: "Professional Writing Tools",
      description: "Markdown editor with citation support, embedded media, and AI-assisted drafting."
    },
    {
      icon: <Users className="w-6 h-6 text-cyan-400" />,
      title: "Fact-Checking Layer",
      description: "Integrate crowd-sourced verification and oracle-backed validation for credibility."
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-cyan-400" />,
      title: "Thread-Based Reporting",
      description: "Create dynamic, time-stamped story threads that evolve with updates."
    }
  ];
  
  const monetizationFeatures = [
    {
      icon: <TrendingUp className="h-5 w-5 text-cyan-400" />,
      title: "Token Rewards",
      description: "Earn $Neurax tokens through reads, shares, and verified credibility scores."
    },
    {
      icon: <FileText className="h-5 w-5 text-cyan-400" />,
      title: "Premium Content",
      description: "Offer premium content or gated insights via tokenized access."
    },
    {
      icon: <Share2 className="h-5 w-5 text-cyan-400" />,
      title: "Cross-Platform",
      description: "Share to Web2 platforms with embedded attribution and tracking metrics."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black" id="threaditor">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-cyan-400/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-400/5 rounded-full filter blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Enhanced Header Section */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-orbitron">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-hero-glow">
              Threaditor | Decentralized Blogging & Reporting
            </span>
          </h2>
          <p className="text-2xl font-semibold text-white/90 mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Own Your Voice. Publish with Purpose.
          </p>
          <p className="text-white/70 md:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
            Threaditor is your decentralized hub for professional-grade blogging and on-chain reporting. 
            Whether you're a journalist, analyst, commentator, or storyteller, Threaditor gives you the tools 
            to write, verify, and share high-quality content—without platform interference.
          </p>
          
          {/* Decorative Elements */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        </div>
        
        {/* Enhanced Features Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`transition-all duration-500 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card className="bg-gradient-to-br from-slate-800/80 via-gray-800/80 to-slate-900/80 border border-cyan-400/20 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-cyan-400/10 transition-all duration-500 hover:scale-105 group h-full">
                <CardContent className="p-6 relative overflow-hidden">
                  {/* Background Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="p-3 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-500/20 backdrop-blur-sm shadow-lg mb-4 w-fit">
                      {feature.icon}
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-white group-hover:text-cyan-100 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-white/70 group-hover:text-white/80 transition-colors duration-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        {/* Enhanced Monetization Section */}
        <div className={`mb-16 transition-all duration-500 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
             style={{ transitionDelay: '400ms' }}>
          <Card className="bg-gradient-to-br from-slate-800/90 via-gray-800/90 to-slate-900/90 border border-purple-500/30 backdrop-blur-xl shadow-2xl overflow-hidden relative">
            {/* Glowing Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-emerald-400/20 rounded-2xl blur-sm"></div>
            
            <CardContent className="p-8 relative">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2">
                  <h3 className="text-3xl font-bold mb-6 text-white bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Monetization & Rewards
                  </h3>
                  <div className="space-y-6">
                    {monetizationFeatures.map((item, index) => (
                      <div key={index} className="flex items-start gap-4 group">
                        <div className="bg-gradient-to-r from-cyan-400/20 to-purple-500/20 p-3 rounded-full backdrop-blur-sm shadow-lg group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg text-white group-hover:text-cyan-100 transition-colors duration-300">
                            {item.title}
                          </h4>
                          <p className="text-white/70 group-hover:text-white/80 transition-colors duration-300">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                    <div className="flex items-start gap-4 group">
                      <div className="bg-gradient-to-r from-cyan-400/20 to-purple-500/20 p-3 rounded-full backdrop-blur-sm shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Edit className="h-5 w-5 text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-white group-hover:text-cyan-100 transition-colors duration-300">
                          Tipping & Sponsorship
                        </h4>
                        <p className="text-white/70 group-hover:text-white/80 transition-colors duration-300">
                          Enable tipping, affiliate links, and sponsor-backed threads.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-1/2 bg-gradient-to-br from-slate-800/80 via-gray-800/80 to-slate-900/80 rounded-2xl p-8 border border-cyan-400/20 backdrop-blur-sm shadow-xl">
                  <h3 className="text-2xl font-bold mb-6 text-white bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    For Professionals, Not Just Influencers
                  </h3>
                  <p className="text-white/70 mb-6 text-lg leading-relaxed">
                    Threaditor is built for contributors who value insight, impact, and independence. 
                    Join a network of credible writers shaping the narrative in Web3 and beyond.
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                    <Badge className="bg-gradient-to-r from-cyan-400/20 to-purple-500/20 text-cyan-100 border border-cyan-400/30 px-3 py-1 text-sm">
                      Journalists
                    </Badge>
                    <Badge className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-100 border border-purple-400/30 px-3 py-1 text-sm">
                      Analysts
                    </Badge>
                    <Badge className="bg-gradient-to-r from-emerald-400/20 to-teal-500/20 text-emerald-100 border border-emerald-400/30 px-3 py-1 text-sm">
                      Commentators
                    </Badge>
                    <Badge className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 text-yellow-100 border border-yellow-400/30 px-3 py-1 text-sm">
                      Researchers
                    </Badge>
                    <Badge className="bg-gradient-to-r from-pink-400/20 to-rose-500/20 text-pink-100 border border-pink-400/30 px-3 py-1 text-sm">
                      Thought Leaders
                    </Badge>
                  </div>
                  
                  <Button className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 hover:from-cyan-500 hover:via-blue-600 hover:to-purple-700 text-white font-semibold shadow-xl hover:shadow-2xl hover:shadow-cyan-400/25 transform hover:scale-105 transition-all duration-300 rounded-xl px-8 py-3 text-lg">
                    <span className="relative z-10">Join Threaditor Beta</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Enhanced CTA Section */}
        <div className={`text-center transition-all duration-500 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
             style={{ transitionDelay: '500ms' }}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 hover:from-cyan-500 hover:via-blue-600 hover:to-purple-700 text-white font-semibold shadow-xl hover:shadow-2xl hover:shadow-cyan-400/25 transform hover:scale-105 transition-all duration-300 rounded-xl px-8 py-3 text-lg"
              onClick={() => window.location.href = '/threaditor'}
            >
              Launch Threaditor
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 hover:text-cyan-300 shadow-lg hover:shadow-xl hover:shadow-cyan-400/20 transform hover:scale-105 transition-all duration-300 rounded-xl px-8 py-3 text-lg backdrop-blur-sm"
            >
              Learn More About Threaditor
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
