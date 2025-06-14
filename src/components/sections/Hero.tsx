
import React from 'react';
import { Button } from "@/components/ui/button";
import { WalletButton } from "@/components/ui/wallet-button";
import { ArrowRight, Key, DollarSign, Users, Sparkles, Shield, Globe } from 'lucide-react';
import { AnimatedGradient } from "@/components/ui/animated-gradient";
import { AnimatedText } from "@/components/ui/animated-text";
import { EnhancedIcon } from "@/components/ui/enhanced-icon";
import { ProgressIndicator } from "@/components/ui/progress-indicator";
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

export const Hero = () => {
  const { ref: contentRef, inView: contentInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: ctaRef, inView: ctaInView } = useInView({ threshold: 0.1, triggerOnce: true });
  
  const journeySteps = ["Connect", "Create", "Monetize", "Thrive"];
  
  return (
    <section className="relative min-h-screen pt-24 pb-16 flex items-center bg-black">
      {/* Enhanced Background with dark theme */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ 
            backgroundImage: `url('/lovable-uploads/f6869e67-ae11-47fb-8123-287524ed6e8d.png')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-gray-900/80 to-black/99"></div>
        </div>
        
        {/* Enhanced grid pattern with dark theme */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+PC9zdmc+')] opacity-30"></div>
      </div>
      
      {/* Background Elements */}
      <AnimatedGradient className="opacity-15" />
      
      {/* Updated particle effect with white/gray particles */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        <div className="particles-container">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-float"
              style={{
                background: `linear-gradient(45deg, ${
                  ['#FFFFFF', '#F3F4F6', '#E5E7EB', '#D1D5DB', '#9CA3AF'][i % 5]
                }, ${
                  ['#F3F4F6', '#FFFFFF', '#E5E7EB', '#D1D5DB', '#9CA3AF'][i % 5]
                })`,
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.3 + 0.1,
                animationDuration: `${Math.random() * 20 + 15}s`,
                animationDelay: `${Math.random() * 5}s`,
                boxShadow: `0 0 8px ${['#FFFFFF', '#F3F4F6', '#E5E7EB', '#D1D5DB', '#9CA3AF'][i % 5]}`,
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
            {/* Logo Section */}
            <div className="mb-8 flex justify-center lg:justify-start">
              <div className="flex items-center space-x-4 p-6 bg-gray-900/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg">
                <img 
                  src="/lovable-uploads/634f305e-cf77-4d27-98b3-a69661d66e96.png" 
                  alt="T00 Savvy Logo" 
                  className="h-16 w-auto"
                />
                <img 
                  src="/lovable-uploads/7ac7f3fc-82bf-4080-8568-3607ab1d56bc.png" 
                  alt="T00 Savvy" 
                  className="h-20 w-auto"
                />
              </div>
            </div>

            <div className="mb-6">
              <ProgressIndicator 
                steps={journeySteps} 
                currentStep={0} 
                variant="mini" 
                className="justify-center lg:justify-start"
              />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 tracking-wider text-white">
              <AnimatedText 
                text="Create. Own. Thrive."
                type="gradient"
                gradientFrom="from-white"
                gradientTo="to-gray-300"
                className="via-gray-100"
                delay={0.3}
                staggerDelay={0.05}
                tag="span"
              />
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-xl leading-relaxed font-medium">
              Claim your voice, your value, your digital future. Too Savvy empowers you to create without compromise, own your work on-chain, and thrive with your community—no gatekeepers, no middlemen.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-900/80 backdrop-blur-sm border border-white/20 rounded-xl p-6 transform transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl shadow-lg">
                <div className="flex justify-center mb-4">
                  <EnhancedIcon icon={Key} variant="primary" size="md" animated />
                </div>
                <h3 className="font-bold text-xl mb-2 text-white text-center">Ownership</h3>
                <p className="text-gray-300 text-base font-medium text-center">You control your content, data, and digital identity—forever.</p>
              </div>
              
              <div className="bg-gray-900/80 backdrop-blur-sm border border-white/20 rounded-xl p-6 transform transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl shadow-lg">
                <div className="flex justify-center mb-4">
                  <EnhancedIcon icon={DollarSign} variant="warning" size="md" animated />
                </div>
                <h3 className="font-bold text-xl mb-2 text-white text-center">Monetization</h3>
                <p className="text-gray-300 text-base font-medium text-center">Flexible, token-native tools to turn creativity into income.</p>
              </div>
              
              <div className="bg-gray-900/80 backdrop-blur-sm border border-white/20 rounded-xl p-6 transform transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl shadow-lg">
                <div className="flex justify-center mb-4">
                  <EnhancedIcon icon={Users} variant="secondary" size="md" animated />
                </div>
                <h3 className="font-bold text-xl mb-2 text-white text-center">Community</h3>
                <p className="text-gray-300 text-base font-medium text-center">Build loyal, token-powered audiences who grow with you.</p>
              </div>
            </div>
            
            <div 
              ref={ctaRef} 
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Button 
                size="lg" 
                className={`bg-gradient-to-r from-white to-gray-200 hover:from-gray-200 hover:to-gray-300 text-black font-semibold px-8 py-6 transition-all duration-500 transform shadow-lg shadow-white/20 border border-white/30 ${ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: '0.6s' }}
                asChild
              >
                <Link to="/video-studio">
                  <span className="flex items-center">
                    <Sparkles size={18} className="mr-2" />
                    Start Creating <ArrowRight size={18} className="ml-2" />
                  </span>
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                className={`bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white font-semibold px-8 py-6 transition-all duration-500 transform shadow-lg shadow-gray-500/20 border border-gray-500/30 ${ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: '0.7s' }}
                asChild
              >
                <Link to="/projects-creator">
                  <span className="flex items-center">
                    <Globe size={18} className="mr-2" />
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
            className={`relative bg-gray-900/80 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden shadow-2xl shadow-white/10 transition-all duration-1000 ${contentInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            style={{ minHeight: '450px' }}
          >
            {/* Dashboard UI Mockup with dark theme */}
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-gray-800/90 to-gray-700/90 backdrop-blur-sm border-b border-white/20 p-3 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500 border border-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 border border-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 border border-green-400"></div>
              </div>
              <div className="text-sm text-white font-medium">T00 Savvy Creator Dashboard</div>
              <div className="w-5"></div>
            </div>
            
            <div className="p-6 pt-16">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium text-white">Creator Dashboard</h3>
                <div className="bg-gradient-to-r from-green-600/30 to-green-500/25 px-3 py-1 rounded-md text-xs text-green-300 border border-green-500/20">Connected</div>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-gray-800/80 backdrop-blur-sm border border-white/10 rounded-lg p-4 shadow-md">
                  <div className="text-xs text-gray-400 mb-1">Content NFTs</div>
                  <div className="text-2xl font-bold text-white">12</div>
                </div>
                <div className="bg-gray-800/80 backdrop-blur-sm border border-white/10 rounded-lg p-4 shadow-md">
                  <div className="text-xs text-gray-400 mb-1">Subscribers</div>
                  <div className="text-2xl font-bold text-white">248</div>
                </div>
              </div>
              
              <div className="bg-gray-800/80 backdrop-blur-sm border border-white/10 rounded-lg p-4 mb-6 shadow-md">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-gray-300">Revenue (30d)</div>
                  <div className="text-xs text-green-400 font-semibold">+24%</div>
                </div>
                <div className="h-16 w-full relative">
                  <div className="absolute bottom-0 left-0 right-0">
                    {/* Simple chart mockup with dark theme */}
                    <div className="flex items-end h-12 space-x-1">
                      {[40, 25, 35, 30, 45, 38, 50, 55, 45, 60, 58, 65].map((height, i) => (
                        <div 
                          key={i} 
                          className="rounded-sm border border-white/10"
                          style={{ 
                            background: `linear-gradient(to top, ${['#6B7280', '#9CA3AF', '#D1D5DB'][i % 3]}, ${['#9CA3AF', '#6B7280', '#D1D5DB'][i % 3]})`,
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
              
              <div className="bg-gray-800/80 backdrop-blur-sm border border-white/10 rounded-lg shadow-md">
                <div className="text-sm text-gray-300 p-3 border-b border-white/10 bg-gray-700/20">Recent Activity</div>
                <div className="p-1">
                  {["New subscriber joined", "Content NFT sold for $ETH 0.15", "Community message"].map((item, i) => (
                    <div 
                      key={i} 
                      className="flex items-center justify-between p-2 text-sm border-b last:border-0 border-white/10"
                      style={{ 
                        opacity: contentInView ? 1 : 0,
                        transform: contentInView ? 'translateY(0)' : 'translateY(10px)',
                        transition: `all 0.5s ease ${0.6 + (i * 0.1)}s`
                      }}
                    >
                      <div className="text-gray-300">{item}</div>
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
