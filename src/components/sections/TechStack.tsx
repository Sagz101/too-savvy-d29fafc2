
import React from 'react';
import { Card } from '@/components/ui/card';

const technologies = [
  {
    category: "Frontend",
    items: ["React", "Tailwind CSS", "Web3Modal", "IPFS UIs"],
    color: "bg-neura-cyan/20"
  },
  {
    category: "Backend",
    items: ["IPFS", "WebTorrent", "OrbitDB", "The Graph"],
    color: "bg-neura-purple/20"
  },
  {
    category: "Smart Contracts",
    items: ["Ethereum-compatible", "MediaNFTs (ERC-721A)", "Seeding Rewards (ERC-20)", "Access Control"],
    color: "bg-neura-magenta/20"
  },
  {
    category: "Security",
    items: ["AES encryption", "zk-NFT verification", "Wallet authentication", "End-to-end encryption"],
    color: "bg-green-400/20"
  }
];

export const TechStack = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neura-purple to-neura-cyan bg-clip-text text-transparent">
              Technical Stack
            </span>
          </h2>
          <p className="text-white/70 md:text-lg max-w-2xl mx-auto">
            Built on cutting-edge Web3 technologies for privacy, ownership, and decentralization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <Card 
              key={index} 
              className="bg-neura-dark/50 backdrop-blur-sm border border-neura-purple/20 overflow-hidden"
            >
              <div className={`h-2 w-full ${tech.color}`}></div>
              <div className="p-6">
                <h3 className="text-white font-semibold text-lg mb-3">{tech.category}</h3>
                <ul className="space-y-2">
                  {tech.items.map((item, i) => (
                    <li key={i} className="text-white/70 flex items-center">
                      <span className={`w-2 h-2 rounded-full ${tech.color} mr-2`}></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
