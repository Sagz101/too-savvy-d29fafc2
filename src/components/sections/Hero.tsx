
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
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
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            <AnimatedText 
              text="Your Personalized Web3.0 Universe"
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
            A decentralized platform where your content, commerce, community, and crypto intersect in one sovereign, encrypted, and tokenized space.
          </p>
          <div ref={buttonRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className={`bg-gradient-to-r from-neura-purple to-neura-cyan hover:opacity-90 text-white px-8 py-6 transition-all duration-500 ${buttonInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '1.2s' }}
            >
              Launch Portal <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className={`border-neura-purple/50 text-white hover:bg-neura-purple/10 px-8 py-6 transition-all duration-500 ${buttonInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '1.4s' }}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
