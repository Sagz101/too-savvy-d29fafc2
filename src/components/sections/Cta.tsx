
import React from 'react';
import { Button } from '@/components/ui/button';
import { WalletButton } from '@/components/ui/wallet-button';
import { ArrowRight, Lock, Wallet, Shield, Globe, Zap } from 'lucide-react';
import { EnhancedIcon } from '@/components/ui/enhanced-icon';

export const Cta = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-dzuwa-light-blue via-dzuwa-warm-white to-solar-photosphere/30">
      <div className="absolute inset-0 -z-10">
        {/* Enhanced solar gradient circles */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-gradient-to-br from-solar-radiative/15 via-solar-photosphere/12 to-solar-corona/8 animate-solar-pulse cosmic-glow" style={{ animationDuration: '15s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-dzuwa-solar-orange/12 via-solar-chromosphere/8 to-transparent animate-solar-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }}></div>
        
        {/* Enhanced background grid with solar colors */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDEwNywgNTMsIDAuMDgpIiBzdHJva2Utd2lkdGg9IjEuNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgLz48L3N2Zz4=')] opacity-40"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto enhanced-card p-8 md:p-12 shadow-2xl cosmic-glow">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-solar-core via-solar-radiative to-solar-photosphere bg-clip-text text-transparent font-lotus">
                Enter Renegade
              </span>
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto mb-8 font-medium leading-relaxed">
              Your sovereign portal to Web3 awaits. Connect your wallet to join the next generation of the internet where you own your digital identity, content, and financial future.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <WalletButton />
              <Button 
                variant="outline"
                className="border-2 border-solar-photosphere text-solar-core hover:bg-solar-photosphere/20 hover:border-solar-radiative transition-all duration-300 soft-glow shadow-lg"
              >
                <Shield size={16} className="mr-2" /> Learn About Web3 Security
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="enhanced-card p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 cosmic-glow">
              <div className="flex justify-center mb-4">
                <EnhancedIcon icon={Zap} variant="warning" size="sm" />
              </div>
              <p className="text-gray-700 font-bold text-lg bg-gradient-to-r from-solar-radiative to-solar-photosphere bg-clip-text text-transparent">Zero Platform Fees</p>
              <p className="text-gray-600 text-base font-medium mt-2">Direct creator-to-audience economy</p>
            </div>
            <div className="enhanced-card p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 cosmic-glow">
              <div className="flex justify-center mb-4">
                <EnhancedIcon icon={Shield} variant="primary" size="sm" />
              </div>
              <p className="text-gray-700 font-bold text-lg bg-gradient-to-r from-solar-core to-solar-chromosphere bg-clip-text text-transparent">Self-Sovereign Identity</p>
              <p className="text-gray-600 text-base font-medium mt-2">You own your data and content</p>
            </div>
            <div className="enhanced-card p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 cosmic-glow">
              <div className="flex justify-center mb-4">
                <EnhancedIcon icon={Globe} variant="secondary" size="sm" />
              </div>
              <p className="text-gray-700 font-bold text-lg bg-gradient-to-r from-solar-corona to-solar-flare bg-clip-text text-transparent">Transparent Economics</p>
              <p className="text-gray-600 text-base font-medium mt-2">All transactions on-chain</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
