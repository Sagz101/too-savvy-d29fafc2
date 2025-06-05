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
      icon: <FileText className="w-6 h-6 text-neura-cyan" />,
      title: "Web3-Native Publishing",
      description: "Mint your posts as permanent, tamper-proof content using NFT-backed entries."
    },
    {
      icon: <Pen className="w-6 h-6 text-neura-cyan" />,
      title: "Professional Writing Tools",
      description: "Markdown editor with citation support, embedded media, and AI-assisted drafting."
    },
    {
      icon: <Users className="w-6 h-6 text-neura-cyan" />,
      title: "Fact-Checking Layer",
      description: "Integrate crowd-sourced verification and oracle-backed validation for credibility."
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-neura-cyan" />,
      title: "Thread-Based Reporting",
      description: "Create dynamic, time-stamped story threads that evolve with updates."
    }
  ];
  
  const monetizationFeatures = [
    {
      icon: <TrendingUp className="h-5 w-5 text-neura-cyan" />,
      title: "Token Rewards",
      description: "Earn $Neurax tokens through reads, shares, and verified credibility scores."
    },
    {
      icon: <FileText className="h-5 w-5 text-neura-cyan" />,
      title: "Premium Content",
      description: "Offer premium content or gated insights via tokenized access."
    },
    {
      icon: <Share2 className="h-5 w-5 text-neura-cyan" />,
      title: "Cross-Platform",
      description: "Share to Web2 platforms with embedded attribution and tracking metrics."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="threaditor">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-neura-purple/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-neura-cyan/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neura-purple to-neura-cyan bg-clip-text text-transparent">
              Threaditor | Decentralized Blogging & Reporting
            </span>
          </h2>
          <p className="text-xl font-semibold text-white/90 mb-3">Own Your Voice. Publish with Purpose.</p>
          <p className="text-white/70 md:text-lg max-w-3xl mx-auto">
            Threaditor is your decentralized hub for professional-grade blogging and on-chain reporting. 
            Whether you're a journalist, analyst, commentator, or storyteller, Threaditor gives you the tools 
            to write, verify, and share high-quality content—without platform interference.
          </p>
        </div>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`transition-all duration-500 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ModuleCard 
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
        
        <div className={`mb-16 transition-all duration-500 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
             style={{ transitionDelay: '400ms' }}>
          <Card className="bg-neura-dark/50 border border-neura-purple/30 overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-semibold mb-4 text-white">
                    Monetization & Rewards
                  </h3>
                  <div className="space-y-4">
                    {monetizationFeatures.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="bg-neura-purple/10 p-2 rounded-full">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-medium text-white">{item.title}</h4>
                          <p className="text-sm text-white/70">{item.description}</p>
                        </div>
                      </div>
                    ))}
                    <div className="flex items-start gap-3">
                      <div className="bg-neura-purple/10 p-2 rounded-full">
                        <Edit className="h-5 w-5 text-neura-cyan" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Tipping & Sponsorship</h4>
                        <p className="text-sm text-white/70">Enable tipping, affiliate links, and sponsor-backed threads.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2 bg-neura-dark/80 rounded-lg p-6 border border-neura-purple/20">
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    For Professionals, Not Just Influencers
                  </h3>
                  <p className="text-white/70 mb-6">
                    Threaditor is built for contributors who value insight, impact, and independence. 
                    Join a network of credible writers shaping the narrative in Web3 and beyond.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge className="bg-neura-purple/20 text-white">Journalists</Badge>
                    <Badge className="bg-neura-purple/20 text-white">Analysts</Badge>
                    <Badge className="bg-neura-purple/20 text-white">Commentators</Badge>
                    <Badge className="bg-neura-purple/20 text-white">Researchers</Badge>
                    <Badge className="bg-neura-purple/20 text-white">Thought Leaders</Badge>
                  </div>
                  
                  <Button className="bg-gradient-to-r from-solar-core to-solar-radiative text-white hover:from-solar-radiative hover:to-solar-convection shadow-xl cosmic-glow">
                    Join Threaditor Beta
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className={`text-center transition-all duration-500 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
             style={{ transitionDelay: '500ms' }}>
          <Button variant="outline" className="border-2 border-solar-photosphere text-solar-core hover:bg-solar-photosphere/20 hover:border-solar-radiative shadow-lg">
            Learn More About Threaditor
          </Button>
        </div>
      </div>
    </section>
  );
};
