
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

// Define the module type
type ModuleFeature = {
  title: string;
  description: string;
  uxFeature: string;
};

type ModuleCategory = {
  icon: string;
  title: string;
  color: string;
  modules: {
    name: string;
    features: ModuleFeature[];
  }[];
};

// Module data structure
const moduleCategories: ModuleCategory[] = [
  {
    icon: "🎨",
    title: "Content Monetization",
    color: "from-purple-500 to-indigo-600",
    modules: [
      {
        name: "MediaNFTs",
        features: [
          {
            title: "Visual Timeline Editor",
            description: "Mint content as tradable NFTs with pre-release, drop, and post-mint update controls.",
            uxFeature: "Toggle between public and gated preview modes."
          }
        ]
      },
      {
        name: "Subscription NFTs",
        features: [
          {
            title: "Time-Based Access",
            description: "Set expiration-based access with countdown timers. Recurring or one-time.",
            uxFeature: "NFT badge visually morphs as access nears expiry."
          }
        ]
      },
      {
        name: "Composable NFTs (ERC-998)",
        features: [
          {
            title: "Bundle Creator",
            description: "Drag-and-drop interface to bundle media (e.g. song + lyric sheet + album art).",
            uxFeature: "Bundle Viewer lets fans explore sub-assets."
          }
        ]
      },
      {
        name: "Dynamic Licensing (ERC-1155)",
        features: [
          {
            title: "Contract Templates",
            description: "Prebuilt templates for creative commons, lease, remix, or full rights.",
            uxFeature: "Smart contract visualizer to preview rights flow."
          }
        ]
      }
    ]
  },
  {
    icon: "🛍️",
    title: "Commerce",
    color: "from-emerald-500 to-teal-600",
    modules: [
      {
        name: "$Neurax Token",
        features: [
          {
            title: "Integrated Wallet",
            description: "Built-in wallet UI with swap, stake, tip, and royalties dashboard.",
            uxFeature: "Token flow heatmap with transaction breakdown."
          }
        ]
      },
      {
        name: "Product & Service Sales",
        features: [
          {
            title: "Storefront Builder",
            description: "Create physical, digital, or service listings right from your portal.",
            uxFeature: "Smart contract calculator to estimate gas, royalties, and profit."
          }
        ]
      }
    ]
  },
  {
    icon: "💬",
    title: "Community",
    color: "from-pink-500 to-rose-600",
    modules: [
      {
        name: "Neurapathy (Encrypted Messaging)",
        features: [
          {
            title: "Token-Gated Channels",
            description: "Chat channels gated by NFT ownership, token holdings, or DAO membership.",
            uxFeature: "Mood-reactive UI changes color with sentiment detection."
          }
        ]
      },
      {
        name: "Token-Incentivized Seeding",
        features: [
          {
            title: "Content Host Tracker",
            description: "UI module showing who's hosting your content + live seeding rewards earned.",
            uxFeature: "Top Seeder leaderboard with real-time rewards."
          }
        ]
      },
      {
        name: "DAO Governance",
        features: [
          {
            title: "Voting Portal",
            description: "Voting panel with real-time proposal stats, quorum percentage, and vote weight calculator.",
            uxFeature: "Proposal simulator—lets users preview impact of proposals."
          }
        ]
      },
      {
        name: "Mood-Based Feed",
        features: [
          {
            title: "Emotional AI",
            description: "Tailors content feed based on inputs or mood slider.",
            uxFeature: "Feed color and content tone adjust dynamically."
          }
        ]
      },
      {
        name: "Gamification",
        features: [
          {
            title: "Engagement Rewards",
            description: "Loyalty NFTs, badges, XP-based missions with real-time progress.",
            uxFeature: "NFT leveling system with upgrade visuals."
          }
        ]
      }
    ]
  },
  {
    icon: "🛡️",
    title: "Identity & Security",
    color: "from-blue-500 to-indigo-600",
    modules: [
      {
        name: "ZK Logs",
        features: [
          {
            title: "Privacy-Preserving Activity",
            description: "Access history shown as an anonymized "proof tree" with dates and zk-proofs.",
            uxFeature: "Toggle between human-readable summaries and cryptographic detail."
          }
        ]
      },
      {
        name: "Decentralized ID (DID)",
        features: [
          {
            title: "Identity Creation",
            description: "Onboarding wizard to create pseudonymous identities (Ceramic-based).",
            uxFeature: "Verify Once, Use Everywhere badge for cross-platform login."
          }
        ]
      },
      {
        name: "Multi-Factor Authentication (MFA)",
        features: [
          {
            title: "Enhanced Security",
            description: "Supports passkeys, biometric device check, and social recovery setup.",
            uxFeature: "Animated vault unlock interface for high-value interactions."
          }
        ]
      },
      {
        name: "File Fingerprinting",
        features: [
          {
            title: "Authenticity Verification",
            description: "Drag-and-drop verifier to check media hashes against Merkle Tree records.",
            uxFeature: "Authenticity Score for every asset."
          }
        ]
      }
    ]
  },
  {
    icon: "📈",
    title: "Analytics",
    color: "from-amber-500 to-orange-600",
    modules: [
      {
        name: "Creator Dashboard",
        features: [
          {
            title: "Performance Metrics",
            description: "Metrics on revenue, engagement, collector demographics, token flow.",
            uxFeature: "Real-time streaming of data with trend overlays (last 30d, 90d, YTD)."
          }
        ]
      },
      {
        name: "Token Flow Analysis",
        features: [
          {
            title: "Follow the Money",
            description: "Visualizes movement of your tokenized assets across wallets and platforms.",
            uxFeature: "Sankey diagram with wallet-to-wallet paths."
          }
        ]
      },
      {
        name: "Audience Demographics",
        features: [
          {
            title: "Audience Insights",
            description: "Charts showing geographic, wallet age, and on-chain behavior segmentation.",
            uxFeature: "Segment filter toggles with quick Retarget buttons."
          }
        ]
      }
    ]
  },
  {
    icon: "🛠",
    title: "Creator Studio",
    color: "from-neura-purple to-neura-cyan",
    modules: [
      {
        name: "Media Modules",
        features: [
          {
            title: "Music / Film / Writing",
            description: "Specialized interfaces with templates, pre-set licensing, media vault.",
            uxFeature: "Token-gating builder with drag-and-drop access layers."
          }
        ]
      },
      {
        name: "NFT Gallery",
        features: [
          {
            title: "Digital Showcase",
            description: "3D visual carousel or flat grid with customizable layouts.",
            uxFeature: "Augmented Showcase mode for VR/AR environments."
          }
        ]
      },
      {
        name: "Project dApps",
        features: [
          {
            title: "No-Code Contracts",
            description: "Click-to-deploy smart contracts with modular templates.",
            uxFeature: "Onboarding wizard with contract simulation (testnet preview)."
          }
        ]
      },
      {
        name: "AI Brand Builder",
        features: [
          {
            title: "Brand Identity",
            description: "Upload samples, get color palettes, logo variants, tone profile.",
            uxFeature: "Tone slider affects logo and font choices in real-time."
          }
        ]
      },
      {
        name: "NeuraSpaces",
        features: [
          {
            title: "Virtual Environments",
            description: "NFT-owned rooms with live chat, embedded content, and token gates.",
            uxFeature: "Customizable room styles and RSVP NFTs."
          }
        ]
      }
    ]
  },
  {
    icon: "🌉",
    title: "Ecosystem",
    color: "from-violet-500 to-purple-600",
    modules: [
      {
        name: "Cross-Chain Bridge",
        features: [
          {
            title: "Multi-Chain Support",
            description: "Multi-chain wallet + content selector UI for cross-chain transfers.",
            uxFeature: "Visual chain tunnel animation showing bridge process."
          }
        ]
      },
      {
        name: "Interoperable NFTs",
        features: [
          {
            title: "Universal Compatibility",
            description: "Content preview with platform compatibility badges.",
            uxFeature: "Where It Works panel with dApp icons."
          }
        ]
      },
      {
        name: "Wallet Support",
        features: [
          {
            title: "Multiple Wallets",
            description: "Smooth login with MetaMask, WalletConnect, Ledger, Rabby.",
            uxFeature: "Save wallet personas for different portal roles."
          }
        ]
      },
      {
        name: "Layer 2 Support",
        features: [
          {
            title: "Gas Optimization",
            description: "Automatic gas-optimizer suggests best chain and time.",
            uxFeature: "Eco Mode for budget transactions."
          }
        ]
      }
    ]
  },
  {
    icon: "🌟",
    title: "Showcase Strip",
    color: "from-red-500 to-pink-600",
    modules: [
      {
        name: "Live Metrics",
        features: [
          {
            title: "Real-Time Stats",
            description: "Auto-updating cards for revenue, engagement rate, and collector count.",
            uxFeature: "Visual indicators for positive/negative trends."
          }
        ]
      },
      {
        name: "User Stories",
        features: [
          {
            title: "Success Testimonials",
            description: "Creator testimonials in video or tweet embed form.",
            uxFeature: "Interactive carousel of real-world success stories."
          }
        ]
      },
      {
        name: "Built with Neura",
        features: [
          {
            title: "Case Studies",
            description: "Showcase logos and case studies of successful projects.",
            uxFeature: "Clone this Setup for users to replicate success."
          }
        ]
      }
    ]
  }
];

