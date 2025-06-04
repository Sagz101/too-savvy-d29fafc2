
import React from 'react';

interface AnimatedGradientProps {
  className?: string;
}

export const AnimatedGradient: React.FC<AnimatedGradientProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`}>
      {/* Golden sun core with enhanced blue accents */}
      <div 
        className="absolute top-1/4 -left-10 w-80 h-80 bg-gradient-to-br from-dzuwa-gold via-solar-radiative to-dzuwa-cyan/40 rounded-full filter blur-3xl opacity-50 animate-solar-pulse cosmic-glow"
        style={{ animationDuration: '8s' }}
      />
      
      {/* Enhanced cyan and teal layers */}
      <div 
        className="absolute -bottom-10 right-1/4 w-96 h-96 bg-gradient-to-br from-dzuwa-cyan/50 via-dzuwa-teal/30 to-dzuwa-purple/20 rounded-full filter blur-3xl opacity-40 animate-cosmic-pulse"
        style={{ animationDuration: '12s', animationDelay: '1s' }}
      />
      
      {/* Purple and magenta cosmic flows */}
      <div 
        className="absolute top-1/2 -right-10 w-72 h-72 bg-gradient-to-br from-dzuwa-purple/60 via-dzuwa-magenta/40 to-dzuwa-cyan/30 rounded-full filter blur-3xl opacity-35 animate-cosmic-pulse"
        style={{ animationDuration: '10s', animationDelay: '0.5s' }}
      />
      
      {/* Additional cosmic layer */}
      <div 
        className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-gradient-to-br from-dzuwa-teal/40 via-dzuwa-cyan/30 to-dzuwa-gold/20 rounded-full filter blur-3xl opacity-30 animate-solar-pulse"
        style={{ animationDuration: '15s', animationDelay: '2s' }}
      />
      
      {/* Enhanced grid pattern with cosmic colors */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg2LCAxODIsIDIxMiwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-30"></div>
    </div>
  );
};
