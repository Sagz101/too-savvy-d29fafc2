
import React from 'react';
import { ModernButton } from '@/components/ui/modern-button';
import { ModernCard } from '@/components/ui/modern-card';
import { ModernHeading, ModernText } from '@/components/ui/modern-typography';
import { ModernContainer } from '@/components/ui/modern-container';
import { Users, Code, TrendingUp, Sparkles, Wrench, BarChart, ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

export const UserTypes = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const userTypes = [
    {
      id: 'creators',
      icon: Users,
      title: 'For Creators',
      description: 'Explore Too Savvy if you\'re interested in Web3, NFTs, or decentralized monetization. Start with the traditional login to test features before diving into Web3-native tools.',
      features: [
        { icon: Sparkles, text: 'Web3 & NFT monetization' },
        { icon: Sparkles, text: 'Traditional login for testing' },
        { icon: Sparkles, text: 'Decentralized creator tools' }
      ],
      buttonText: 'Start Creating',
      buttonLink: '/video-studio',
      gradient: 'from-cyan-500/20 to-blue-600/20',
      glowColor: 'cyan',
      borderColor: 'border-cyan-500/30',
      iconColor: 'text-cyan-400'
    },
    {
      id: 'developers',
      icon: Code,
      title: 'For Developers',
      description: 'Leverage the platform\'s SDKs and documentation to build custom integrations or contribute to the ecosystem.',
      features: [
        { icon: Wrench, text: 'Platform SDKs & APIs' },
        { icon: Wrench, text: 'Custom integrations' },
        { icon: Wrench, text: 'Ecosystem contributions' }
      ],
      buttonText: 'View Documentation',
      buttonLink: '/video-integration',
      gradient: 'from-purple-500/20 to-pink-600/20',
      glowColor: 'purple',
      borderColor: 'border-purple-500/30',
      iconColor: 'text-purple-400'
    },
    {
      id: 'investors',
      icon: TrendingUp,
      title: 'For Investors',
      description: 'Monitor Too Savvy\'s adoption metrics (e.g., creator growth, NFT minting volume) and $Neurax token performance to assess its potential in the Web3 creator space.',
      features: [
        { icon: BarChart, text: 'Creator growth metrics' },
        { icon: BarChart, text: 'NFT minting volume' },
        { icon: BarChart, text: '$Neurax token performance' }
      ],
      buttonText: 'View Analytics',
      buttonLink: '/finance-hub',
      gradient: 'from-yellow-500/20 to-orange-600/20',
      glowColor: 'yellow',
      borderColor: 'border-yellow-500/30',
      iconColor: 'text-yellow-400'
    }
  ];

  return (
    <section 
      ref={ref}
      className="py-24 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, #0a0a1a 0%, #1a1a3a 25%, #2a1a4a 50%, #1a2a4a 75%, #0a1a3a 100%)`,
      }}
    >
      {/* Animated Background Grid */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 50px,
              rgba(0, 255, 255, 0.1) 50px,
              rgba(0, 255, 255, 0.1) 52px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 50px,
              rgba(255, 0, 255, 0.1) 50px,
              rgba(255, 0, 255, 0.1) 52px
            )
          `,
          animation: 'grid-shift 20s linear infinite'
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full animate-float"
            style={{
              background: `linear-gradient(45deg, ${Math.random() > 0.5 ? '#00ffff' : '#ff00ff'}, transparent)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 6 + 4}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <ModernContainer size="xl" className="relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 backdrop-blur-sm mb-6">
            <Zap className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="text-cyan-400 text-sm font-medium">Choose Your Path</span>
          </div>
          
          <ModernHeading 
            level={2}
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight font-orbitron"
            style={{
              background: 'linear-gradient(45deg, #00ffff, #ff00ff, #00ffff)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'gradient-x 3s ease infinite'
            }}
          >
            Who is T00 Savvy For?
          </ModernHeading>
          
          <ModernText 
            variant="lead" 
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Whether you're creating, building, or investing, T00 Savvy provides the tools and insights 
            you need to succeed in the Web3 creator economy.
          </ModernText>
        </div>

        {/* User Type Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {userTypes.map((userType, index) => (
            <div
              key={userType.id}
              className={`relative group transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Card Glow Effect */}
              <div 
                className={`absolute -inset-1 bg-gradient-to-r ${userType.gradient} rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500`}
              />
              
              {/* Main Card */}
              <ModernCard
                variant="outlined"
                size="lg"
                interactive
                className={`relative h-full bg-black/40 backdrop-blur-sm ${userType.borderColor} hover:border-opacity-60 transition-all duration-300 group-hover:scale-[1.02]`}
                style={{
                  boxShadow: `0 0 0 1px ${userType.glowColor === 'cyan' ? '#00ffff20' : userType.glowColor === 'purple' ? '#ff00ff20' : '#ffff0020'}`,
                }}
              >
                {/* Card Header */}
                <div className="text-center mb-6">
                  <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className={`absolute inset-0 bg-gradient-to-br ${userType.gradient} rounded-full animate-pulse`} />
                    <userType.icon className={`relative w-8 h-8 ${userType.iconColor} z-10`} />
                  </div>
                  
                  <ModernHeading 
                    level={3}
                    className="text-2xl font-bold mb-4 text-white font-orbitron"
                  >
                    {userType.title}
                  </ModernHeading>
                </div>

                {/* Description */}
                <ModernText 
                  className="text-gray-300 mb-6 leading-relaxed text-center"
                >
                  {userType.description}
                </ModernText>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {userType.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className="flex items-center gap-3 text-gray-300 group/feature hover:text-white transition-colors duration-200"
                    >
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r ${userType.gradient} flex items-center justify-center`}>
                        <feature.icon size={12} className="text-white" />
                      </div>
                      <span className="text-sm font-medium">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="mt-auto">
                  <ModernButton
                    variant="primary"
                    size="lg"
                    className={`w-full bg-gradient-to-r ${userType.gradient.replace('/20', '')} hover:shadow-xl hover:shadow-${userType.glowColor}-500/25 transition-all duration-300 group-hover:scale-105`}
                    asChild
                  >
                    <Link to={userType.buttonLink} className="flex items-center justify-center gap-2">
                      <span className="font-semibold">{userType.buttonText}</span>
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </ModernButton>
                </div>
              </ModernCard>
            </div>
          ))}
        </div>

        {/* Bottom Trust Indicator */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-black/30 border border-gray-700/50 backdrop-blur-sm">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />
            <ModernText variant="caption" className="text-gray-400">
              Trusted by
            </ModernText>
            <span 
              className="text-cyan-400 font-bold text-lg font-orbitron"
              style={{
                textShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
                animation: 'neon-glow 2s ease-in-out infinite'
              }}
            >
              10,000+
            </span>
            <ModernText variant="caption" className="text-gray-400">
              Web3 creators worldwide
            </ModernText>
          </div>
        </div>
      </ModernContainer>
    </section>
  );
};
