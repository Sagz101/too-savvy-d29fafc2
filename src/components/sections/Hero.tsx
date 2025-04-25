
import React from 'react';
import { Button } from "@/components/ui/button";
import { WalletButton } from "@/components/ui/wallet-button";
import { ArrowRight, Lock, BookOpen } from 'lucide-react';
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
              text="Own Everything You Create"
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
            Monetize content. Connect with community. Control your data.
          </p>
          <div ref={buttonRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className={`bg-gradient-to-r from-neura-purple to-neura-cyan hover:opacity-90 text-white px-8 py-6 transition-all duration-500 ${buttonInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '1.2s' }}
            >
              🚀 Launch Your Portal <ArrowRight size={18} className="ml-2" />
            </Button>
            <WalletButton />
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <Button 
              variant="ghost"
              size="sm"
              className={`text-white/70 hover:text-white hover:bg-neura-purple/10 transition-all duration-500 ${buttonInView ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: '1.6s' }}
            >
              <BookOpen size={16} className="mr-2" /> Learn About Web3 Security
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
