import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';

interface StatItem {
  label: string;
  target: number;
  prefix?: string;
  suffix?: string;
  growth?: string;
}

interface AnimatedStatsProps {
  stats?: StatItem[];
  className?: string;
}

const defaultStats: StatItem[] = [
  { label: 'Active Creators', target: 12847, growth: '+15.2%' },
  { label: 'NFTs Minted', target: 421071, growth: '+8.7%' },
  { label: 'Creator Earnings', target: 2100000, prefix: '$', growth: '+24.3%' },
  { label: 'Community Members', target: 15247, growth: '+12.1%' },
];

const AnimatedCounter: React.FC<{
  target: number;
  prefix?: string;
  suffix?: string;
  shouldAnimate: boolean;
}> = ({ target, prefix = '', suffix = '', shouldAnimate }) => {
  const [current, setCurrent] = useState(0);
  const animationRef = useRef<number>();

  useEffect(() => {
    if (!shouldAnimate) return;

    const duration = 2000; // 2 seconds
    const startTime = performance.now();
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const value = Math.floor(target * easeOutQuart);
      
      setCurrent(value);
      
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [target, shouldAnimate]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    return num.toLocaleString();
  };

  return (
    <span>
      {prefix}{formatNumber(current)}{suffix}
    </span>
  );
};

export const AnimatedStats: React.FC<AnimatedStatsProps> = ({
  stats = defaultStats,
  className = '',
}) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <div ref={ref} className={`grid grid-cols-2 lg:grid-cols-4 gap-4 ${className}`}>
      {stats.map((stat, index) => (
        <Card
          key={index}
          className="bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/20 p-6 text-center backdrop-blur-sm hover:border-primary/40 transition-all duration-300 hover:scale-105"
          style={{
            animationDelay: `${index * 100}ms`,
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(20px)',
            transition: `all 0.5s ease ${index * 0.1}s`,
          }}
        >
          <h3 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-primary via-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
            <AnimatedCounter
              target={stat.target}
              prefix={stat.prefix}
              suffix={stat.suffix}
              shouldAnimate={inView}
            />
          </h3>
          <p className="text-muted-foreground text-sm mb-1">{stat.label}</p>
          {stat.growth && (
            <div className="flex items-center justify-center gap-1 text-emerald-400 text-xs font-medium">
              <TrendingUp className="w-3 h-3" />
              {stat.growth}
            </div>
          )}
        </Card>
      ))}
    </div>
  );
};
