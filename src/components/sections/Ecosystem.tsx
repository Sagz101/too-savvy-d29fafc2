
import React from 'react';
import { Upload, Download, DollarSign, Layers } from 'lucide-react';

export const Ecosystem = () => {
  return (
    <section id="ecosystem" className="py-20 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-neura-magenta/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-neura-purple/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neura-purple to-neura-cyan bg-clip-text text-transparent">
              Neura Ecosystem
            </span>
          </h2>
          <p className="text-white/70 md:text-lg max-w-2xl mx-auto">
            From login to ownership, Neura creates a seamless Web3 experience.
          </p>
        </div>

        <div className="flex flex-col max-w-4xl mx-auto">
          <div className="relative py-10 pl-12 border-l-2 border-neura-purple/30">
            <div className="absolute left-[-13px] top-10 w-6 h-6 bg-neura-purple rounded-full flex items-center justify-center">
              <Layers size={14} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">User Login (Wallet-based, Non-Custodial)</h3>
            <p className="text-white/70">
              Users authenticate via Web3 wallets (e.g., MetaMask, WalletConnect). No email/password needed; sovereignty begins at login.
            </p>
          </div>

          <div className="relative py-10 pl-12 border-l-2 border-neura-purple/30">
            <div className="absolute left-[-13px] top-10 w-6 h-6 bg-neura-purple rounded-full flex items-center justify-center">
              <Layers size={14} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Personalization Engine</h3>
            <p className="text-white/70">
              Users select thematic modules: e.g., Music, DeFi, Film, Writing, NFTs, E-Commerce, etc. 
              Interface dynamically configures into a personal media + social + commerce hub.
            </p>
          </div>

          <div className="relative py-10 pl-12 border-l-2 border-neura-purple/30">
            <div className="absolute left-[-13px] top-10 w-6 h-6 bg-neura-purple rounded-full flex items-center justify-center">
              <Upload size={14} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Upload & Monetize</h3>
            <p className="text-white/70">
              Upload audio, video, books, blogs, NFTs, or physical products. 
              Choose privacy settings (public, token-gated, encrypted). 
              Set monetization models (fixed price, auction, subscription, royalties).
            </p>
          </div>

          <div className="relative py-10 pl-12">
            <div className="absolute left-[-13px] top-10 w-6 h-6 bg-neura-purple rounded-full flex items-center justify-center">
              <DollarSign size={14} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Engage & Earn</h3>
            <p className="text-white/70">
              Readers, listeners, and viewers access content via MediaNFTs or $Neurax payments. 
              Seeders who support file availability earn $Neurax. 
              Creators earn from every access, resale, or engagement with transparent royalties.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
