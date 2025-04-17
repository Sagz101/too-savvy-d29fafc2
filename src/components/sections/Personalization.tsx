
import React, { useState } from 'react';
import { AnimatedText } from '@/components/ui/animated-text';
import { ModuleCard } from '@/components/ui/module-card';
import { Button } from '@/components/ui/button';
import { Music, Film, BookText, Store, LineChart, Users, ArrowRight, Globe, Image } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const modules = [
  {
    icon: <Music className="w-6 h-6 text-neura-cyan" />,
    name: "Music",
    description: "Upload, tokenize, and monetize your music with fan-supported seeding."
  },
  {
    icon: <Film className="w-6 h-6 text-neura-cyan" />,
    name: "Film & Video",
    description: "Distribute your films with token-gated access while earning from every view."
  },
  {
    icon: <BookText className="w-6 h-6 text-neura-cyan" />,
    name: "Writing & Blogging",
    description: "Create subscription blogs, token-gated books, and community-owned publications."
  },
  {
    icon: <Store className="w-6 h-6 text-neura-cyan" />,
    name: "E-Commerce",
    description: "Sell digital or physical products with crypto payments and token-based loyalty."
  },
  {
    icon: <LineChart className="w-6 h-6 text-neura-cyan" />,
    name: "DeFi & Finance",
    description: "Stake, lend, and earn using assets tied directly to your creative output."
  },
  {
    icon: <Users className="w-6 h-6 text-neura-cyan" />,
    name: "Social Networks",
    description: "Build your network with decentralized social and professional identities."
  },
  {
    icon: <Image className="w-6 h-6 text-neura-cyan" />,
    name: "NFT Gallery",
    description: "Display and trade your digital asset collection in a personalized gallery."
  },
  {
    icon: <Globe className="w-6 h-6 text-neura-cyan" />,
    name: "Web3 Gateway",
    description: "Connect to other decentralized applications through a unified interface."
  }
];

export const Personalization = () => {
  const [selectedModules, setSelectedModules] = useState<number[]>([]);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  
  const toggleModule = (index: number) => {
    setSelectedModules(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };
  
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-neura-purple/10 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute top-1/3 right-0 w-64 h-64 bg-neura-cyan/10 rounded-full filter blur-3xl opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <AnimatedText 
                text="Create Your Personal Portal"
                type="gradient"
                gradientFrom="from-neura-purple"
                gradientTo="to-neura-cyan" 
                tag="span"
              />
            </h2>
            <p className="text-white/70 md:text-lg max-w-2xl mx-auto">
              Choose the modules that will make up your personalized Web3 interface.
              Combine any combination to create a digital environment perfect for you.
            </p>
          </div>
          
          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {modules.map((module, index) => (
              <div 
                key={index} 
                className="opacity-0 animate-slideUp"
                style={{ animationDelay: `${0.1 + index * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <ModuleCard
                  icon={module.icon}
                  title={module.name}
                  description={module.description}
                  selected={selectedModules.includes(index)}
                  onClick={() => toggleModule(index)}
                />
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-neura-purple to-neura-cyan hover:opacity-90 text-white px-8 py-6"
              disabled={selectedModules.length === 0}
            >
              Create Your Portal <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
          
          {selectedModules.length > 0 && (
            <div className="mt-12 text-center">
              <p className="text-neura-cyan font-medium mb-2">
                {selectedModules.length} modules selected
              </p>
              <p className="text-white/70">
                Your custom portal will include: {selectedModules.map(i => modules[i].name).join(', ')}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
