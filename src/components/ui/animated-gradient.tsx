
import React from 'react';

interface AnimatedGradientProps {
  className?: string;
}

export const AnimatedGradient: React.FC<AnimatedGradientProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`}>
      {/* Gold sun core with light blue accents */}
      <div 
        className="absolute top-1/4 -left-10 w-72 h-72 bg-gradient-to-br from-dzuwa-gold via-solar-radiative to-dzuwa-bright-blue/30 rounded-full filter blur-3xl opacity-40 animate-solar-pulse"
        style={{ animationDuration: '8s' }}
      />
      
      {/* Bright blue and white layers */}
      <div 
        className="absolute -bottom-10 right-1/4 w-96 h-96 bg-gradient-to-br from-dzuwa-bright-blue/40 via-dzuwa-light-blue to-dzuwa-white/60 rounded-full filter blur-3xl opacity-30 animate-solar-pulse"
        style={{ animationDuration: '12s', animationDelay: '1s' }}
      />
      
      {/* Gold accent with bright blue flows */}
      <div 
        className="absolute top-1/2 -right-10 w-64 h-64 bg-gradient-to-br from-dzuwa-gold/60 via-dzuwa-bright-blue to-dzuwa-white/40 rounded-full filter blur-3xl opacity-25 animate-solar-pulse"
        style={{ animationDuration: '10s', animationDelay: '0.5s' }}
      />
      
      {/* Enhanced grid pattern with new colors */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLCAxNzEsIDIyOCwgMC4wOCkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgLz48L3N2Zz4=')] opacity-30"></div>
    </div>
  );
};