export const ModuleGrid: React.FC = () => {
  const [expandedCategories, setExpandedCategories] = useState<{[key: string]: boolean}>({});
  const [expandedModules, setExpandedModules] = useState<{[key: string]: boolean}>({});
  
  const toggleCategory = (title: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };
  
  const toggleModule = (categoryTitle: string, moduleName: string) => {
    const key = `${categoryTitle}-${moduleName}`;
    setExpandedModules(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neura-cyan/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-neura-purple/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neura-purple to-neura-cyan bg-clip-text text-transparent">
              Interactive Module Explorer
            </span>
          </h2>
          <p className="text-white/70 md:text-lg max-w-3xl mx-auto">
            Explore our comprehensive ecosystem of tools and features. Click on any category or module to learn more.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {moduleCategories.map((category, categoryIdx) => (
            <div 
              key={categoryIdx} 
              className={`col-span-1 ${category.title === 'Creator Studio' || category.title === 'Community' ? 'md:col-span-2' : ''}`}
            >
              <div 
                className={`bg-neura-dark/60 backdrop-blur-md border border-neura-purple/30 rounded-xl overflow-hidden transition-all duration-300 ${expandedCategories[category.title] ? 'ring-2 ring-offset-0 ring-neura-cyan/50' : 'hover:border-neura-purple/50'}`}
              >
                {/* Category Header */}
                <div 
                  className={`p-5 cursor-pointer bg-gradient-to-r ${category.color} bg-opacity-10`}
                  onClick={() => toggleCategory(category.title)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{category.icon}</span>
                      <h3 className="font-bold text-lg text-white">{category.title}</h3>
                    </div>
                    <ChevronDown 
                      className={`w-5 h-5 transition-transform ${expandedCategories[category.title] ? 'rotate-180' : ''}`} 
                    />
                  </div>
                </div>
                
                {/* Modules */}
                <div className={`transition-all duration-300 overflow-hidden ${expandedCategories[category.title] ? 'max-h-[2000px]' : 'max-h-0'}`}>
                  <div className="p-4 space-y-4">
                    {category.modules.map((module, moduleIdx) => {
                      const moduleKey = `${category.title}-${module.name}`;
                      return (
                        <div 
                          key={moduleIdx}
                          className="bg-neura-dark/80 border border-neura-purple/20 rounded-lg overflow-hidden"
                        >
                          <div 
                            className="p-4 cursor-pointer hover:bg-neura-purple/10"
                            onClick={() => toggleModule(category.title, module.name)}
                          >
                            <div className="flex justify-between items-center">
                              <h4 className="font-medium text-white">{module.name}</h4>
                              <ChevronDown 
                                className={`w-4 h-4 text-neura-cyan transition-transform ${expandedModules[moduleKey] ? 'rotate-180' : ''}`} 
                              />
                            </div>
                          </div>
                          
                          <div className={`transition-all duration-300 overflow-hidden ${expandedModules[moduleKey] ? 'max-h-[1000px]' : 'max-h-0'}`}>
                            {module.features.map((feature, featureIdx) => (
                              <div key={featureIdx} className="p-4 border-t border-neura-purple/20">
                                <h5 className="font-medium text-neura-cyan mb-2">{feature.title}</h5>
                                <p className="text-white/70 text-sm mb-3">{feature.description}</p>
                                <div className="bg-neura-purple/10 p-3 rounded-lg">
                                  <p className="text-xs">
                                    <span className="text-neura-cyan font-medium">UX Feature: </span>
                                    <span className="text-white/80">{feature.uxFeature}</span>
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-white/60 text-sm">Click on any category to expand and explore its modules and features</p>
        </div>
      </div>
    </section>
  );
};
