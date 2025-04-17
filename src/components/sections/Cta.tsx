
import React from 'react';
import { Button } from '@/components/ui/button';
import { WalletButton } from '@/components/ui/wallet-button';
import { ArrowRight, Lock } from 'lucide-react';

export const Cta = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {/* Animated gradient circles */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-neura-purple/20 to-neura-cyan/5 animate-pulse" style={{ animationDuration: '15s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-neura-purple/10 to-transparent animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }}></div>
        
        {/* Background grid */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-neura-dark/60 backdrop-blur-xl border border-neura-purple/30 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-neura-purple via-neura-light-purple to-neura-cyan bg-clip-text text-transparent">
                Enter The Neura-Verse
              </span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
              Your sovereign portal to Web3 awaits. Connect your wallet to join the next generation of the internet where you own your digital identity, content, and financial future.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <WalletButton />
              <Button 
                variant="outline"
                className="border-neura-purple/40 text-white hover:bg-neura-purple/10"
              >
                <Lock size={16} className="mr-2" /> Learn About Web3 Security
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-neura-dark/70 border border-neura-purple/20 p-5 rounded-xl text-center">
              <p className="text-white font-medium">Zero Platform Fees</p>
              <p className="text-white/60 text-sm">Direct creator-to-audience economy</p>
            </div>
            <div className="bg-neura-dark/70 border border-neura-purple/20 p-5 rounded-xl text-center">
              <p className="text-white font-medium">Self-Sovereign Identity</p>
              <p className="text-white/60 text-sm">You own your data and content</p>
            </div>
            <div className="bg-neura-dark/70 border border-neura-purple/20 p-5 rounded-xl text-center">
              <p className="text-white font-medium">Transparent Economics</p>
              <p className="text-white/60 text-sm">All transactions on-chain</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
