
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Palette, 
  Mic, 
  ShoppingCart, 
  FileText, 
  Share2, 
  Users,
  ChevronRight,
  Layers
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export const ModulesGrid = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const modules = [
    {
      icon: <Palette className="w-8 h-8 text-cyan-400" />,
      title: "Creator Studio",
      description: "Produce, stream, and monetize digital content with professional-grade tools",
      gradient: "from-cyan-400/20 to-blue-500/20",
      borderColor: "border-cyan-400/30",
      features: ["NFT Minting", "Live Streaming", "Token Gates"],
      gasEstimate: "~0.001 ETH"
    },
    {
      icon: <Mic className="w-8 h-8 text-purple-400" />,
      title: "Podcast & Music Studios",
      description: "Launch audio projects with NFT integration and Web3 monetization",
      gradient: "from-purple-400/20 to-pink-500/20",
      borderColor: "border-purple-400/30",
      features: ["Audio NFTs", "Royalty Splits", "Fan Tokens"],
      gasEstimate: "~0.0008 ETH"
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-emerald-400" />,
      title: "Storefront Builder",
      description: "Sell physical and digital goods with verifiable authenticity and smart contracts",
      gradient: "from-emerald-400/20 to-teal-500/20",
      borderColor: "border-emerald-400/30",
      features: ["Smart Contracts", "Crypto Payments", "Authenticity"],
      gasEstimate: "~0.002 ETH"
    },
    {
      icon: <FileText className="w-8 h-8 text-orange-400" />,
      title: "Threaditor",
      description: "Decentralized blogging and professional reporting hub with fact-checking",
      gradient: "from-orange-400/20 to-red-500/20",
      borderColor: "border-orange-400/30",
      features: ["Fact-Check AI", "Token Rewards", "Cross-Platform"],
      gasEstimate: "~0.0005 ETH"
    },
    {
      icon: <Share2 className="w-8 h-8 text-blue-400" />,
      title: "NeuraSocial",
      description: "Web3-native content sharing with cross-platform reach and token incentives",
      gradient: "from-blue-400/20 to-indigo-500/20",
      borderColor: "border-blue-400/30",
      features: ["Social Tokens", "DAO Governance", "Reputation"],
      gasEstimate: "~0.0003 ETH"
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-400" />,
      title: "Global Innovators",
      description: "Collaborative, tokenized project creation at scale with DAO governance",
      gradient: "from-yellow-400/20 to-orange-500/20",
      borderColor: "border-yellow-400/30",
      features: ["DAO Tools", "Collective Ownership", "Global Scale"],
      gasEstimate: "~0.001 ETH"
    }
  ];

  return (
    <div className={`mb-36 transition-all duration-1000 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '200ms' }}>
      <div className="text-center mb-24" ref={ref}>
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-purple-500/30 rounded-3xl blur-2xl"></div>
            <div className="relative p-4 rounded-3xl bg-gradient-to-r from-slate-800/60 to-gray-800/60 backdrop-blur-xl shadow-2xl border border-cyan-400/20">
              <Layers className="w-10 h-10 text-cyan-400" />
            </div>
          </div>
        </div>
        
        <h3 className="text-6xl md:text-7xl font-bold mb-8 text-white bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-orbitron">
          Modules
        </h3>
        <p className="text-white/80 text-2xl max-w-5xl mx-auto leading-relaxed mb-10">
          Unlock specialized tools for every step of your creative journey. Modular, composable, and fully Web3-native.
        </p>
        <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-emerald-400 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {modules.map((module, index) => (
          <Card 
            key={index}
            className={`group relative bg-gradient-to-br from-slate-800/95 via-gray-800/95 to-slate-900/95 border ${module.borderColor} backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-[1.02] hover:-translate-y-3 cursor-pointer overflow-hidden`}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Enhanced Glow Effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${module.gradient} opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-2xl`}></div>
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-2xl"></div>
            
            <CardContent className="p-10 relative z-10">
              <div className="relative z-10">
                {/* Icon Container */}
                <div className={`relative p-5 rounded-3xl bg-gradient-to-r ${module.gradient} backdrop-blur-sm shadow-2xl mb-8 w-fit group-hover:scale-110 transition-transform duration-500 border border-white/10`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-3xl"></div>
                  {module.icon}
                </div>
                
                <h4 className="font-bold text-3xl mb-6 text-white group-hover:text-cyan-100 transition-colors duration-300">
                  {module.title}
                </h4>
                
                <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300 leading-relaxed text-lg mb-6">
                  {module.description}
                </p>

                {/* Gas Fee Estimate */}
                <div className="mb-6 p-3 bg-gradient-to-r from-slate-700/40 to-gray-700/40 rounded-xl border border-emerald-400/20">
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-sm">Est. Gas Fee:</span>
                    <span className="text-emerald-400 font-semibold">{module.gasEstimate}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {module.features.map((feature, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gradient-to-r from-slate-700/60 to-gray-700/60 rounded-full text-sm text-cyan-300 border border-cyan-400/20">
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <Button 
                    variant="outline" 
                    className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/20 hover:border-cyan-400 transition-all duration-300 w-full text-lg py-3"
                  >
                    Explore Module <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
