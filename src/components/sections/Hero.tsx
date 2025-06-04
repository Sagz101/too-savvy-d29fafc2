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
    <section className="relative min-h-screen pt-24 pb-16 flex items-center bg-gradient-to-br from-dzuwa-light-blue via-dzuwa-white to-dzuwa-light-blue">
      {/* Enhanced Background with new color scheme */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ 
            backgroundImage: `url('/lovable-uploads/f6869e67-ae11-47fb-8123-287524ed6e8d.png')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-dzuwa-white/95 via-dzuwa-light-blue/60 to-dzuwa-white/98"></div>
        </div>
        
        {/* Enhanced grid pattern with bright blue */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLCAxNzEsIDIyOCwgMC4xMikiIHN0cm9rZS13aWR0aD0iMS41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-40"></div>
      </div>
      
      {/* Background Elements */}
      <AnimatedGradient className="opacity-25" />
      
      {/* Updated particle effect with new color scheme */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        <div className="particles-container">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-float"
              style={{
                background: `linear-gradient(45deg, ${
                  ['#FFE135', '#00ABE4', '#E9F1FA', '#FF8C00', '#FFFFFF'][i % 5]
                }, ${
                  ['#00ABE4', '#FFE135', '#FFFFFF', '#E9F1FA', '#FF8C00'][i % 5]
                })`,
                width: `${Math.random() * 8 + 3}px`,
                height: `${Math.random() * 8 + 3}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.3 + 0.1,
                animationDuration: `${Math.random() * 15 + 10}s`,
                animationDelay: `${Math.random() * 5}s`,
                boxShadow: `0 0 10px ${['#FFE135', '#00ABE4', '#E9F1FA', '#FF8C00', '#FFFFFF'][i % 5]}`,
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
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 tracking-wider">
              <AnimatedText 
                text="Create. Own. Thrive."
                type="gradient"
                gradientFrom="from-dzuwa-gold"
                gradientTo="to-dzuwa-bright-blue"
                className="via-dzuwa-gold-warm"
                delay={0.3}
                staggerDelay={0.05}
                tag="span"
              />
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-xl leading-relaxed font-medium">
              Claim your voice, your value, your digital future. DzuwaSpace 3.0 empowers you to create without compromise, own your work on-chain, and thrive with your community—no gatekeepers, no middlemen.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="enhanced-card p-6 transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl">
                <div className="bg-gradient-to-br from-dzuwa-gold/30 to-dzuwa-bright-blue/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto border-2 border-dzuwa-gold/40">
                  <Key className="w-6 h-6 text-dzuwa-gold" />
                </div>
                <h3 className="font-bold text-xl mb-2 text-gray-900">Ownership</h3>
                <p className="text-gray-700 text-base font-medium">You control your content, data, and digital identity—forever.</p>
              </div>
              
              <div className="enhanced-card p-6 transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl">
                <div className="bg-gradient-to-br from-dzuwa-gold/30 to-dzuwa-bright-blue/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto border-2 border-dzuwa-gold/40">
                  <DollarSign className="w-6 h-6 text-dzuwa-gold" />
                </div>
                <h3 className="font-bold text-xl mb-2 text-gray-900">Monetization</h3>
                <p className="text-gray-700 text-base font-medium">Flexible, token-native tools to turn creativity into income.</p>
              </div>
              
              <div className="enhanced-card p-6 transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl">
                <div className="bg-gradient-to-br from-dzuwa-bright-blue/30 to-dzuwa-gold/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto border-2 border-dzuwa-bright-blue/40">
                  <Users className="w-6 h-6 text-dzuwa-bright-blue" />
                </div>
                <h3 className="font-bold text-xl mb-2 text-gray-900">Community</h3>
                <p className="text-gray-700 text-base font-medium">Build loyal, token-powered audiences who grow with you.</p>
              </div>
            </div>
            
            <div 
              ref={ctaRef} 
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Button 
                size="lg" 
                className={`bg-gradient-to-r from-dzuwa-gold to-dzuwa-gold-warm hover:from-dzuwa-gold-warm hover:to-solar-convection text-black font-semibold px-8 py-6 transition-all duration-500 transform shadow-lg shadow-dzuwa-gold/25 ${ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: '0.6s' }}
                asChild
              >
                <Link to="/video-studio">
                  <span className="flex items-center">
                    <span className="mr-2">🐝</span>
                    Start Creating <ArrowRight size={18} className="ml-2" />
                  </span>
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                className={`bg-gradient-to-r from-dzuwa-bright-blue to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-8 py-6 transition-all duration-500 transform shadow-lg shadow-dzuwa-bright-blue/25 ${ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: '0.7s' }}
                asChild
              >
                <Link to="/projects-creator">
                  <span className="flex items-center">
                    <Users size={18} className="mr-2" />
                    Launch Projects
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
            className={`relative enhanced-card overflow-hidden shadow-2xl shadow-dzuwa-bright-blue/20 transition-all duration-1000 ${contentInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            style={{ minHeight: '450px' }}
          >
            {/* Dashboard UI Mockup with new colors */}
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-dzuwa-light-blue/90 to-dzuwa-white/80 backdrop-blur-sm border-b-2 border-dzuwa-bright-blue/50 p-3 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-400/80 border border-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-dzuwa-gold/80 border border-dzuwa-gold"></div>
                <div className="w-3 h-3 rounded-full bg-dzuwa-bright-blue/80 border border-dzuwa-bright-blue"></div>
              </div>
              <div className="text-sm text-gray-800 font-medium">DzuwaSpace 3.0 Creator Dashboard</div>
              <div className="w-5"></div>
            </div>
            
            <div className="p-6 pt-16">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium text-gray-800">Creator Dashboard</h3>
                <div className="bg-gradient-to-r from-dzuwa-bright-blue/40 to-dzuwa-gold/30 px-3 py-1 rounded-md text-xs text-white/90 border border-dzuwa-bright-blue/30">Connected</div>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-gradient-to-br from-dzuwa-white/90 to-dzuwa-light-blue/30 border-2 border-dzuwa-bright-blue/40 p-4 rounded-lg shadow-md">
                  <div className="text-xs text-gray-600 mb-1">Content NFTs</div>
                  <div className="text-2xl font-bold text-dzuwa-bright-blue">12</div>
                </div>
                <div className="bg-gradient-to-br from-dzuwa-white/90 to-dzuwa-light-blue/30 border-2 border-dzuwa-bright-blue/40 p-4 rounded-lg shadow-md">
                  <div className="text-xs text-gray-600 mb-1">Subscribers</div>
                  <div className="text-2xl font-bold text-dzuwa-bright-blue">248</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-dzuwa-white/90 to-dzuwa-light-blue/30 border-2 border-dzuwa-bright-blue/40 p-4 rounded-lg mb-6 shadow-md">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-gray-700">Revenue (30d)</div>
                  <div className="text-xs text-dzuwa-bright-blue font-semibold">+24%</div>
                </div>
                <div className="h-16 w-full relative">
                  <div className="absolute bottom-0 left-0 right-0">
                    {/* Simple chart mockup */}
                    <div className="flex items-end h-12 space-x-1">
                      {[40, 25, 35, 30, 45, 38, 50, 55, 45, 60, 58, 65].map((height, i) => (
                        <div 
                          key={i} 
                          className="rounded-sm border border-gray-300/50"
                          style={{ 
                            background: `linear-gradient(to top, ${['#FFE135', '#00ABE4', '#E9F1FA', '#FF8C00', '#FFFFFF'][i % 3]}, ${['#00ABE4', '#FFE135', '#FFFFFF', '#E9F1FA', '#FF8C00'][i % 3]})`,
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
              
              <div className="bg-gradient-to-br from-dzuwa-white/90 to-dzuwa-light-blue/30 border-2 border-dzuwa-bright-blue/40 rounded-lg shadow-md">
                <div className="text-sm text-gray-700 p-3 border-b-2 border-dzuwa-bright-blue/20 bg-gray-50/50">Recent Activity</div>
                <div className="p-1">
                  {["New subscriber joined", "Content NFT sold for $ETH 0.15", "Community message"].map((item, i) => (
                    <div 
                      key={i} 
                      className="flex items-center justify-between p-2 text-sm border-b-1 last:border-0 border-dzuwa-bright-blue/10"
                      style={{ 
                        opacity: contentInView ? 1 : 0,
                        transform: contentInView ? 'translateY(0)' : 'translateY(10px)',
                        transition: `all 0.5s ease ${0.6 + (i * 0.1)}s`
                      }}
                    >
                      <div className="text-gray-700">{item}</div>
                      <div className="text-gray-500 text-xs">Just now</div>
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
