
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedMeerkatProps {
  variant?: 'default' | 'typing' | 'exploring' | 'working';
  size?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
  className?: string;
}

export const AnimatedMeerkat: React.FC<AnimatedMeerkatProps> = ({
  variant = 'default',
  size = 'md',
  interactive = true,
  className
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const meerkatImages = {
    default: '/lovable-uploads/8dc385ce-b501-4842-b450-2c16b573ad7d.png',
    typing: '/lovable-uploads/b043185d-782e-4b66-8a6e-30380bd936cb.png',
    exploring: '/lovable-uploads/9ec43f34-a164-4091-9c10-f51c42b5b01a.png',
    working: '/lovable-uploads/52075610-7348-45d9-ba30-b5db5d851ecb.png'
  };

  const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48',
    lg: 'w-64 h-64'
  };

  const handleClick = () => {
    if (interactive) {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 600);
    }
  };

  return (
    <div 
      className={cn(
        "meerkat-container relative inline-block cursor-pointer select-none",
        className
      )}
      onMouseEnter={() => interactive && setIsHovered(true)}
      onMouseLeave={() => interactive && setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Main Meerkat Image */}
      <div className={cn(
        "meerkat-wrapper relative transition-all duration-300",
        sizeClasses[size],
        {
          "animate-gentle-bounce": !isHovered && !isClicked,
          "animate-excited-bounce": isHovered,
          "animate-click-bounce": isClicked,
          "hover:scale-105": interactive,
        }
      )}>
        <img
          src={meerkatImages[variant]}
          alt="Animated Tech Meerkat"
          className="w-full h-full object-contain relative z-10"
          style={{
            filter: isHovered ? 'brightness(1.1) saturate(1.1)' : 'brightness(1)',
            transition: 'filter 0.3s ease'
          }}
        />
        
        {/* Goggle Glow Effect */}
        <div 
          className={cn(
            "absolute top-[25%] left-[50%] transform -translate-x-1/2 -translate-y-1/2",
            "w-16 h-8 rounded-full pointer-events-none z-20",
            {
              "animate-goggle-glow": true,
              "animate-intense-glow": isHovered
            }
          )}
          style={{
            background: 'radial-gradient(circle, rgba(0,255,255,0.3) 0%, transparent 70%)',
            boxShadow: isHovered ? '0 0 20px #00ffff' : '0 0 10px #00ffff'
          }}
        />

        {/* Typing Animation Indicator */}
        {variant === 'typing' && (
          <div className="absolute bottom-[30%] left-[50%] transform -translate-x-1/2">
            <div className="flex space-x-1">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-cosmos-cyan rounded-full animate-typing-indicator"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Crypto Icons for Working Variant */}
        {variant === 'working' && (
          <div className="absolute top-[20%] right-[10%] space-y-2">
            {['₿', '⟠', '◊'].map((symbol, i) => (
              <div
                key={i}
                className="text-cosmos-cyan text-sm font-bold animate-float"
                style={{ 
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: '3s'
                }}
              >
                {symbol}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Interactive Sparkles */}
      {interactive && isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cosmos-cyan rounded-full animate-sparkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Sound Wave Effect for Exploring */}
      {variant === 'exploring' && isHovered && (
        <div className="absolute top-[15%] left-[85%] transform -translate-x-1/2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-8 h-8 border-2 border-cosmos-cyan rounded-full animate-ping"
              style={{
                animationDelay: `${i * 0.3}s`,
                opacity: 0.6 - (i * 0.2)
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};
