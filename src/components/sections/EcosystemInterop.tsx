
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link, Wallet, Globe, Layers } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const ecosystemFeatures = [
  {
    icon: <Link className="h-6 w-6 text-neura-cyan" />,
    title: "Cross-Chain Asset Bridge",
    description: "Transfer content and value between various blockchain networks seamlessly"
  },
  {
    icon: <Wallet className="h-6 w-6 text-neura-cyan" />,
    title: "Cross-Platform Wallets",
    description: "Support for MetaMask, WalletConnect, and more with seamless integration"
  },
  {
    icon: <Globe className="h-6 w-6 text-neura-cyan" />,
    title: "Interoperable NFTs",
    description: "Create once, use everywhere - across dApps, marketplaces, and social platforms"
  },
  {
    icon: <Layers className="h-6 w-6 text-neura-cyan" />,
    title: "Layer 2 & Sidechain Support",
    description: "Enhanced speed and reduced transaction costs while maintaining security"
  }
];

export const EcosystemInterop = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  
  return (
    <section id="ecosystem" className="py-24 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-neura-magenta/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-neura-purple/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neura-purple to-neura-cyan bg-clip-text text-transparent">
              🌉 Ecosystem & Interoperability
            </span>
          </h2>
          <p className="text-white/70 md:text-lg max-w-2xl mx-auto">
            Creating a seamless, connected experience across the entire Web3 landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {ecosystemFeatures.map((feature, index) => (
            <div 
              key={index}
              className="bg-neura-dark/50 backdrop-blur-sm border border-neura-purple/20 rounded-xl p-6 hover:border-neura-purple/40 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-neura-purple/20 to-neura-cyan/10 rounded-lg">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-white">{feature.title}</h3>
                  <p className="text-white/70">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div ref={ref} className="mt-16 bg-neura-dark/60 backdrop-blur-lg border border-neura-purple/20 rounded-xl p-8 max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-white">The Neura Ecosystem</h3>
            <p className="text-white/70">A seamless, interconnected Web3 experience</p>
          </div>
          
          <div className={`transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
            <div className="relative py-3 px-4 rounded-lg bg-neura-purple/10 border border-neura-purple/20 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-neura-cyan font-medium">User Sovereignty</span>
                <Badge className="bg-neura-purple text-white">Core Value</Badge>
              </div>
              <p className="text-white/70 text-sm mt-1">Complete control over your digital identity and assets</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="py-3 px-4 rounded-lg bg-neura-purple/10 border border-neura-purple/20">
                <span className="text-neura-cyan font-medium">Create</span>
                <p className="text-white/70 text-sm mt-1">Content, products, experiences</p>
              </div>
              <div className="py-3 px-4 rounded-lg bg-neura-purple/10 border border-neura-purple/20">
                <span className="text-neura-cyan font-medium">Connect</span>
                <p className="text-white/70 text-sm mt-1">Communities, markets, networks</p>
              </div>
              <div className="py-3 px-4 rounded-lg bg-neura-purple/10 border border-neura-purple/20">
                <span className="text-neura-cyan font-medium">Earn</span>
                <p className="text-white/70 text-sm mt-1">Sales, royalties, contributions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
