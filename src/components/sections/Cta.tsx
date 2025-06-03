
import React from 'react';
import { Button } from '@/components/ui/button';
import { WalletButton } from '@/components/ui/wallet-button';
import { ArrowRight, Lock, Wallet } from 'lucide-react';

export const Cta = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10">
        {/* Solar-inspired animated gradient circles */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-solar-corona/20 via-solar-photosphere/15 to-solar-chromosphere/10 animate-solar-pulse" style={{ animationDuration: '15s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-solar-core/15 to-transparent animate-solar-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }}></div>
        
        {/* Enhanced background grid with solar colors */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDIyNSwgNTMsIDAuMTUpIiBzdHJva2Utd2lkdGg9IjIiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+PC9zdmc+')] opacity-40"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-xl border-2 border-solar-photosphere/50 rounded-3xl p-8 md:p-12 shadow-2xl shadow-solar-core/15">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-solar-core via-solar-radiative to-solar-corona bg-clip-text text-transparent">
                Enter The Dzuwa-Verse
              </span>
            </h2>
            <p className="text-gray-700 text-xl max-w-2xl mx-auto mb-8 font-medium leading-relaxed">
              Your sovereign portal to Web3 awaits. Connect your wallet to join the next generation of the internet where you own your digital identity, content, and financial future.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <WalletButton />
              <Button 
                variant="outline"
                className="border-2 border-solar-corona/50 text-gray-900 hover:bg-solar-photosphere/20 hover:border-solar-core/60"
              >
                <Lock size={16} className="mr-2" /> Learn About Web3 Security
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/90 border-2 border-solar-photosphere/40 p-6 rounded-xl text-center shadow-lg">
              <p className="text-gray-900 font-bold text-lg">Zero Platform Fees</p>
              <p className="text-gray-700 text-base font-medium mt-2">Direct creator-to-audience economy</p>
            </div>
            <div className="bg-white/90 border-2 border-solar-photosphere/40 p-6 rounded-xl text-center shadow-lg">
              <p className="text-gray-900 font-bold text-lg">Self-Sovereign Identity</p>
              <p className="text-gray-700 text-base font-medium mt-2">You own your data and content</p>
            </div>
            <div className="bg-white/90 border-2 border-solar-photosphere/40 p-6 rounded-xl text-center shadow-lg">
              <p className="text-gray-900 font-bold text-lg">Transparent Economics</p>
              <p className="text-gray-700 text-base font-medium mt-2">All transactions on-chain</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
