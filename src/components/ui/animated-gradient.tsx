
import React from 'react';

interface AnimatedGradientProps {
  className?: string;
}

export const AnimatedGradient: React.FC<AnimatedGradientProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`}>
      {/* Solar core inspired gradient */}
      <div 
        className="absolute top-1/4 -left-10 w-72 h-72 bg-gradient-to-br from-solar-core via-solar-radiative to-solar-convection rounded-full filter blur-3xl opacity-40 animate-solar-pulse"
        style={{ animationDuration: '8s' }}
      />
      
      {/* Corona and photosphere layers */}
      <div 
        className="absolute -bottom-10 right-1/4 w-96 h-96 bg-gradient-to-br from-solar-corona via-solar-photosphere to-solar-chromosphere rounded-full filter blur-3xl opacity-30 animate-solar-pulse"
        style={{ animationDuration: '12s', animationDelay: '1s' }}
      />
      
      {/* Subsurface flows accent */}
      <div 
        className="absolute top-1/2 -right-10 w-64 h-64 bg-gradient-to-br from-solar-subsurface via-neura-cyan to-solar-plasma rounded-full filter blur-3xl opacity-25 animate-solar-pulse"
        style={{ animationDuration: '10s', animationDelay: '0.5s' }}
      />
      
      {/* Enhanced grid pattern with solar colors */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDIyNSwgNTMsIDAuMDgpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+PC9zdmc+')] opacity-30"></div>
    </div>
  );
};
