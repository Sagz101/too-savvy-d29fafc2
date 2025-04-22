import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { 
  Music, Film, BookText, Store, LineChart, Users, Share2, 
  Briefcase, Mail, Code, Paintbrush, Trophy, HeartPulse, Building
} from 'lucide-react';

const modules = [
  {
    icon: <Music className="w-10 h-10 text-neura-purple" />,
    name: "Music",
    description: "Upload, tokenize, and monetize your music with fan-supported seeding and transparent royalties."
  },
  {
    icon: <Film className="w-10 h-10 text-neura-purple" />,
    name: "Film & Video",
    description: "Distribute your films with token-gated access while earning from every view and resale."
  },
  {
    icon: <BookText className="w-10 h-10 text-neura-purple" />,
    name: "Writing & Blogging",
    description: "Create subscription blogs, token-gated books, and community-owned publications."
  },
  {
    icon: <Store className="w-10 h-10 text-neura-purple" />,
    name: "E-Commerce",
    description: "Sell digital or physical products with crypto payments and token-based loyalty systems."
  },
  {
    icon: <LineChart className="w-10 h-10 text-neura-purple" />,
    name: "DeFi & Finance",
    description: "Stake, lend, and earn using assets tied directly to your creative output."
  },
  {
    icon: <Share2 className="w-10 h-10 text-neura-purple" />,
    name: "Social Media",
    description: "Connect with fans, friends and followers through decentralized social profiles and content sharing."
  },
  {
    icon: <Briefcase className="w-10 h-10 text-neura-purple" />,
    name: "Professional Profile",
    description: "Build your professional identity with verified credentials, portfolio showcase, and work history."
  },
  {
    icon: <Mail className="w-10 h-10 text-neura-purple" />,
    name: "Neurapathy",
    description: "Secure, encrypted messaging with token-gated access control and permanent data storage."
  },
  {
    icon: <Code className="w-10 h-10 text-neura-purple" />,
    name: "Project Dapps",
    description: "Build, deploy, and manage decentralized applications with integrated development tools."
  },
  {
    icon: <Paintbrush className="w-10 h-10 text-neura-purple" />,
    name: "AI Brand Builder",
    description: "Create a consistent personal brand with AI-powered design tools and templates."
  },
  {
    icon: <Trophy className="w-10 h-10 text-neura-purple" />,
    name: "Gamified Engagement",
    description: "Engage your community with gamified experiences, missions, and reward systems."
  },
  {
    icon: <HeartPulse className="w-10 h-10 text-neura-purple" />,
    name: "Mood-based Feed",
    description: "Deliver content based on mood settings to match what your audience is feeling."
  },
  {
    icon: <Building className="w-10 h-10 text-neura-purple" />,
    name: "NeuraSpaces",
    description: "Custom virtual spaces for showcasing your work or hosting community events."
  }
];

export const Modules = () => {
  const [activeModule, setActiveModule] = useState(0);

  return (
    <section id="modules" className="py-20 relative bg-gradient-to-b from-neura-dark/0 via-neura-dark to-neura-dark/0">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neura-purple to-neura-cyan bg-clip-text text-transparent">
              Personalization Modules
            </span>
          </h2>
          <p className="text-white/70 md:text-lg max-w-2xl mx-auto">
            Customize your Neura portal with the modules that matter most to you.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {modules.map((module, index) => (
            <div
              key={index}
              className={`cursor-pointer transition-all duration-300 text-center p-4 ${
                activeModule === index 
                ? "bg-neura-purple/20 border-2 border-neura-purple rounded-xl shadow-lg shadow-neura-purple/20" 
                : "bg-neura-dark/50 border border-neura-purple/20 rounded-xl hover:bg-neura-purple/10"
              }`}
              onClick={() => setActiveModule(index)}
            >
              <div className="flex justify-center mb-3">
                {module.icon}
              </div>
              <h3 className="font-medium text-sm md:text-base text-white">{module.name}</h3>
            </div>
          ))}
        </div>

        <Card className="bg-neura-dark/50 backdrop-blur-md border border-neura-purple/30 p-6 md:p-8 rounded-2xl shadow-xl shadow-neura-purple/5">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="bg-gradient-to-br from-neura-purple/20 to-neura-cyan/20 p-8 rounded-xl border border-neura-purple/30 flex items-center justify-center">
              {modules[activeModule].icon}
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4 text-white">{modules[activeModule].name}</h3>
              <p className="text-white/80 text-lg mb-6">{modules[activeModule].description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-neura-dark/60 p-4 rounded-lg border border-neura-purple/20">
                  <p className="text-neura-cyan font-medium mb-1">Ownership</p>
                  <p className="text-white/70 text-sm">Full control over your content with MediaNFTs</p>
                </div>
                <div className="bg-neura-dark/60 p-4 rounded-lg border border-neura-purple/20">
                  <p className="text-neura-cyan font-medium mb-1">Revenue</p>
                  <p className="text-white/70 text-sm">Direct earnings with transparent royalties</p>
                </div>
                <div className="bg-neura-dark/60 p-4 rounded-lg border border-neura-purple/20">
                  <p className="text-neura-cyan font-medium mb-1">Community</p>
                  <p className="text-white/70 text-sm">Tokenized engagement and rewards</p>
                </div>
                <div className="bg-neura-dark/60 p-4 rounded-lg border border-neura-purple/20">
                  <p className="text-neura-cyan font-medium mb-1">Interoperability</p>
                  <p className="text-white/70 text-sm">Connect with the entire Web3 ecosystem</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
