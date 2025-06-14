
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Wallet, FileText, Key, Code, BadgeCheck, Globe, 
  MessageSquare, ShieldCheck, Settings, Award, Users, Lock
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

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
          link: "/video-studio"
        },
        {
          icon: <BadgeCheck className="w-5 h-5 text-neura-cyan" />,
          title: "Subscription NFTs",
          description: "Time-based access for episodic or premium content",
          link: "/streaming-dashboard"
        },
        {
          icon: <Users className="w-5 h-5 text-neura-cyan" />,
          title: "Decentralized Identity",
          description: "Own your digital presence across platforms",
          link: "/finance-hub"
        },
        {
          icon: <Key className="w-5 h-5 text-neura-cyan" />,
          title: "Dynamic Licensing",
          description: "Modify or lease content rights with smart contracts",
          link: "/video-marketplace"
        }
      ]
    },
    {
      title: "Monetization",
      borderColor: "border-neura-cyan",
      features: [
        {
          icon: <Wallet className="w-5 h-5 text-neura-cyan" />,
          title: "Ethereum",
          description: "Power access, rewards, royalties, payments",
          link: "/finance-hub"
        },
        {
          icon: <Globe className="w-5 h-5 text-neura-cyan" />,
          title: "Product & Service Sales",
          description: "Sell digital/physical goods from your portal",
          link: "/#ecommerce-store"
        },
        {
          icon: <Code className="w-5 h-5 text-neura-cyan" />,
          title: "Composable NFTs",
          description: "Bundle multimedia or derivative works",
          link: "/video-integration"
        }
      ]
    },
    {
      title: "Community",
      borderColor: "border-neura-magenta",
      features: [
        {
          icon: <MessageSquare className="w-5 h-5 text-neura-cyan" />,
          title: "Messaging",
          description: "End-to-end encrypted messaging with token gating",
          link: "/messaging"
        },
        {
          icon: <Settings className="w-5 h-5 text-neura-cyan" />,
          title: "DAO Governance",
          description: "Propose, vote, and manage with Ethereum",
          link: "/global-innovators"
        },
        {
          icon: <Award className="w-5 h-5 text-neura-cyan" />,
          title: "Gamified Engagement",
          description: "Badges, loyalty NFTs, missions",
          link: "/#social-hub"
        },
        {
          icon: <Lock className="w-5 h-5 text-neura-cyan" />,
          title: "Privacy & Security",
          description: "ZK-based access, MFA, and fingerprinting",
          link: "/finance-hub"
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
  delay: number;
  inView: boolean;
  onClick: (link: string) => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  link, 
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
            <h4 className="font-semibold text-white mb-1">{title}</h4>
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
