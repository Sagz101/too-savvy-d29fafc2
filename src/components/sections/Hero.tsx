
import React from 'react';
import { Button } from "@/components/ui/button";
import { WalletButton } from "@/components/ui/wallet-button";
import { ArrowRight, Sparkles, Shield, Users } from 'lucide-react';
import { AnimatedGradient } from "@/components/ui/animated-gradient";
import { AnimatedText } from "@/components/ui/animated-text";
import { useInView } from 'react-intersection-observer';

export const Hero = () => {
  const { ref: buttonRef, inView: buttonInView } = useInView({ threshold: 0.1, triggerOnce: true });
  
  return (
    <section className="relative min-h-screen pt-24 pb-16 flex items-center">
      {/* Background Elements */}
      <AnimatedGradient />

      {/* Content */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            <AnimatedText 
              text="Create. Own. Thrive."
              type="gradient"
              gradientFrom="from-neura-purple"
              gradientTo="to-neura-cyan"
              className="via-neura-light-purple"
              delay={0.3}
              staggerDelay={0.05}
              tag="span"
            />
          </h1>
          <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-2xl mx-auto opacity-0 animate-fadeIn" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            Own everything you create in the decentralized web.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 opacity-0 animate-fadeIn" style={{ animationDelay: '1.3s', animationFillMode: 'forwards' }}>
            <div className="bg-neura-dark/50 backdrop-blur-md border border-neura-purple/30 rounded-xl p-6">
              <div className="bg-gradient-to-br from-neura-purple/20 to-neura-cyan/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                <Shield className="w-6 h-6 text-neura-cyan" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-white">Ownership</h3>
              <p className="text-white/70 text-sm">Take control of your content, data, and digital identity</p>
            </div>
            
            <div className="bg-neura-dark/50 backdrop-blur-md border border-neura-purple/30 rounded-xl p-6">
              <div className="bg-gradient-to-br from-neura-purple/20 to-neura-cyan/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                <Sparkles className="w-6 h-6 text-neura-cyan" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-white">Monetization</h3>
              <p className="text-white/70 text-sm">Flexible Web3 tools to earn from your creations</p>
            </div>
            
            <div className="bg-neura-dark/50 backdrop-blur-md border border-neura-purple/30 rounded-xl p-6">
              <div className="bg-gradient-to-br from-neura-purple/20 to-neura-cyan/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                <Users className="w-6 h-6 text-neura-cyan" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-white">Community</h3>
              <p className="text-white/70 text-sm">Build and engage with your token-powered audience</p>
            </div>
          </div>
          
          <div ref={buttonRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className={`bg-gradient-to-r from-neura-purple to-neura-cyan hover:opacity-90 text-white px-8 py-6 transition-all duration-500 ${buttonInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '1.2s' }}
            >
              Start Creating <ArrowRight size={18} className="ml-2" />
            </Button>
            <WalletButton />
          </div>
        </div>
      </div>
    </section>
  );
};
