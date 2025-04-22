
import React from 'react';
import { Shield, BookOpen, Coins, Share2, Database, Globe, Mail, Code, Lock, Fingerprint, Key, FileDigit } from 'lucide-react';

const features = [
  {
    icon: <BookOpen className="h-6 w-6 text-neura-cyan" />,
    title: "MediaNFTs",
    description: "Tokenized ownership of digital content; access-gated and tradable."
  },
  {
    icon: <Shield className="h-6 w-6 text-neura-cyan" />,
    title: "Encrypted File Sharing",
    description: "All content is encrypted; only verified MediaNFT holders can decrypt."
  },
  {
    icon: <Share2 className="h-6 w-6 text-neura-cyan" />,
    title: "Token-Incentivized Seeding",
    description: "Community members are rewarded for maintaining content availability."
  },
  {
    icon: <Globe className="h-6 w-6 text-neura-cyan" />,
    title: "Product & Service Sales",
    description: "Users can sell digital or physical goods directly from their portal."
  },
  {
    icon: <Coins className="h-6 w-6 text-neura-cyan" />,
    title: "DeFi Integration",
    description: "Users can stake, lend, or earn from assets tied to their creative output."
  },
  {
    icon: <Database className="h-6 w-6 text-neura-cyan" />,
    title: "$Neurax Token",
    description: "Utility token for access, seeding incentives, royalties, and marketplace payments."
  },
  {
    icon: <Mail className="h-6 w-6 text-neura-cyan" />,
    title: "Neurapathy",
    description: "Secure, decentralized communication system with end-to-end encryption and token-gated access."
  },
  {
    icon: <Code className="h-6 w-6 text-neura-cyan" />,
    title: "Project Dapps",
    description: "Build and deploy decentralized applications directly from your personalized portal."
  },
  {
    icon: <Lock className="h-6 w-6 text-neura-cyan" />,
    title: "Dynamic Licensing",
    description: "NFT owners can define, modify, or lease content rights dynamically via ERC-1155."
  },
  {
    icon: <Coins className="h-6 w-6 text-neura-cyan" />,
    title: "Royalty Enforcement",
    description: "On-chain solutions to ensure creator royalties on secondary sales across marketplaces."
  },
  {
    icon: <FileDigit className="h-6 w-6 text-neura-cyan" />,
    title: "Subscription NFTs",
    description: "Time-bound access to content or services, ideal for serialized or episodic media."
  },
  {
    icon: <Key className="h-6 w-6 text-neura-cyan" />,
    title: "Composable NFTs",
    description: "Nest or bundle NFTs (ERC-998) to package multimedia content or derivative works."
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neura-purple to-neura-cyan bg-clip-text text-transparent">
              Key Features
            </span>
          </h2>
          <p className="text-white/70 md:text-lg max-w-2xl mx-auto">
            Neura provides a comprehensive suite of tools for creators and consumers in the Web3 space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-neura-dark/50 backdrop-blur-sm border border-neura-purple/20 rounded-xl p-6 hover:border-neura-purple/40 transition-all duration-300 hover:shadow-lg hover:shadow-neura-purple/10"
            >
              <div className="bg-neura-dark/80 p-3 rounded-lg inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
