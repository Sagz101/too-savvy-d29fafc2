
import React from 'react';

interface AnimatedGradientProps {
  className?: string;
}

export const AnimatedGradient: React.FC<AnimatedGradientProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`}>
      <div 
        className="absolute top-1/4 -left-10 w-72 h-72 bg-neura-purple/30 rounded-full filter blur-3xl opacity-30 animate-pulse"
        style={{ animationDuration: '8s' }}
      />
      <div 
        className="absolute -bottom-10 right-1/4 w-96 h-96 bg-neura-cyan/20 rounded-full filter blur-3xl opacity-20 animate-pulse"
        style={{ animationDuration: '12s', animationDelay: '1s' }}
      />
      <div 
        className="absolute top-1/2 -right-10 w-64 h-64 bg-neura-magenta/20 rounded-full filter blur-3xl opacity-20 animate-pulse"
        style={{ animationDuration: '10s', animationDelay: '0.5s' }}
      />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-30"></div>
    </div>
  );
};
