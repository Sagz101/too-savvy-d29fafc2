
import React from 'react';
import { ConsolidatedDeveloperResources } from '@/components/ui/consolidated-developer-resources';
import { CoreFeatures } from '@/components/sections/CoreFeatures';
import { ModernHeading, ModernText } from '@/components/ui/modern-typography';
import { ModernContainer } from '@/components/ui/modern-container';
import { ModernButton } from '@/components/ui/modern-button';
import { ModernCard } from '@/components/ui/modern-card';
import { Code, Github, Zap, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BuildPage: React.FC = () => {
  const quickStartSteps = [
    { step: '1', title: 'Install SDK', description: 'npm install @t00savvy/sdk', time: '30s' },
    { step: '2', title: 'Initialize', description: 'Connect to your preferred chain', time: '1m' },
    { step: '3', title: 'Create NFT', description: 'Deploy ERC-721M contract', time: '2m' },
    { step: '4', title: 'Mint & Deploy', description: 'Go live on mainnet', time: '1.5m' }
  ];

  const developerResources = [
    {
      icon: Code,
      title: "SDK & APIs",
      description: "Comprehensive integration guides and REST APIs for seamless development.",
      gradient: "from-blue-500 to-purple-600",
      buttonText: "View Documentation",
      buttonColor: "border-blue-500 text-blue-600 hover:bg-blue-50"
    },
    {
      icon: Zap,
      title: "Quick Start",
      description: "Deploy your first NFT contract in under 5 minutes with our guided setup.",
      gradient: "from-purple-500 to-pink-600",
      buttonText: "Start Building",
      buttonColor: "border-purple-500 text-purple-600 hover:bg-purple-50"
    },
    {
      icon: Github,
      title: "Open Source",
      description: "Explore our smart contracts, contribute to the ecosystem, and build together.",
      gradient: "from-green-500 to-teal-600",
      buttonText: "View GitHub",
      buttonColor: "border-green-500 text-green-600 hover:bg-green-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-16">
      <section className="py-20">
        <ModernContainer size="xl">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <ModernHeading level={1} className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent">
              Build & Integrate
            </ModernHeading>
            <ModernText variant="lead" className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Access comprehensive developer tools, APIs, and smart contracts to build the next generation 
              of Web3 applications on our platform.
            </ModernText>
            
            <ModernButton
              variant="primary"
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
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
          <div className="mb-20">
            <div className="text-center mb-12">
              <ModernHeading level={2} className="text-3xl font-bold mb-4 text-gray-900">
                5-Minute NFT Deploy Guide
              </ModernHeading>
              <ModernText variant="body" className="text-gray-600 max-w-2xl mx-auto">
                Get started quickly with our streamlined deployment process
              </ModernText>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {quickStartSteps.map((step, index) => (
                <div key={index} className="relative">
                  <ModernCard 
                    variant="elevated"
                    className="bg-white border border-gray-200 hover:border-purple-200 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="text-center p-8">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-2xl font-bold text-white mb-6 mx-auto shadow-lg">
                        {step.step}
                      </div>
                      <ModernHeading level={5} className="text-lg font-semibold mb-3 text-gray-900">
                        {step.title}
                      </ModernHeading>
                      <ModernText variant="small" className="text-gray-600 mb-3 leading-relaxed">
                        {step.description}
                      </ModernText>
                      <div className="text-xs text-purple-600 font-medium bg-purple-50 px-3 py-1 rounded-full inline-block">
                        ~{step.time}
                      </div>
                    </div>
                  </ModernCard>
                  
                  {/* Connection Line */}
                  {index < quickStartSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-300 to-pink-300 transform -translate-y-1/2 z-10"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Developer Resource Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {developerResources.map((resource, index) => (
              <ModernCard 
                key={index}
                variant="elevated"
                className="bg-white border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="p-8 text-center">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${resource.gradient} flex items-center justify-center mb-6 mx-auto shadow-lg`}>
                    <resource.icon size={28} className="text-white" />
                  </div>
                  <ModernHeading level={4} className="text-xl font-semibold mb-4 text-gray-900">
                    {resource.title}
                  </ModernHeading>
                  <ModernText variant="body" className="text-gray-600 mb-6 leading-relaxed">
                    {resource.description}
                  </ModernText>
                  <ModernButton 
                    variant="outline" 
                    size="sm" 
                    className={`${resource.buttonColor} transition-all duration-200`}
                  >
                    {resource.buttonText}
                    <ArrowRight size={16} />
                  </ModernButton>
                </div>
              </ModernCard>
            ))}
          </div>
        </ModernContainer>
      </section>
      
      <ConsolidatedDeveloperResources />
      <CoreFeatures />
    </div>
  );
};
