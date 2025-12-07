import React from 'react';
import { ArrowRight, Zap, ShoppingBag, Video, Users, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const HeroSection: React.FC = () => {
  const quickStats = [
    { value: '$2,847', label: 'E-commerce Store', icon: ShoppingBag },
    { value: '$2.1M', label: 'Video Studio', icon: Video },
    { value: '847', label: 'Social Earnings', icon: Users },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Hero Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20">
              <Zap className="w-4 h-4 text-indigo-400" />
              <span className="text-sm font-medium text-indigo-300">Web3 Creator Sovereign Hub</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                  Create. Own. Thrive.
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
                The Sovereign Web3 Platform
              </h2>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                className="bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-8 py-6 text-base shadow-xl shadow-indigo-500/25 transition-all duration-300 hover:shadow-indigo-500/40"
                asChild
              >
                <Link to="/studio">
                  Start Creating for Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-gray-700 text-gray-300 hover:bg-gray-800/50 hover:text-white px-8 py-6 text-base"
                asChild
              >
                <Link to="/commerce-studio">
                  Explore Marketplace
                </Link>
              </Button>
            </div>

            {/* E-commerce Store Card */}
            <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 space-y-4 mt-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">E-commerce Store:</h3>
                  <p className="text-sm text-gray-400">Launch & Grow Your Marketplace</p>
                </div>
              </div>
              
              <p className="text-sm text-gray-400">
                Your decentralized storefront with CertiK-audited security. 
                Zero platform fees, multi-chain support, built for creators.
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                <div>
                  <div className="text-3xl font-bold text-white">$21,000+</div>
                  <div className="text-sm text-gray-500">Total Transaction Volume</div>
                </div>
                <Button size="sm" className="bg-indigo-500 hover:bg-indigo-400" asChild>
                  <Link to="/commerce-studio">Start</Link>
                </Button>
              </div>

              {/* Wallet Connect */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Wallet className="w-4 h-4" />
                  <span>Connect Your Wallet</span>
                </div>
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-gray-900/40 border border-gray-800 rounded-xl p-4">
                <div className="text-2xl font-bold text-white">$847</div>
                <div className="text-sm text-gray-500">Avg. Creator Earnings</div>
              </div>
              <div className="bg-gray-900/40 border border-gray-800 rounded-xl p-4">
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div className="text-sm text-gray-500">Platform Uptime</div>
              </div>
            </div>

            <p className="text-sm text-gray-500">
              Create challenges, build your audience, and grow your Web3 
              brand with collaborative tools designed for creators.
            </p>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="space-y-6">
            {/* Choose Your Creator Section */}
            <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-2">Choose Your Creator Path</h3>
              <p className="text-sm text-gray-400 mb-6">Complete challenges that grow with your journey. Select what you need, when you need it.</p>
              
              <div className="grid grid-cols-3 gap-4">
                {quickStats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-gray-800/40 rounded-xl border border-gray-700/50 hover:border-indigo-500/30 transition-colors cursor-pointer">
                    <stat.icon className="w-6 h-6 text-indigo-400 mx-auto mb-2" />
                    <div className="text-lg font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Stats */}
            <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Join Our Creator Community</h3>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-4">
                  <div className="text-2xl font-bold text-indigo-400">$2.1M+</div>
                  <div className="text-xs text-gray-400">Total Creator Earnings</div>
                </div>
                <div className="bg-gray-800/40 rounded-xl p-4">
                  <div className="text-2xl font-bold text-white">847</div>
                  <div className="text-xs text-gray-400">Active NFTs Minted</div>
                </div>
                <div className="bg-gray-800/40 rounded-xl p-4">
                  <div className="text-2xl font-bold text-white">12.8M</div>
                  <div className="text-xs text-gray-400">Cross-Platform Reach</div>
                </div>
              </div>
            </div>

            {/* Trust & Transparency */}
            <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Trust & Transparency</h3>
              <p className="text-sm text-gray-400 mb-4">Your sovereign community where creators thrive together.</p>
              
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-sm text-indigo-300">Exclusive Perks</span>
                <span className="px-3 py-1.5 bg-gray-800/60 rounded-full text-sm text-gray-400">• CertiK Audited</span>
                <span className="px-3 py-1.5 bg-gray-800/60 rounded-full text-sm text-gray-400">• 24/7 Support</span>
                <span className="px-3 py-1.5 bg-gray-800/60 rounded-full text-sm text-gray-400">• DAO Governance</span>
              </div>

              {/* Growth Cards */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-gray-800/40 rounded-xl p-4 border border-gray-700/50">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <span className="text-green-400 text-xs">✓</span>
                    </div>
                    <span className="text-sm font-medium text-white">+300% More Earnings</span>
                  </div>
                  <p className="text-xs text-gray-500">vs. Gallery Sales</p>
                  <p className="text-sm font-semibold text-indigo-400 mt-1">$12,847 earned</p>
                </div>
                <div className="bg-gray-800/40 rounded-xl p-4 border border-gray-700/50">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <span className="text-purple-400 text-xs">♪</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Global Fanbase</div>
                      <div className="text-xs text-gray-500">Tokenized Music</div>
                    </div>
                  </div>
                  <div className="text-lg font-bold text-white mt-2">$11,934</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
