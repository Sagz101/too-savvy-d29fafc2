
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Wallet, FileText, Key, Code, BadgeCheck, Globe, 
  MessageSquare, ShieldCheck, Settings, Award, Users, Lock
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Web3Tooltip } from '@/components/ui/web3-tooltip';

export const CoreFeatures = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const featureCategories = [
    {
      title: "Ownership",
      borderColor: "border-neura-purple",
      features: [
        {
          icon: <FileText className="w-5 h-5 text-neura-cyan" />,
          title: "MediaNFTs",
          description: "Tokenized, tradable content with gated access",
          link: "/video-studio",
          tooltip: "Non-Fungible Tokens that represent unique digital content you truly own"
        },
        {
          icon: <BadgeCheck className="w-5 h-5 text-neura-cyan" />,
          title: "Subscription NFTs", 
          description: "Time-based access for episodic or premium content",
          link: "/streaming-dashboard",
          tooltip: "NFTs that grant access to exclusive content for a specific time period"
        },
        {
          icon: <Users className="w-5 h-5 text-neura-cyan" />,
          title: "Decentralized Identity",
          description: "Own your digital presence across platforms",
          link: "/finance-hub",
          tooltip: "Your identity is controlled by you, not by any single platform or company"
        },
        {
          icon: <Key className="w-5 h-5 text-neura-cyan" />,
          title: "Dynamic Licensing",
          description: "Modify or lease content rights with smart contracts",
          link: "/video-marketplace",
          tooltip: "Automated contracts that execute licensing terms without intermediaries"
        }
      ]
    },
    {
      title: "Monetization",
      borderColor: "border-neura-cyan",
      features: [
        {
          icon: <Wallet className="w-5 h-5 text-neura-cyan" />,
          title: "Ethereum Payments",
          description: "Power access, rewards, royalties, payments",
          link: "/finance-hub",
          tooltip: "Cryptocurrency payments on the Ethereum blockchain for global, instant transactions"
        },
        {
          icon: <Globe className="w-5 h-5 text-neura-cyan" />,
          title: "Product & Service Sales",
          description: "Sell digital/physical goods from your portal",
          link: "/#ecommerce-store",
          tooltip: "Integrated e-commerce with crypto and traditional payment options"
        },
        {
          icon: <Code className="w-5 h-5 text-neura-cyan" />,
          title: "Composable NFTs",
          description: "Bundle multimedia or derivative works",
          link: "/video-integration",
          tooltip: "NFTs that can be combined or modified to create new unique digital assets"
        }
      ]
    },
    {
      title: "Community",
      borderColor: "border-neura-magenta",
      features: [
        {
          icon: <MessageSquare className="w-5 h-5 text-neura-cyan" />,
          title: "Token-Gated Messaging",
          description: "End-to-end encrypted messaging with exclusive access",
          link: "/messaging",
          tooltip: "Only holders of specific tokens can access certain chat rooms or content"
        },
        {
          icon: <Settings className="w-5 h-5 text-neura-cyan" />,
          title: "DAO Governance",
          description: "Propose, vote, and manage with community tokens",
          link: "/global-innovators",
          tooltip: "Decentralized Autonomous Organization - community-driven decision making"
        },
        {
          icon: <Award className="w-5 h-5 text-neura-cyan" />,
          title: "Gamified Engagement",
          description: "Badges, loyalty NFTs, missions",
          link: "/#social-hub",
          tooltip: "Earn rewards and recognition through platform engagement and achievements"
        },
        {
          icon: <Lock className="w-5 h-5 text-neura-cyan" />,
          title: "Privacy & Security",
          description: "Zero-knowledge proofs, MFA, and fingerprinting",
          link: "/finance-hub",
          tooltip: "Advanced cryptographic techniques that verify information without revealing it"
        }
      ]
    }
  ];

  const handleFeatureClick = (link: string) => {
    if (link.startsWith('#')) {
      // Handle anchor links for same-page navigation
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // For regular links, React Router will handle navigation
  };

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
              Core Features
            </span>
          </h2>
          <p className="text-white/70 md:text-lg max-w-2xl mx-auto">
            Built for creators who want ownership, monetization, and community engagement
          </p>
        </div>

        <div 
          ref={ref} 
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {featureCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className={`transition-all duration-500 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${categoryIndex * 150}ms` }}
            >
              <h3 className={`text-xl md:text-2xl font-bold mb-6 border-l-4 ${category.borderColor} pl-4`}>
                <span className="text-white">{category.title}</span>
              </h3>
              <div className="space-y-5">
                {category.features.map((feature, featureIndex) => (
                  <FeatureCard 
                    key={featureIndex}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    link={feature.link}
                    tooltip={feature.tooltip}
                    delay={(categoryIndex * 150) + (featureIndex * 75)}
                    inView={inView}
                    onClick={handleFeatureClick}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  tooltip: string;
  delay: number;
  inView: boolean;
  onClick: (link: string) => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  link, 
  tooltip,
  delay, 
  inView, 
  onClick 
}) => {
  const cardContent = (
    <Card 
      className={`bg-neura-dark/50 backdrop-blur-sm border border-neura-purple/20 hover:border-neura-purple/40 transition-all duration-300 transform cursor-pointer hover:scale-105 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <CardContent className="p-5">
        <div className="flex items-start gap-4">
          <div className="mt-1 bg-neura-purple/10 p-2 rounded-lg">
            {icon}
          </div>
          <div>
            <h4 className="font-semibold text-white mb-1">
              <Web3Tooltip term={title} definition={tooltip} />
            </h4>
            <p className="text-white/70 text-sm">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  // Handle anchor links vs regular navigation
  if (link.startsWith('#')) {
    return (
      <div onClick={() => onClick(link)}>
        {cardContent}
      </div>
    );
  }

  return (
    <Link to={link} className="block">
      {cardContent}
    </Link>
  );
};
