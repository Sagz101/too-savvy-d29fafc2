
import React from 'react';
import { Wallet, Layers, Upload, DollarSign, Link2, Shield, BarChart, CircleUser } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useInView } from 'react-intersection-observer';

export const Ecosystem = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  
  return (
    <section id="ecosystem" className="py-24 relative">
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
            From sovereign identity to full ownership, Neura creates a seamless, decentralized experience.
          </p>
        </div>

        <div ref={ref} className="flex flex-col max-w-4xl mx-auto">
          {/* Step 1: Sovereign Onboarding */}
          <div className={`relative py-10 pl-12 border-l-2 border-neura-purple/30 transition-all duration-500 ${inView ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute left-[-13px] top-10 w-6 h-6 bg-neura-purple rounded-full flex items-center justify-center">
              <CircleUser size={14} className="text-white" />
            </div>
            <div className="flex items-center gap-2 mb-3">
              <h3 className="text-xl font-bold text-white">Sovereign Onboarding</h3>
              <Badge className="bg-neura-purple text-white">User-Controlled</Badge>
            </div>
            <p className="text-white/70">
              Users authenticate via non-custodial wallets like MetaMask or WalletConnect. 
              No centralized login required—your identity, assets, and preferences remain fully under your control.
            </p>
            <div className="flex gap-2 mt-4">
              <div className="inline-flex items-center gap-1 py-1 px-2 bg-neura-purple/20 rounded-md border border-neura-purple/30 text-sm text-white">
                <Wallet size={12} className="text-neura-cyan" /> Non-custodial
              </div>
              <div className="inline-flex items-center gap-1 py-1 px-2 bg-neura-purple/20 rounded-md border border-neura-purple/30 text-sm text-white">
                <Shield size={12} className="text-neura-cyan" /> Self-sovereign
              </div>
            </div>
          </div>

          {/* Step 2: Dynamic Personalization Layer */}
          <div className={`relative py-10 pl-12 border-l-2 border-neura-purple/30 transition-all duration-500 ${inView ? 'opacity-100 delay-100' : 'opacity-0'}`}>
            <div className="absolute left-[-13px] top-10 w-6 h-6 bg-neura-purple rounded-full flex items-center justify-center">
              <Layers size={14} className="text-white" />
            </div>
            <div className="flex items-center gap-2 mb-3">
              <h3 className="text-xl font-bold text-white">Dynamic Personalization Layer</h3>
              <Badge className="bg-neura-cyan text-white">Customizable</Badge>
            </div>
            <p className="text-white/70">
              Upon login, activate thematic modules—Music, DeFi, NFTs, Film, Writing, and more—instantly 
              transforming your interface into a tailored creative, social, and commercial environment.
            </p>
            <div className="mt-4 grid grid-cols-3 sm:grid-cols-6 gap-2">
              {["Music", "DeFi", "NFTs", "Film", "Writing", "E-Commerce"].map((module) => (
                <div key={module} className="bg-neura-purple/10 border border-neura-purple/30 rounded-md py-1 px-2 text-xs text-center text-white">{module}</div>
              ))}
            </div>
          </div>

          {/* Step 3: Create, Upload & Configure */}
          <div className={`relative py-10 pl-12 border-l-2 border-neura-purple/30 transition-all duration-500 ${inView ? 'opacity-100 delay-200' : 'opacity-0'}`}>
            <div className="absolute left-[-13px] top-10 w-6 h-6 bg-neura-purple rounded-full flex items-center justify-center">
              <Upload size={14} className="text-white" />
            </div>
            <div className="flex items-center gap-2 mb-3">
              <h3 className="text-xl font-bold text-white">Create, Upload & Configure</h3>
              <Badge className="bg-neura-purple text-white">Flexible</Badge>
            </div>
            <p className="text-white/70">
              Upload media (audio, video, books, blogs), NFTs, or physical products with configurable:
            </p>
            <div className="mt-4 space-y-3">
              <div className="bg-neura-dark/70 border border-neura-purple/30 rounded-lg p-3">
                <h4 className="font-medium text-neura-cyan mb-1">Access Control</h4>
                <p className="text-white/70 text-sm">Public, token-gated, or fully encrypted content protection</p>
              </div>
              <div className="bg-neura-dark/70 border border-neura-purple/30 rounded-lg p-3">
                <h4 className="font-medium text-neura-cyan mb-1">Monetization Model</h4>
                <p className="text-white/70 text-sm">Fixed price, dynamic pricing, auctions, subscription NFTs, royalties</p>
              </div>
              <div className="bg-neura-dark/70 border border-neura-purple/30 rounded-lg p-3">
                <h4 className="font-medium text-neura-cyan mb-1">Licensing</h4>
                <p className="text-white/70 text-sm">Optional dynamic licensing and composability features</p>
              </div>
            </div>
          </div>

          {/* Step 4: Engage, Seed & Earn */}
          <div className={`relative py-10 pl-12 border-l-2 border-neura-purple/30 transition-all duration-500 ${inView ? 'opacity-100 delay-300' : 'opacity-0'}`}>
            <div className="absolute left-[-13px] top-10 w-6 h-6 bg-neura-purple rounded-full flex items-center justify-center">
              <DollarSign size={14} className="text-white" />
            </div>
            <div className="flex items-center gap-2 mb-3">
              <h3 className="text-xl font-bold text-white">Engage, Seed & Earn</h3>
              <Badge className="bg-neura-cyan text-white">Community-Powered</Badge>
            </div>
            <p className="text-white/70">
              Audiences access content through MediaNFTs or $Neurax tokens. Creators earn on primary sales, 
              resales, and engagement with on-chain royalty transparency. Seeders earn $Neurax for maintaining 
              content availability.
            </p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-neura-purple/10 border border-neura-purple/30 rounded-lg p-3 text-center">
                <p className="text-neura-cyan font-medium">Creators</p>
                <p className="text-white/70 text-sm">Earn on sales, resales & engagement</p>
              </div>
              <div className="bg-neura-purple/10 border border-neura-purple/30 rounded-lg p-3 text-center">
                <p className="text-neura-cyan font-medium">Seeders</p>
                <p className="text-white/70 text-sm">Earn $Neurax for content hosting</p>
              </div>
              <div className="bg-neura-purple/10 border border-neura-purple/30 rounded-lg p-3 text-center">
                <p className="text-neura-cyan font-medium">Collectors</p>
                <p className="text-white/70 text-sm">Access exclusive content & benefits</p>
              </div>
            </div>
          </div>

          {/* Step 5: Ownership & Interoperability */}
          <div className={`relative py-10 pl-12 transition-all duration-500 ${inView ? 'opacity-100 delay-400' : 'opacity-0'}`}>
            <div className="absolute left-[-13px] top-10 w-6 h-6 bg-neura-purple rounded-full flex items-center justify-center">
              <Link2 size={14} className="text-white" />
            </div>
            <div className="flex items-center gap-2 mb-3">
              <h3 className="text-xl font-bold text-white">Ownership & Interoperability</h3>
              <Badge className="bg-neura-purple text-white">Cross-Chain</Badge>
            </div>
            <p className="text-white/70">
              Every piece of content exists as a composable, ownable NFT—interoperable across supported chains and 
              reusable in dApps, social feeds, or marketplaces.
            </p>
          </div>

          {/* Optional Enhancements Section */}
          <div className="mt-16 bg-gradient-to-r from-neura-purple/10 to-neura-cyan/10 rounded-2xl border border-neura-purple/20 p-6">
            <h3 className="text-xl font-bold mb-4 text-white text-center">Optional Enhancements</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-neura-dark/70 border border-neura-purple/30 rounded-lg p-4">
                <div className="w-10 h-10 rounded-full bg-neura-purple/20 flex items-center justify-center mb-3">
                  <Shield size={20} className="text-neura-cyan" />
                </div>
                <h4 className="font-medium text-white mb-2">Integrated DAO Governance</h4>
                <p className="text-white/70 text-sm">Vote on platform upgrades, featured content, or community funds using $Neurax tokens.</p>
              </div>
              
              <div className="bg-neura-dark/70 border border-neura-purple/30 rounded-lg p-4">
                <div className="w-10 h-10 rounded-full bg-neura-purple/20 flex items-center justify-center mb-3">
                  <BarChart size={20} className="text-neura-cyan" />
                </div>
                <h4 className="font-medium text-white mb-2">Creator Analytics</h4>
                <p className="text-white/70 text-sm">Advanced dashboards for tracking engagement, earnings, demographics and audience insights.</p>
              </div>
              
              <div className="bg-neura-dark/70 border border-neura-purple/30 rounded-lg p-4">
                <div className="w-10 h-10 rounded-full bg-neura-purple/20 flex items-center justify-center mb-3">
                  <Upload size={20} className="text-neura-cyan" />
                </div>
                <h4 className="font-medium text-white mb-2">AI-assisted Publishing</h4>
                <p className="text-white/70 text-sm">Smart tools to help title, tag, and market uploads based on trends and metadata.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
