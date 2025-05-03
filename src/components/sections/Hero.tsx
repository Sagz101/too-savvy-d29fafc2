
import React from 'react';
import { Button } from "@/components/ui/button";
import { WalletButton } from "@/components/ui/wallet-button";
import { ArrowRight, Key, DollarSign, Users } from 'lucide-react';
import { AnimatedGradient } from "@/components/ui/animated-gradient";
import { AnimatedText } from "@/components/ui/animated-text";
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

export const Hero = () => {
  const { ref: contentRef, inView: contentInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: ctaRef, inView: ctaInView } = useInView({ threshold: 0.1, triggerOnce: true });
  
  return (
    <section className="relative min-h-screen pt-24 pb-16 flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
          style={{ 
            backgroundImage: `url('/lovable-uploads/d9dfd054-6da9-4dd1-8c30-08d17a2d3038.png')`
          }}
        >
          <div className="absolute inset-0 bg-neura-dark/70 backdrop-blur-sm"></div>
        </div>
      </div>
      
      {/* Background Elements */}
      <AnimatedGradient className="opacity-50" />
      
      {/* Particle Effect */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        <div className="particles-container">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-neura-purple/30 animate-float"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.2,
                animationDuration: `${Math.random() * 15 + 10}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div 
            ref={contentRef}
            className={`transition-all duration-1000 ${contentInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 tracking-wider">
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
            
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-xl leading-relaxed">
              Claim your voice, your value, your digital future. Neura empowers you to create without compromise, own your work on-chain, and thrive with your community—no gatekeepers, no middlemen.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-neura-dark/50 backdrop-blur-md border border-neura-purple/30 rounded-xl p-6 transform transition-all duration-300 hover:translate-y-[-5px] hover:border-neura-purple/60">
                <div className="bg-gradient-to-br from-neura-purple/20 to-neura-cyan/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                  <Key className="w-6 h-6 text-neura-cyan" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-white">Ownership</h3>
                <p className="text-white/70 text-sm">You control your content, data, and digital identity—forever.</p>
              </div>
              
              <div className="bg-neura-dark/50 backdrop-blur-md border border-neura-purple/30 rounded-xl p-6 transform transition-all duration-300 hover:translate-y-[-5px] hover:border-neura-purple/60">
                <div className="bg-gradient-to-br from-neura-purple/20 to-neura-cyan/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                  <DollarSign className="w-6 h-6 text-neura-cyan" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-white">Monetization</h3>
                <p className="text-white/70 text-sm">Flexible, token-native tools to turn creativity into income.</p>
              </div>
              
              <div className="bg-neura-dark/50 backdrop-blur-md border border-neura-purple/30 rounded-xl p-6 transform transition-all duration-300 hover:translate-y-[-5px] hover:border-neura-purple/60">
                <div className="bg-gradient-to-br from-neura-purple/20 to-neura-cyan/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                  <Users className="w-6 h-6 text-neura-cyan" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-white">Community</h3>
                <p className="text-white/70 text-sm">Build loyal, token-powered audiences who grow with you.</p>
              </div>
            </div>
            
            <div 
              ref={ctaRef} 
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Button 
                size="lg" 
                className={`bg-gradient-to-r from-neura-purple to-neura-cyan hover:opacity-90 text-white px-8 py-6 transition-all duration-500 transform ${ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: '0.6s' }}
                asChild
              >
                <Link to="/video-studio">
                  <span className="flex items-center">
                    <span className="mr-2">🟢</span>
                    Start Creating <ArrowRight size={18} className="ml-2" />
                  </span>
                </Link>
              </Button>
              
              <div 
                className={`transition-all duration-300 transform ${ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: '0.8s' }}
              >
                <WalletButton />
              </div>
            </div>
          </div>
          
          {/* Right Column: Interactive Dashboard Preview */}
          <div 
            className={`relative bg-neura-dark/40 backdrop-blur-xl border border-neura-purple/20 rounded-xl overflow-hidden shadow-2xl transition-all duration-1000 ${contentInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            style={{ minHeight: '450px' }}
          >
            {/* Dashboard UI Mockup */}
            <div className="absolute top-0 left-0 right-0 bg-neura-dark/60 backdrop-blur-sm border-b border-neura-purple/20 p-3 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
              </div>
              <div className="text-xs text-white/60">Neura Creator Dashboard</div>
              <div className="w-5"></div>
            </div>
            
            <div className="p-6 pt-16">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium text-white">Creator Dashboard</h3>
                <div className="bg-neura-purple/30 px-3 py-1 rounded-md text-xs text-white/90">Connected</div>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-neura-dark/50 border border-neura-purple/20 p-4 rounded-lg">
                  <div className="text-xs text-white/50 mb-1">Content NFTs</div>
                  <div className="text-2xl font-bold text-white">12</div>
                </div>
                <div className="bg-neura-dark/50 border border-neura-purple/20 p-4 rounded-lg">
                  <div className="text-xs text-white/50 mb-1">Subscribers</div>
                  <div className="text-2xl font-bold text-white">248</div>
                </div>
              </div>
              
              <div className="bg-neura-dark/50 border border-neura-purple/20 p-4 rounded-lg mb-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-white/80">Revenue (30d)</div>
                  <div className="text-xs text-green-400">+24%</div>
                </div>
                <div className="h-16 w-full relative">
                  <div className="absolute bottom-0 left-0 right-0">
                    {/* Simple chart mockup */}
                    <div className="flex items-end h-12 space-x-1">
                      {[40, 25, 35, 30, 45, 38, 50, 55, 45, 60, 58, 65].map((height, i) => (
                        <div 
                          key={i} 
                          className="bg-gradient-to-t from-neura-purple/80 to-neura-cyan/70 rounded-sm"
                          style={{ 
                            height: `${height}%`, 
                            width: '100%',
                            opacity: contentInView ? 1 : 0,
                            transition: `opacity 0.5s ease ${0.3 + (i * 0.05)}s`
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-neura-dark/50 border border-neura-purple/20 rounded-lg">
                <div className="text-sm text-white/80 p-3 border-b border-neura-purple/20">Recent Activity</div>
                <div className="p-1">
                  {["New subscriber joined", "Content NFT sold for $ETH 0.15", "Community message"].map((item, i) => (
                    <div 
                      key={i} 
                      className="flex items-center justify-between p-2 text-sm border-b last:border-0 border-neura-purple/10"
                      style={{ 
                        opacity: contentInView ? 1 : 0,
                        transform: contentInView ? 'translateY(0)' : 'translateY(10px)',
                        transition: `all 0.5s ease ${0.6 + (i * 0.1)}s`
                      }}
                    >
                      <div className="text-white/70">{item}</div>
                      <div className="text-white/40 text-xs">Just now</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
