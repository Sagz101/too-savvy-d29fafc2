import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Layers, 
  Globe, 
  BookOpen, 
  FileText, 
  Coins,
  Download,
  ExternalLink,
  Users,
  Zap,
  Target,
  TrendingUp,
  Leaf
} from 'lucide-react';

export const PlatformOverview = () => {
  const modules = [
    {
      name: "Creator Studio",
      description: "Produce, stream, and monetize digital content"
    },
    {
      name: "Podcast & Music Studios", 
      description: "Launch audio projects with NFT integration"
    },
    {
      name: "Storefront Builder",
      description: "Sell physical and digital goods with verifiable authenticity"
    },
    {
      name: "Threaditor",
      description: "Decentralized blogging and professional reporting hub"
    },
    {
      name: "NeuraSocial",
      description: "Web3-native content sharing with cross-platform reach"
    },
    {
      name: "Global Innovators",
      description: "Collaborative, tokenized project creation at scale"
    }
  ];

  const ecosystemStats = [
    { value: "12,847", label: "active monthly creators" },
    { value: "421,071", label: "NFTs minted" },
    { value: "~0.002", label: "average cost per transaction" },
    { value: "3,000+", label: "validator nodes" }
  ];

  const resources = [
    {
      title: "Learning Center",
      description: "Step-by-step guides and video tutorials",
      icon: BookOpen
    },
    {
      title: "Creator Toolkit", 
      description: "Templates, token strategies, pricing models",
      icon: Target
    },
    {
      title: "FAQs & Community Help",
      description: "Peer answers and verified walkthroughs", 
      icon: Users
    },
    {
      title: "Workshops & AMAs",
      description: "Hosted by creators and Web3 experts",
      icon: Zap
    }
  ];

  const tokenUtilities = [
    {
      title: "Utility",
      description: "Pay for minting, access premium tools, unlock token-gated content"
    },
    {
      title: "Governance", 
      description: "Vote on protocol upgrades, ecosystem funding, feature rollouts"
    },
    {
      title: "Incentives",
      description: "Earn through engagement, referrals, reputation, and staking"
    },
    {
      title: "Tokenomics",
      description: "Transparent emission, burn mechanics, and liquidity pools"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neura-purple/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neura-cyan/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neura-purple to-neura-cyan bg-clip-text text-transparent">
              Create. Own. Thrive.
            </span>
          </h2>
          <p className="text-white/70 md:text-lg max-w-3xl mx-auto">
            Comprehensive platform overview - from specialized modules to ecosystem governance
          </p>
        </div>

        <div className="space-y-16">
          {/* Modules Section */}
          <div id="modules-section">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-neura-purple/20 flex items-center justify-center">
                <Layers className="w-5 h-5 text-neura-cyan" />
              </div>
              <h3 className="text-2xl font-bold text-white">Modules</h3>
            </div>
            <p className="text-white/70 mb-8 max-w-4xl">
              Unlock specialized tools for every step of your creative journey. From NFT minting and token-gated content to streaming, e-commerce, and community governance, Diminga Modules are modular, composable, and fully Web3-native.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {modules.map((module, index) => (
                <Card key={index} className="bg-neura-dark/50 border-neura-purple/30 backdrop-blur-md">
                  <CardContent className="p-4">
                    <h4 className="font-medium text-white mb-2">{module.name}</h4>
                    <p className="text-white/70 text-sm">{module.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Ecosystem Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-neura-purple/20 flex items-center justify-center">
                <Globe className="w-5 h-5 text-neura-cyan" />
              </div>
              <h3 className="text-2xl font-bold text-white">Ecosystem</h3>
            </div>
            <p className="text-white/70 mb-8 max-w-4xl">
              Diminga is a self-sustaining creator economy, decentralized across 3,000+ validator nodes, supporting scalable, eco-efficient participation. Engage in projects, launch storefronts, publish content, or govern DAOs—all on a network built for creators.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
              {ecosystemStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-neura-cyan mb-1">{stat.value}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                <Leaf className="w-3 h-3 mr-1" />
                Carbon-neutral
              </Badge>
              <Badge className="bg-neura-purple/20 text-neura-purple border-neura-purple/30">
                Multi-chain compatible
              </Badge>
              <Badge className="bg-neura-cyan/20 text-neura-cyan border-neura-cyan/30">
                Creator-first infrastructure
              </Badge>
            </div>
          </div>

          {/* Resources Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-neura-purple/20 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-neura-cyan" />
              </div>
              <h3 className="text-2xl font-bold text-white">Resources</h3>
            </div>
            <p className="text-white/70 mb-8 max-w-4xl">
              Get the most out of Diminga with curated support for every level of user—from beginner to protocol contributor.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources.map((resource, index) => (
                <Card key={index} className="bg-neura-dark/50 border-neura-purple/30 backdrop-blur-md">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-neura-purple/20 flex items-center justify-center flex-shrink-0">
                      <resource.icon className="w-5 h-5 text-neura-cyan" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">{resource.title}</h4>
                      <p className="text-white/70 text-sm">{resource.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Documentation and Whitepaper */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Documentation */}
            <Card id="documentation-section" className="bg-neura-dark/50 border-neura-purple/30 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-neura-purple/20 flex items-center justify-center">
                    <FileText className="w-4 h-4 text-neura-cyan" />
                  </div>
                  Documentation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-white/70 text-sm">
                  Comprehensive, developer-grade docs for integrating, building, or scaling on Diminga.
                </p>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>• Smart contract reference (ERC-721M, ERC-1155, ERC-2981, DAO modules)</li>
                  <li>• SDKs and API guides for content, wallets, storefronts</li>
                  <li>• IPFS, Chainlink, Livepeer integrations</li>
                  <li>• Governance structures and DAO voting schemas</li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-neura-purple to-neura-cyan text-white">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Access Documentation
                </Button>
              </CardContent>
            </Card>

            {/* Whitepaper */}
            <Card id="whitepaper-section" className="bg-neura-dark/50 border-neura-purple/30 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-neura-purple/20 flex items-center justify-center">
                    <FileText className="w-4 h-4 text-neura-cyan" />
                  </div>
                  Whitepaper
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-white/70 text-sm">
                  The Diminga Whitepaper outlines our foundational thesis: reclaiming creator autonomy through programmable ownership, decentralized infrastructure, and sustainable monetization. It details system architecture, tokenomics, consensus models, and governance mechanics.
                </p>
                <Button className="w-full bg-gradient-to-r from-neura-purple to-neura-cyan text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Download Whitepaper (PDF)
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Token Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-neura-purple/20 flex items-center justify-center">
                <Coins className="w-5 h-5 text-neura-cyan" />
              </div>
              <h3 className="text-2xl font-bold text-white">Token</h3>
            </div>
            <p className="text-white/70 mb-8 max-w-4xl">
              Ethereum is the native utility and governance token of the Diminga network. It powers access, rewards, DAO proposals, and creator incentives.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {tokenUtilities.map((utility, index) => (
                <Card key={index} className="bg-neura-dark/50 border-neura-purple/30 backdrop-blur-md">
                  <CardContent className="p-6">
                    <h4 className="font-medium text-neura-cyan mb-2">{utility.title}</h4>
                    <p className="text-white/70 text-sm">{utility.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Button className="bg-gradient-to-r from-neura-purple to-neura-cyan text-white">
                <TrendingUp className="w-4 h-4 mr-2" />
                View Token Dashboard
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
