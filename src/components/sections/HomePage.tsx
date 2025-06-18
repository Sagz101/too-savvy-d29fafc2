
import React from 'react';
import { CosmosInspiredHero } from '@/components/ui/cosmos-inspired-hero';
import { ConsolidatedStats } from '@/components/ui/consolidated-stats';
import { OnboardingGuide } from '@/components/sections/OnboardingGuide';
import { ModernContainer } from '@/components/ui/modern-container';
import { ModernHeading, ModernText } from '@/components/ui/modern-typography';
import { ModernCard } from '@/components/ui/modern-card';
import { Users, Shield, Globe, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: "Global Community",
      description: "Join thousands of creators building the future of Web3",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: Shield,
      title: "Secure & Verified",
      description: "CertiK audited smart contracts ensure your assets are safe",
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: Globe,
      title: "Multi-Chain Support",
      description: "Deploy across Ethereum, Polygon, BSC, and Avalanche",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Deploy your first NFT in under 5 minutes",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <div className="space-y-0">
      <CosmosInspiredHero />
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <ModernContainer size="xl">
          <div className="text-center mb-16">
            <ModernHeading level={2} className="text-4xl font-bold mb-6 text-gray-900">
              Why Choose T00 Savvy?
            </ModernHeading>
            <ModernText variant="lead" className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for creators, by creators. Experience the most intuitive Web3 platform.
            </ModernText>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <ModernCard
                key={index}
                variant="elevated"
                className="bg-white border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 mx-auto shadow-lg`}>
                    <feature.icon size={24} className="text-white" />
                  </div>
                  <ModernHeading level={5} className="text-lg font-semibold mb-3 text-gray-900">
                    {feature.title}
                  </ModernHeading>
                  <ModernText variant="small" className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </ModernText>
                </div>
              </ModernCard>
            ))}
          </div>
        </ModernContainer>
      </section>

      <OnboardingGuide />
      <ConsolidatedStats />
    </div>
  );
};
