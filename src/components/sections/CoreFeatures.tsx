
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, FileDigit, Key, Code, Coins, Globe, 
  Share2, Mail, Settings, Award, Heart
} from 'lucide-react';

export const CoreFeatures = () => {
  return (
    <section id="core-features" className="py-20 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-neura-magenta/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-neura-purple/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neura-purple to-neura-cyan bg-clip-text text-transparent">
              🔑 Core Features
            </span>
          </h2>
          <p className="text-white/70 md:text-lg max-w-2xl mx-auto">
            Everything you need to create, monetize, and grow in the decentralized web
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Content Ownership & Monetization */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-6 border-l-4 border-neura-purple pl-4">
              <span className="text-white">Content Ownership & Monetization</span>
            </h3>
            <div className="space-y-5">
              <FeatureCard 
                icon={<BookOpen className="w-5 h-5 text-neura-cyan" />}
                title="MediaNFTs"
                description="Tokenized, tradable content with gated access"
              />
              
              <FeatureCard 
                icon={<FileDigit className="w-5 h-5 text-neura-cyan" />}
                title="Subscription NFTs"
                description="Time-based access for episodic or premium content"
              />
              
              <FeatureCard 
                icon={<Code className="w-5 h-5 text-neura-cyan" />}
                title="Composable NFTs (ERC-998)"
                description="Bundle multimedia or derivative works"
              />
              
              <FeatureCard 
                icon={<Key className="w-5 h-5 text-neura-cyan" />}
                title="Dynamic Licensing (ERC-1155)"
                description="Modify or lease content rights"
              />
            </div>
          </div>

          {/* Commerce & Market Tools */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-6 border-l-4 border-neura-cyan pl-4">
              <span className="text-white">Commerce & Market Tools</span>
            </h3>
            <div className="space-y-5">
              <FeatureCard 
                icon={<Globe className="w-5 h-5 text-neura-cyan" />}
                title="Product & Service Sales"
                description="Sell digital/physical goods directly from your portal"
              />
              
              <FeatureCard 
                icon={<Coins className="w-5 h-5 text-neura-cyan" />}
                title="$Neurax Token"
                description="Power access, rewards, royalties, payments"
              />
            </div>
          </div>

          {/* Community & Communication */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-6 border-l-4 border-neura-magenta pl-4">
              <span className="text-white">Community & Communication</span>
            </h3>
            <div className="space-y-5">
              <FeatureCard 
                icon={<Share2 className="w-5 h-5 text-neura-cyan" />}
                title="Token-Incentivized Seeding"
                description="Rewards for maintaining content availability"
              />
              
              <FeatureCard 
                icon={<Mail className="w-5 h-5 text-neura-cyan" />}
                title="Neurapathy"
                description="End-to-end encrypted messaging with token gating"
              />
              
              <FeatureCard 
                icon={<Settings className="w-5 h-5 text-neura-cyan" />}
                title="DAO Governance"
                description="Propose, vote, and manage treasury with $Neurax"
              />
              
              <FeatureCard 
                icon={<Award className="w-5 h-5 text-neura-cyan" />}
                title="Gamified Engagement"
                description="Badges, loyalty NFTs, missions"
              />
              
              <FeatureCard 
                icon={<Heart className="w-5 h-5 text-neura-cyan" />}
                title="Mood-based Feed"
                description="Content tailored to emotional state"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <Card className="bg-neura-dark/50 backdrop-blur-sm border border-neura-purple/20 hover:border-neura-purple/40 transition-all duration-300">
      <CardContent className="p-5">
        <div className="flex items-start gap-4">
          <div className="mt-1 bg-neura-purple/10 p-2 rounded-lg">
            {icon}
          </div>
          <div>
            <h4 className="font-semibold text-white mb-1">{title}</h4>
            <p className="text-white/70 text-sm">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
