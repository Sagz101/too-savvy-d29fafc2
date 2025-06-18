
import React from 'react';
import { CosmosInspiredHero } from '@/components/ui/cosmos-inspired-hero';
import { LiveEcosystemStats } from '@/components/ui/live-ecosystem-stats';
import { OnboardingGuide } from '@/components/sections/OnboardingGuide';
import { ModernContainer } from '@/components/ui/modern-container';
import { ModernHeading, ModernText } from '@/components/ui/modern-typography';
import { ModernCard } from '@/components/ui/modern-card';
import { ModernButton } from '@/components/ui/modern-button';
import { Users, Shield, Globe, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: "Global Community",
      description: "Join thousands of creators building the future of Web3",
      gradient: "from-[#00FFCC] to-[#0080FF]",
      benefits: ["24/7 Global Support", "Creator Networking", "Collaborative Projects"]
    },
    {
      icon: Shield,
      title: "Secure & Verified", 
      description: "CertiK audited smart contracts ensure your assets are safe",
      gradient: "from-[#00FF80] to-[#00FFCC]",
      benefits: ["Military-Grade Security", "Regular Audits", "Insurance Protection"]
    },
    {
      icon: Globe,
      title: "Multi-Chain Support",
      description: "Deploy across Ethereum, Polygon, BSC, and Avalanche",
      gradient: "from-[#FF00FF] to-[#8000FF]",
      benefits: ["15+ Networks", "Cross-Chain Bridge", "Unified Interface"]
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Deploy your first NFT in under 5 minutes",
      gradient: "from-[#FFFF00] to-[#FF8000]",
      benefits: ["Instant Deployment", "Batch Operations", "Real-time Updates"]
    }
  ];

  const getStartedSteps = [
    {
      step: "01",
      title: "Connect Your Wallet",
      description: "Link your Web3 wallet (MetaMask, WalletConnect, etc.) to get started",
      time: "30 seconds"
    },
    {
      step: "02", 
      title: "Choose Your Creator Path",
      description: "Video Creation, Podcasting, E-commerce, or Social Content",
      time: "2 minutes"
    },
    {
      step: "03",
      title: "Create Your First NFT",
      description: "Turn your content into NFTs with our intuitive creation tools",
      time: "5 minutes"
    },
    {
      step: "04",
      title: "Build Your Community",
      description: "Use token-gating to create exclusive experiences for your audience",
      time: "10 minutes"
    }
  ];

  return (
    <div className="space-y-0">
      <CosmosInspiredHero />
      <LiveEcosystemStats />
      
      {/* Why Choose T00 Savvy Section */}
      <section className="py-20 bg-gradient-to-b from-[#0F0F1A] to-[#1A1A2E] relative">
        <ModernContainer size="xl">
          <div className="text-center mb-16">
            <ModernHeading level={2} className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#00FFCC] via-[#FF00FF] to-[#FFFF00]">
              Why Choose T00 Savvy?
            </ModernHeading>
            <ModernText variant="lead" className="text-xl text-white/80 max-w-3xl mx-auto">
              Built for creators, by creators. Experience the most intuitive Web3 platform.
            </ModernText>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <ModernCard
                key={index}
                variant="elevated"
                className="bg-[#1A1A2E]/60 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] group"
              >
                <div className="p-8">
                  <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon size={32} className="text-white" />
                  </div>
                  
                  <ModernHeading level={4} className="text-2xl font-bold mb-4 text-white">
                    {feature.title}
                  </ModernHeading>
                  
                  <ModernText variant="body" className="text-white/70 mb-6 leading-relaxed">
                    {feature.description}
                  </ModernText>

                  <div className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-white/60">
                        <CheckCircle size={16} className="text-[#00FFCC]" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ModernCard>
            ))}
          </div>
        </ModernContainer>
      </section>

      {/* Get Started Section */}
      <section className="py-20 bg-gradient-to-b from-[#1A1A2E] to-[#0F0F1A]">
        <ModernContainer size="xl">
          <div className="text-center mb-16">
            <ModernHeading level={2} className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#FFFF00] via-[#FF00FF] to-[#00FFCC]">
              Get Started in 4 Simple Steps
            </ModernHeading>
            <ModernText variant="lead" className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              From wallet connection to community building - your Web3 journey starts here
            </ModernText>
            <ModernButton
              variant="primary"
              size="lg"
              className="bg-gradient-to-r from-[#00FFCC] to-[#FF00FF] hover:from-[#00FFCC]/80 hover:to-[#FF00FF]/80 border-0 shadow-2xl hover:shadow-[#00FFCC]/20 transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link to="/create">
                Watch Tutorial Video
                <ArrowRight size={20} />
              </Link>
            </ModernButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {getStartedSteps.map((step, index) => (
              <div key={index} className="relative">
                <ModernCard
                  variant="elevated"
                  className="bg-[#1A1A2E]/60 backdrop-blur-xl border border-white/10 hover:border-[#00FFCC]/40 transition-all duration-300 hover:scale-105 h-full"
                >
                  <div className="p-6 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00FFCC] to-[#FF00FF] flex items-center justify-center text-2xl font-bold text-white mb-6 mx-auto shadow-lg">
                      {step.step}
                    </div>
                    
                    <ModernHeading level={5} className="text-lg font-semibold mb-3 text-white">
                      {step.title}
                    </ModernHeading>
                    
                    <ModernText variant="small" className="text-white/70 mb-4 leading-relaxed">
                      {step.description}
                    </ModernText>
                    
                    <div className="text-xs text-[#FFFF00] font-medium bg-[#FFFF00]/10 px-3 py-1 rounded-full inline-block border border-[#FFFF00]/20">
                      ~{step.time}
                    </div>
                  </div>
                </ModernCard>
                
                {/* Connection Arrow */}
                {index < getStartedSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#00FFCC] to-[#FF00FF] transform -translate-y-1/2 z-10">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-[#FF00FF] rounded-full"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </ModernContainer>
      </section>

      <OnboardingGuide />
    </div>
  );
};
