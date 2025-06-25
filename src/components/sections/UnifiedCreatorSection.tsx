
import React from 'react';
import { Web3Hero } from './enhanced/Web3Hero';
import { ModulesGrid } from './enhanced/ModulesGrid';
import { EcosystemStats } from './enhanced/EcosystemStats';
import { GasFeeEstimator } from './enhanced/GasFeeEstimator';
import { TrustSignals } from './TrustSignals';

export const UnifiedCreatorSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Enhanced Background with Mesh Gradients and Particles */}
      <div className="absolute inset-0 -z-10">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-900 to-black"></div>
        
        {/* Mesh Gradients */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-cyan-400/20 via-cyan-400/10 to-transparent rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-purple-500/20 via-purple-500/10 to-transparent rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-radial from-emerald-400/15 via-emerald-400/5 to-transparent rounded-full filter blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-float opacity-60"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-float opacity-80" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-float opacity-70" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 right-20 w-1 h-1 bg-yellow-400 rounded-full animate-float opacity-60" style={{ animationDelay: '3s' }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        {/* Hero Section */}
        <Web3Hero />
        
        {/* Gas Fee Estimator */}
        <div className="mb-16">
          <GasFeeEstimator />
        </div>
        
        {/* Modules Section */}
        <ModulesGrid />
        
        {/* Ecosystem Section */}
        <EcosystemStats />
        
        {/* Trust Signals */}
        <div className="mb-16">
          <TrustSignals />
        </div>
      </div>
    </section>
  );
};
