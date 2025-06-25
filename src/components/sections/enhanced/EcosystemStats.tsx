
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp,
  Layers,
  Zap,
  Network,
  Globe,
  Users,
  Leaf,
  Shield,
  ExternalLink
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export const EcosystemStats = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const ecosystemStats = [
    { 
      number: "12,847", 
      label: "active monthly creators", 
      icon: <TrendingUp className="w-8 h-8 text-emerald-400" />,
      change: "+15.2%",
      description: "Growing creator community",
      trend: "up"
    },
    { 
      number: "421,071", 
      label: "NFTs minted", 
      icon: <Layers className="w-8 h-8 text-cyan-400" />,
      change: "+8.7%",
      description: "Digital assets created",
      trend: "up"
    },
    { 
      number: "~0.002", 
      label: "average cost per transaction", 
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      change: "-5.1%",
      description: "Ultra-low gas fees",
      trend: "down"
    },
    { 
      number: "3,000+", 
      label: "validator nodes", 
      icon: <Network className="w-8 h-8 text-purple-400" />,
      change: "+12.3%",
      description: "Decentralized network",
      trend: "up"
    }
  ];

  const ecosystemFeatures = [
    { 
      label: "Carbon-neutral", 
      icon: <Leaf className="w-6 h-6 text-emerald-400" />,
      description: "Eco-friendly blockchain infrastructure",
      certified: true
    },
    { 
      label: "Multi-chain compatible", 
      icon: <Globe className="w-6 h-6 text-blue-400" />,
      description: "Works across major networks",
      certified: false
    },
    { 
      label: "Creator-first infrastructure", 
      icon: <Users className="w-6 h-6 text-purple-400" />,
      description: "Built specifically for creators",
      certified: false
    }
  ];

  return (
    <div className={`mb-36 transition-all duration-1000 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '400ms' }}>
      <Card className="relative bg-gradient-to-br from-slate-800/98 via-gray-800/98 to-slate-900/98 border border-purple-500/40 backdrop-blur-2xl shadow-3xl overflow-hidden">
        {/* Enhanced Glowing Border Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-purple-500/30 to-emerald-400/30 rounded-2xl blur-xl -z-10"></div>
        <div className="absolute inset-[1px] bg-gradient-to-br from-slate-800/98 via-gray-800/98 to-slate-900/98 rounded-2xl"></div>
        
        <CardContent className="p-16 relative z-10" ref={ref}>
          <div className="text-center mb-20">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/40 to-emerald-400/40 rounded-3xl blur-2xl"></div>
                <div className="relative p-5 rounded-3xl bg-gradient-to-r from-slate-800/60 to-gray-800/60 backdrop-blur-xl shadow-2xl border border-white/10">
                  <Globe className="w-12 h-12 text-purple-400" />
                </div>
              </div>
            </div>
            
            <h3 className="text-6xl md:text-7xl font-bold mb-8 text-white bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent font-orbitron">
              Ecosystem
            </h3>
            <p className="text-white/80 text-2xl max-w-5xl mx-auto leading-relaxed mb-10">
              A self-sustaining creator economy, decentralized across 3,000+ validator nodes, supporting scalable, eco-efficient participation.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-emerald-400 mx-auto rounded-full"></div>
          </div>

          {/* Live Stats Ticker */}
          <div className="mb-20">
            <div className="flex items-center justify-center mb-6">
              <Badge className="bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 text-emerald-400 border border-emerald-400/30 px-4 py-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse mr-2"></div>
                Live Stats
              </Badge>
            </div>
          </div>

          {/* Enhanced Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
            {ecosystemStats.map((stat, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-700/40 to-gray-700/40 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative bg-gradient-to-br from-slate-800/80 to-gray-800/80 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-purple-400/40 transition-all duration-500 hover:scale-105 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="relative p-4 rounded-2xl bg-gradient-to-r from-slate-700/80 to-gray-700/80 backdrop-blur-sm shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-2xl"></div>
                      {stat.icon}
                    </div>
                  </div>
                  
                  <div className="text-5xl font-bold text-white font-orbitron mb-3 group-hover:text-cyan-100 transition-colors duration-300">
                    {stat.number}
                  </div>
                  
                  <div className="text-white/70 text-lg group-hover:text-white/90 transition-colors duration-300 mb-3">
                    {stat.label}
                  </div>
                  
                  <div className={`text-base font-semibold mb-2 ${
                    stat.trend === 'up' ? 'text-emerald-400' : 'text-red-400'
                  }`}>
                    {stat.change}
                  </div>
                  
                  <div className="text-white/50 text-sm">
                    {stat.description}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Trust Signals */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {ecosystemFeatures.map((feature, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-700/20 to-gray-700/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative bg-gradient-to-r from-slate-800/60 to-gray-800/60 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {feature.icon}
                      <span className="ml-4 text-white font-semibold text-xl">{feature.label}</span>
                    </div>
                    {feature.certified && (
                      <Badge className="bg-emerald-400/20 text-emerald-400 border border-emerald-400/30">
                        <Shield className="w-3 h-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                  <p className="text-white/60 text-base">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button className="bg-gradient-to-r from-purple-500 via-blue-500 to-emerald-500 hover:from-purple-600 hover:via-blue-600 hover:to-emerald-600 text-white font-semibold shadow-2xl hover:shadow-3xl hover:shadow-purple-400/30 transform hover:scale-105 transition-all duration-300 rounded-2xl px-12 py-6 text-xl">
              <Globe className="w-6 h-6 mr-3" />
              Join the Ecosystem
              <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
