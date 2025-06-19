
import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles, Wallet, Play, Video, Headphones, ShoppingBag, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ModernButton } from '@/components/ui/modern-button';
import { ModernHeading, ModernText } from '@/components/ui/modern-typography';
import { ModernContainer } from '@/components/ui/modern-container';
import { WalletConnectButton } from '@/components/ui/wallet-connect-button';
import { OnboardingStepper } from '@/components/ui/onboarding-stepper';
import { useInView } from 'react-intersection-observer';

export const SimplifiedHero: React.FC = () => {
  const { ref: heroRef, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [animationStarted, setAnimationStarted] = useState(false);
  const [particleCount] = useState(25);
  
  useEffect(() => {
    if (inView && !animationStarted) {
      setAnimationStarted(true);
    }
  }, [inView, animationStarted]);

  return (
    <section 
      ref={heroRef}
      className="hero relative min-h-screen pt-16 pb-8 flex items-center justify-center overflow-hidden"
      style={{
        background: `
          linear-gradient(135deg, #0a0a1a 0%, #1a1a3a 25%, #2a1a4a 50%, #1a2a4a 75%, #0a1a3a 100%),
          radial-gradient(circle at 20% 80%, rgba(0, 255, 255, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 0, 255, 0.1) 0%, transparent 50%)
        `,
        backgroundSize: '400% 400%, 100% 100%, 100% 100%',
        animation: 'gradient-shift 15s ease infinite'
      }}
      aria-label="T00 Savvy - Web3 Creator Platform"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 z-1" aria-hidden="true">
        {[...Array(particleCount)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              background: `linear-gradient(45deg, 
                ${Math.random() > 0.5 ? '#00ffff' : '#ff00ff'}, 
                ${Math.random() > 0.5 ? '#ff00ff' : '#00ffff'})`,
              boxShadow: `0 0 10px ${Math.random() > 0.5 ? '#00ffff' : '#ff00ff'}`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 8 + 4}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Hexagonal Grid Pattern */}
      <div 
        className="absolute inset-0 z-2 opacity-20"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 35px,
              rgba(0, 255, 255, 0.1) 35px,
              rgba(0, 255, 255, 0.1) 37px
            ),
            repeating-linear-gradient(
              60deg,
              transparent,
              transparent 35px,
              rgba(255, 0, 255, 0.1) 35px,
              rgba(255, 0, 255, 0.1) 37px
            ),
            repeating-linear-gradient(
              120deg,
              transparent,
              transparent 35px,
              rgba(0, 255, 255, 0.1) 35px,
              rgba(0, 255, 255, 0.1) 37px
            )
          `,
          animation: 'hex-shift 20s linear infinite'
        }}
        aria-hidden="true"
      />

      {/* Rotating Energy Ring */}
      <div 
        className="absolute inset-0 z-3 flex items-center justify-center"
        aria-hidden="true"
      >
        <div 
          className="w-96 h-96 border-2 border-cosmos-cyan/30 rounded-full animate-spin"
          style={{
            animationDuration: '30s',
            background: 'conic-gradient(from 0deg, transparent, rgba(0, 255, 255, 0.2), transparent)'
          }}
        />
      </div>

      <ModernContainer size="lg" className="text-center relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[70vh]">
          
          {/* Main Content */}
          <div className={`lg:w-1/2 space-y-6 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Web3 Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 backdrop-blur-sm">
              <Zap className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span className="text-cyan-400 text-sm font-medium">Web3 Creator Platform</span>
            </div>

            {/* Main Title with Holographic Effect */}
            <ModernHeading 
              level={1}
              className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-wider uppercase leading-tight font-orbitron ${animationStarted ? 'animate-hero-glow' : ''}`}
              as="h1"
              style={{
                background: 'linear-gradient(45deg, #00ffff, #ff00ff, #00ffff, #ffff00)',
                backgroundSize: '400% 400%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 20px rgba(0, 255, 255, 0.5))',
                animation: 'gradient-text 3s ease infinite, neon-glow 2s ease-in-out infinite'
              }}
            >
              T00 SAVVY
            </ModernHeading>
            
            {/* Tagline with Glitch Effect */}
            <ModernHeading 
              level={2}
              className={`text-xl sm:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text ${animationStarted ? 'animate-pulse' : ''}`}
              as="h2"
              style={{
                background: 'linear-gradient(90deg, #ff00ff, #00ffff, #ff00ff)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                animation: 'gradient-x 2s ease infinite',
                textShadow: '0 0 10px rgba(255, 0, 255, 0.5)'
              }}
            >
              Create. Own. Thrive.
            </ModernHeading>

            {/* Description with Typewriter Effect */}
            <ModernText 
              variant="lead"
              className={`text-base sm:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-delayed-1`}
              style={{
                textShadow: '0 1px 3px rgba(0, 0, 0, 0.8)'
              }}
            >
              Shape your digital future with T00 Savvy. Create freely, own your work on the blockchain, 
              and grow your community—without barriers.
            </ModernText>

            {/* Web3 Features Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 animate-fade-in-delayed-2">
              {[
                { icon: Video, label: 'Create', color: '#00ffff' },
                { icon: Wallet, label: 'Own', color: '#ff00ff' },
                { icon: Users, label: 'Thrive', color: '#ffff00' },
                { icon: Sparkles, label: 'Earn', color: '#00ff88' }
              ].map((item, index) => (
                <div 
                  key={item.label}
                  className="bg-black/30 border border-gray-700/50 rounded-lg p-3 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 group cursor-pointer"
                  style={{
                    boxShadow: `0 0 0 1px ${item.color}20`,
                    animation: `cyber-pulse 3s ease-in-out infinite ${index * 0.5}s`
                  }}
                >
                  <item.icon 
                    className="w-6 h-6 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" 
                    style={{ color: item.color }}
                  />
                  <p className="text-white text-sm font-medium">{item.label}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons with Cyber Effects */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-delayed-3">
              
              {/* Primary CTA - Wallet Connect */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <WalletConnectButton />
              </div>
              
              {/* Secondary CTA - Start Creating */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                <ModernButton
                  variant="primary"
                  size="lg"
                  className="relative bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 border-2 border-purple-500/50 hover:border-purple-400 transition-all duration-300 hover:scale-105 shadow-2xl"
                  asChild
                >
                  <Link to="/video-studio">
                    <Sparkles size={18} aria-hidden="true" />
                    <span className="font-semibold">Start Creating</span>
                    <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                </ModernButton>
              </div>

              {/* Tutorial CTA */}
              <ModernButton
                variant="outline"
                size="lg"
                className="border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
                asChild
              >
                <Link to="/onboarding">
                  <Play size={16} aria-hidden="true" />
                  <span>Watch Tutorial</span>
                </Link>
              </ModernButton>
            </div>

            {/* Trust Indicator with Animation */}
            <div className="flex items-center justify-center lg:justify-start gap-3 animate-fade-in-delayed-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                <ModernText variant="caption" className="text-gray-400 text-sm">
                  Trusted by
                </ModernText>
                <span 
                  className="text-cyan-400 font-bold text-lg animate-pulse"
                  style={{
                    textShadow: '0 0 10px rgba(0, 255, 255, 0.5)'
                  }}
                >
                  10,000+
                </span>
                <ModernText variant="caption" className="text-gray-400 text-sm">
                  Web3 creators
                </ModernText>
              </div>
            </div>
          </div>

          {/* Hero Image/Visual Element */}
          <div className={`lg:w-1/2 flex items-center justify-center animate-fade-in-delayed-2`}>
            <div className="relative">
              {/* Holographic Display Frame */}
              <div 
                className="w-80 h-80 rounded-2xl border-2 border-cyan-500/50 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-sm relative overflow-hidden"
                style={{
                  boxShadow: '0 0 50px rgba(0, 255, 255, 0.3), inset 0 0 50px rgba(255, 0, 255, 0.1)'
                }}
              >
                {/* Scanning Lines Effect */}
                <div 
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 255, 0.1) 2px, rgba(0, 255, 255, 0.1) 4px)',
                    animation: 'scan-lines 2s linear infinite'
                  }}
                />
                
                {/* Center Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    {/* Web3 Logo/Icon */}
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center animate-float">
                      <Sparkles className="w-12 h-12 text-white" />
                    </div>
                    
                    {/* Status Text */}
                    <div>
                      <p className="text-cyan-400 text-sm font-mono">SYSTEM STATUS</p>
                      <p className="text-green-400 text-lg font-bold animate-pulse">ONLINE</p>
                    </div>
                    
                    {/* Data Streams */}
                    <div className="space-y-1">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
                          <div className="h-1 bg-gradient-to-r from-cyan-500 to-transparent rounded flex-1" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Orbiting Elements */}
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    animation: `orbit 6s linear infinite ${i * 2}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </ModernContainer>
    </section>
  );
};
