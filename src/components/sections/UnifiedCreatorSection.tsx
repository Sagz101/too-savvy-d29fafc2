
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  Sparkles, Shield, Users, Zap, Globe, TrendingUp, 
  FileText, BadgeCheck, Key, Code, Wallet, MessageSquare, 
  Settings, Award, Lock, BarChart3, Eye, Coins
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { ModernButton } from '@/components/ui/modern-button';
import { Web3Tooltip } from '@/components/ui/web3-tooltip';
import { Link } from 'react-router-dom';

export const UnifiedCreatorSection: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const creatorPaths = [
    {
      title: "For Creators",
      description: "Explore Too Savvy if you're interested in Web3, NFTs, or decentralized monetization. Start with the traditional login to test features before diving into Web3-native tools.",
      features: [
        "Web3 & NFT monetization",
        "Traditional login for testing", 
        "Decentralized creator tools"
      ],
      buttonText: "Start Creating",
      link: "/creator-studio",
      gradient: "from-cosmic-purple to-cosmic-purple-light",
      icon: <Sparkles className="w-8 h-8" />
    },
    {
      title: "For Developers", 
      description: "Leverage the platform's SDKs and documentation to build custom integrations or contribute to the ecosystem.",
      features: [
        "Platform SDKs & APIs",
        "Custom integrations",
        "Ecosystem contributions"
      ],
      buttonText: "View Documentation",
      link: "/#developer-resources",
      gradient: "from-cosmic-blue to-cosmic-purple",
      icon: <Code className="w-8 h-8" />
    },
    {
      title: "For Investors",
      description: "Monitor Too Savvy's adoption metrics (e.g., creator growth, NFT minting volume) and $Neurax token performance to assess its potential in the Web3 creator space.",
      features: [
        "Creator growth metrics",
        "NFT minting volume", 
        "$Neurax token performance"
      ],
      buttonText: "View Analytics",
      link: "/finance-hub",
      gradient: "from-cosmic-purple-light to-cosmic-pink",
      icon: <BarChart3 className="w-8 h-8" />
    }
  ];

  const ownershipFeatures = [
    {
      icon: <FileText className="w-6 h-6 text-cosmic-purple-light" />,
      title: "MediaNFTs",
      description: "Tokenized, tradable content with gated access",
      tooltip: "Non-Fungible Tokens that represent unique digital content you truly own"
    },
    {
      icon: <BadgeCheck className="w-6 h-6 text-cosmic-purple-light" />,
      title: "Subscription NFTs", 
      description: "Time-based access for episodic or premium content",
      tooltip: "NFTs that grant access to exclusive content for a specific time period"
    },
    {
      icon: <Users className="w-6 h-6 text-cosmic-purple-light" />,
      title: "Decentralized Identity",
      description: "Own your digital presence across platforms",
      tooltip: "Your identity is controlled by you, not by any single platform or company"
    },
    {
      icon: <Key className="w-6 h-6 text-cosmic-purple-light" />,
      title: "Dynamic Licensing",
      description: "Modify or lease content rights with smart contracts",
      tooltip: "Automated contracts that execute licensing terms without intermediaries"
    }
  ];

  const monetizationFeatures = [
    {
      icon: <Wallet className="w-6 h-6 text-cosmic-blue" />,
      title: "Ethereum Payments",
      description: "Power access, rewards, royalties, payments",
      tooltip: "Cryptocurrency payments on the Ethereum blockchain for global, instant transactions"
    },
    {
      icon: <Globe className="w-6 h-6 text-cosmic-blue" />,
      title: "Product & Service Sales",
      description: "Sell digital/physical goods from your portal",
      tooltip: "Integrated e-commerce with crypto and traditional payment options"
    },
    {
      icon: <Code className="w-6 h-6 text-cosmic-blue" />,
      title: "Composable NFTs",
      description: "Bundle multimedia or derivative works",
      tooltip: "NFTs that can be combined or modified to create new unique digital assets"
    }
  ];

  const communityFeatures = [
    {
      icon: <MessageSquare className="w-6 h-6 text-cosmic-purple" />,
      title: "Token-Gated Messaging",
      description: "End-to-end encrypted messaging with exclusive access",
      tooltip: "Only holders of specific tokens can access certain chat rooms or content"
    },
    {
      icon: <Settings className="w-6 h-6 text-cosmic-purple" />,
      title: "DAO Governance",
      description: "Propose, vote, and manage with community tokens",
      tooltip: "Decentralized Autonomous Organization - community-driven decision making"
    },
    {
      icon: <Award className="w-6 h-6 text-cosmic-purple" />,
      title: "Gamified Engagement",
      description: "Badges, loyalty NFTs, missions",
      tooltip: "Earn rewards and recognition through platform engagement and achievements"
    },
    {
      icon: <Lock className="w-6 h-6 text-cosmic-purple" />,
      title: "Privacy & Security",
      description: "Zero-knowledge proofs, MFA, and fingerprinting",
      tooltip: "Advanced cryptographic techniques that verify information without revealing it"
    }
  ];

  const ecosystemStats = [
    {
      value: "12,847",
      label: "Active Monthly Creators",
      change: "+18% this month",
      icon: <Users className="w-6 h-6 text-cosmic-purple-light" />,
      gradient: "from-cosmic-purple/20 to-cosmic-purple-light/20"
    },
    {
      value: "421,071", 
      label: "NFTs Minted",
      change: "+2.4K today",
      icon: <Coins className="w-6 h-6 text-cosmic-blue" />,
      gradient: "from-cosmic-blue/20 to-cosmic-purple/20"
    },
    {
      value: "~$0.002",
      label: "Average Transaction Cost", 
      change: "98% cheaper than ETH",
      icon: <TrendingUp className="w-6 h-6 text-cosmic-purple" />,
      gradient: "from-cosmic-purple/20 to-cosmic-pink/20"
    },
    {
      value: "3,000+",
      label: "Validator Nodes",
      change: "Across networks",
      icon: <Globe className="w-6 h-6 text-cosmic-blue" />,
      gradient: "from-cosmic-blue/20 to-cosmic-purple-light/20"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-cosmic-deep">
      {/* Enhanced cosmic background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] gradient-cosmic-orb rounded-full filter blur-3xl animate-cosmic-float"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-gradient-to-r from-cosmic-blue/30 to-cosmic-purple/30 rounded-full filter blur-3xl animate-cosmic-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-gradient-to-r from-cosmic-purple-light/20 to-cosmic-purple-soft/20 rounded-full filter blur-2xl animate-cosmic-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Cosmic grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,rgba(147,51,234,0.03)_25px,rgba(147,51,234,0.03)_26px,transparent_27px)] bg-[size:25px_25px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-cosmic-deep/90 via-cosmic-deep/95 to-cosmic-deep"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl" ref={ref}>
        {/* Main Hero Section */}
        <div className={`text-center mb-20 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-6xl md:text-7xl font-bold mb-8 font-poppins">
            <span className="bg-gradient-to-r from-white via-cosmic-purple-light to-cosmic-blue bg-clip-text text-transparent animate-cosmic-hero-text">
              Create. Own. Thrive.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-inter">
            Build your creator empire with audited smart contracts and multi-chain tools. 
            Shape your digital future with powerful creation tools designed for Web3.
          </p>
        </div>

        {/* Core Features Grid */}
        <div className={`mb-24 transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-poppins text-white">Core Features</h2>
            <p className="text-lg text-gray-300 font-inter">Built for creators who want ownership, monetization, and community engagement</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Ownership Column */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-cosmic-purple-light border-l-4 border-cosmic-purple pl-6 font-poppins">
                Ownership
              </h3>
              <div className="space-y-6">
                {ownershipFeatures.map((feature, index) => (
                  <Card key={index} className="sequence-card group hover:border-cosmic-purple-light/60">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-cosmic-purple/10 p-3 rounded-xl">
                          {feature.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-2">
                            <Web3Tooltip term={feature.title} definition={feature.tooltip} />
                          </h4>
                          <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Monetization Column */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-cosmic-blue border-l-4 border-cosmic-blue pl-6 font-poppins">
                Monetization
              </h3>
              <div className="space-y-6">
                {monetizationFeatures.map((feature, index) => (
                  <Card key={index} className="sequence-card group hover:border-cosmic-blue/60">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-cosmic-blue/10 p-3 rounded-xl">
                          {feature.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-2">
                            <Web3Tooltip term={feature.title} definition={feature.tooltip} />
                          </h4>
                          <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Community Column */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-cosmic-purple border-l-4 border-cosmic-purple pl-6 font-poppins">
                Community
              </h3>
              <div className="space-y-6">
                {communityFeatures.map((feature, index) => (
                  <Card key={index} className="sequence-card group hover:border-cosmic-purple/60">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-cosmic-purple/10 p-3 rounded-xl">
                          {feature.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-2">
                            <Web3Tooltip term={feature.title} definition={feature.tooltip} />
                          </h4>
                          <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Choose Your Path Section */}
        <div className={`mb-24 transition-all duration-1000 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-poppins text-white">Choose Your Path</h2>
            <p className="text-lg text-gray-300 font-inter max-w-3xl mx-auto">
              Whether you're creating, building, or investing, Too Savvy provides the tools and insights you need to succeed in the Web3 creator economy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {creatorPaths.map((path, index) => (
              <Card key={index} className="sequence-card group hover:scale-105 h-full">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${path.gradient} flex items-center justify-center mb-6 text-white`}>
                    {path.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 font-poppins">{path.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed font-inter flex-grow">{path.description}</p>
                  <div className="mb-6">
                    <ul className="space-y-2">
                      {path.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3 text-gray-300">
                          <div className="w-2 h-2 bg-cosmic-purple-light rounded-full"></div>
                          <span className="text-sm font-inter">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {path.link.startsWith('#') ? (
                    <ModernButton 
                      onClick={() => {
                        const element = document.querySelector(path.link);
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full mt-auto"
                      variant="primary"
                    >
                      {path.buttonText}
                    </ModernButton>
                  ) : (
                    <Link to={path.link} className="mt-auto">
                      <ModernButton className="w-full" variant="primary">
                        {path.buttonText}
                      </ModernButton>
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Live Ecosystem Stats */}
        <div className={`transition-all duration-1000 delay-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-poppins text-white">Live Ecosystem Stats</h2>
            <p className="text-lg text-gray-300 font-inter">Real-time metrics from our thriving creator economy</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ecosystemStats.map((stat, index) => (
              <Card key={index} className={`sequence-stats-card text-center hover:scale-105 bg-gradient-to-br ${stat.gradient} backdrop-blur-sm`}>
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-poppins">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 font-medium mb-2 font-inter">{stat.label}</div>
                  <div className="text-sm text-cosmic-purple-light font-inter">{stat.change}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 font-inter">
            <span className="text-cosmic-purple-light font-semibold">Smart Contract Audited</span> | 
            <span className="text-cosmic-blue font-semibold"> Multi-Chain: ETH, MATIC, BSC, AVAX</span>
          </p>
        </div>
      </div>
    </section>
  );
};
