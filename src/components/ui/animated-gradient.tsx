
import React from 'react';

interface AnimatedGradientProps {
  className?: string;
}

export const AnimatedGradient: React.FC<AnimatedGradientProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`}>
      {/* Solar core with enhanced orange and red accents */}
      <div 
        className="absolute top-1/4 -left-10 w-80 h-80 bg-gradient-to-br from-solar-core via-solar-radiative to-solar-corona/60 rounded-full filter blur-3xl opacity-60 animate-solar-pulse cosmic-glow"
        style={{ animationDuration: '8s' }}
      />
      
      {/* Enhanced solar flare layers */}
      <div 
        className="absolute -bottom-10 right-1/4 w-96 h-96 bg-gradient-to-br from-solar-photosphere/70 via-dzuwa-solar-orange/50 to-dzuwa-solar-yellow/30 rounded-full filter blur-3xl opacity-50 animate-cosmic-pulse"
        style={{ animationDuration: '12s', animationDelay: '1s' }}
      />
      
      {/* Solar prominence and chromosphere flows */}
      <div 
        className="absolute top-1/2 -right-10 w-72 h-72 bg-gradient-to-br from-solar-prominence/80 via-solar-chromosphere/60 to-solar-corona/40 rounded-full filter blur-3xl opacity-45 animate-cosmic-pulse"
        style={{ animationDuration: '10s', animationDelay: '0.5s' }}
      />
      
      {/* Additional solar plasma layer */}
      <div 
        className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-gradient-to-br from-solar-convection/60 via-solar-radiative/40 to-dzuwa-gold/30 rounded-full filter blur-3xl opacity-40 animate-solar-pulse"
        style={{ animationDuration: '15s', animationDelay: '2s' }}
      />
      
      {/* Enhanced grid pattern with solar colors */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDEwNywgNTMsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgLz48L3N2Zz4=')] opacity-30"></div>
    </div>
  );
};
