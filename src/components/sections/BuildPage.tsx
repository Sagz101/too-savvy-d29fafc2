
import React from 'react';
import { ConsolidatedDeveloperResources } from '@/components/ui/consolidated-developer-resources';
import { CoreFeatures } from '@/components/sections/CoreFeatures';
import { ModernHeading, ModernText } from '@/components/ui/modern-typography';
import { ModernContainer } from '@/components/ui/modern-container';
import { ModernButton } from '@/components/ui/modern-button';
import { ModernCard } from '@/components/ui/modern-card';
import { Code, Github, Zap, FileText, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BuildPage: React.FC = () => {
  const quickStartSteps = [
    { step: '1', title: 'Install SDK', description: 'npm install @t00savvy/sdk', time: '30s' },
    { step: '2', title: 'Initialize', description: 'Connect to your preferred chain', time: '1m' },
    { step: '3', title: 'Create NFT', description: 'Deploy ERC-721M contract', time: '2m' },
    { step: '4', title: 'Mint & Deploy', description: 'Go live on mainnet', time: '1.5m' }
  ];

  return (
    <div className="space-y-0 pt-16">
      <section className="py-16 bg-gradient-to-br from-[#0F0F1A] via-[#1A1A2E] to-[#0F0F1A] relative overflow-hidden">
        {/* Network Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="build-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#00FFCC" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#build-grid)" />
          </svg>
        </div>

        <ModernContainer size="xl">
          <div className="text-center mb-12">
            <ModernHeading level={1} className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#00FFCC] via-[#FF00FF] to-[#00FFCC]">
              Build & Integrate
            </ModernHeading>
            <ModernText variant="lead" className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Access comprehensive developer tools, APIs, and smart contracts to build the next generation 
              of Web3 applications on our platform.
            </ModernText>
            
            {/* Hero CTA - Cosmos Style */}
            <ModernButton
              variant="primary"
              size="lg"
              className="bg-gradient-to-r from-[#00FFCC] to-[#FF00FF] hover:from-[#00FFCC]/80 hover:to-[#FF00FF]/80 border-2 border-[#00FFCC] shadow-2xl shadow-[#00FFCC]/20 hover:shadow-[#FF00FF]/30 transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link to="/video-integration">
                <Code size={20} />
                Explore Developer Tools
                <ExternalLink size={16} />
              </Link>
            </ModernButton>
          </div>

          {/* Quick Start Guide */}
          <div className="mb-16">
            <ModernHeading level={2} className="text-2xl font-bold mb-8 text-center text-[#00FFCC]">
              5-Minute NFT Deploy Guide
            </ModernHeading>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {quickStartSteps.map((step, index) => (
                <ModernCard 
                  key={index}
                  variant="elevated"
                  className="relative bg-[#1A1A2E]/60 backdrop-blur-xl border border-[#00FFCC]/20 hover:border-[#FF00FF]/40 transition-all duration-300"
                >
                  <div className="text-center p-6">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto"
                      style={{
                        background: `linear-gradient(135deg, #00FFCC, #FF00FF)`,
                        color: 'white'
                      }}
                    >
                      {step.step}
                    </div>
                    <ModernHeading level={5} className="text-lg font-semibold mb-2 text-white">
                      {step.title}
                    </ModernHeading>
                    <ModernText variant="small" className="text-white/70 mb-2">
                      {step.description}
                    </ModernText>
                    <div className="text-xs text-[#FFFF00] font-medium">
                      ~{step.time}
                    </div>
                  </div>
                  
                  {/* Connection Line */}
                  {index < quickStartSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-[#00FFCC] to-[#FF00FF] transform -translate-y-1/2 z-10"></div>
                  )}
                </ModernCard>
              ))}
            </div>
          </div>

          {/* Developer Resource Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <ModernCard 
              variant="elevated"
              className="bg-[#1A1A2E]/60 backdrop-blur-xl border border-[#00FFCC]/20 hover:border-[#FF00FF]/40 transition-all duration-300 hover:scale-105"
            >
              <div className="p-6 text-center">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-[#00FFCC] to-[#FF00FF] flex items-center justify-center mb-4 mx-auto">
                  <Code size={24} className="text-white" />
                </div>
                <ModernHeading level={4} className="text-xl font-semibold mb-3 text-white">
                  SDK & APIs
                </ModernHeading>
                <ModernText variant="body" className="text-white/70 mb-4">
                  Comprehensive integration guides and REST APIs for seamless development.
                </ModernText>
                <ModernButton variant="outline" size="sm" className="border-[#00FFCC] text-[#00FFCC] hover:bg-[#00FFCC]/10">
                  View Documentation
                </ModernButton>
              </div>
            </ModernCard>

            <ModernCard 
              variant="elevated"
              className="bg-[#1A1A2E]/60 backdrop-blur-xl border border-[#00FFCC]/20 hover:border-[#FFFF00]/40 transition-all duration-300 hover:scale-105"
            >
              <div className="p-6 text-center">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-[#FFFF00] to-[#FF00FF] flex items-center justify-center mb-4 mx-auto">
                  <Zap size={24} className="text-white" />
                </div>
                <ModernHeading level={4} className="text-xl font-semibold mb-3 text-white">
                  Quick Start
                </ModernHeading>
                <ModernText variant="body" className="text-white/70 mb-4">
                  Deploy your first NFT contract in under 5 minutes with our guided setup.
                </ModernText>
                <ModernButton variant="outline" size="sm" className="border-[#FFFF00] text-[#FFFF00] hover:bg-[#FFFF00]/10">
                  Start Building
                </ModernButton>
              </div>
            </ModernCard>

            <ModernCard 
              variant="elevated"
              className="bg-[#1A1A2E]/60 backdrop-blur-xl border border-[#00FFCC]/20 hover:border-[#FF00FF]/40 transition-all duration-300 hover:scale-105"
            >
              <div className="p-6 text-center">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-[#FF00FF] to-[#00FFCC] flex items-center justify-center mb-4 mx-auto">
                  <Github size={24} className="text-white" />
                </div>
                <ModernHeading level={4} className="text-xl font-semibold mb-3 text-white">
                  Open Source
                </ModernHeading>
                <ModernText variant="body" className="text-white/70 mb-4">
                  Explore our smart contracts, contribute to the ecosystem, and build together.
                </ModernText>
                <ModernButton variant="outline" size="sm" className="border-[#FF00FF] text-[#FF00FF] hover:bg-[#FF00FF]/10">
                  View GitHub
                </ModernButton>
              </div>
            </ModernCard>
          </div>
        </ModernContainer>
      </section>
      
      <ConsolidatedDeveloperResources />
      <CoreFeatures />
    </div>
  );
};
