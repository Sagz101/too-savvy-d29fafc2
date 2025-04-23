
import React from 'react';
import { Music, Video, BookText, User, Image, Code, Palette, Globe } from 'lucide-react';

const modules = [
  {
    icon: <Music className="h-6 w-6 text-neura-purple" />,
    title: "Music",
    description: "Tokenize and monetize music, seed with fan support"
  },
  {
    icon: <Video className="h-6 w-6 text-neura-cyan" />,
    title: "Film & Video",
    description: "Token-gated films, earn per view"
  },
  {
    icon: <BookText className="h-6 w-6 text-neura-magenta" />,
    title: "Writing & Blogging",
    description: "Subscription blogs, tokenized books"
  },
  {
    icon: <User className="h-6 w-6 text-neura-purple" />,
    title: "Professional Profile",
    description: "Verified credentials and portfolios"
  },
  {
    icon: <Image className="h-6 w-6 text-neura-cyan" />,
    title: "NFT Gallery",
    description: "Showcase and trade digital assets"
  },
  {
    icon: <Code className="h-6 w-6 text-neura-magenta" />,
    title: "Project Dapps",
    description: "Build dApps from your portal"
  },
  {
    icon: <Palette className="h-6 w-6 text-neura-purple" />,
    title: "AI Brand Builder",
    description: "Visual identity tools, tone calibration"
  },
  {
    icon: <Globe className="h-6 w-6 text-neura-cyan" />,
    title: "NeuraSpaces",
    description: "NFT-owned virtual spaces for events/content"
  }
];

export const CreatorTools = () => {
  return (
    <section id="creator-tools" className="py-20 relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neura-dark/0 via-neura-purple/5 to-neura-dark/0"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neura-purple to-neura-cyan bg-clip-text text-transparent">
              🛠 Creator Tools & Modules
            </span>
          </h2>
          <p className="text-white/70 md:text-lg max-w-2xl mx-auto">
            Specialized tools that transform your portal into a powerful creative studio
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {modules.map((module, index) => (
            <div 
              key={index}
              className="bg-neura-dark/70 backdrop-blur-sm border border-neura-purple/20 rounded-xl p-6 hover:border-neura-purple/40 transition-all duration-300 hover:translate-y-[-5px]"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-gradient-to-br from-neura-purple/20 to-neura-cyan/10 mb-4">
                  {module.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2 text-white">{module.title}</h3>
                <p className="text-white/70 text-sm">{module.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
