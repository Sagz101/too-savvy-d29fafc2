
import React, { useState, useEffect, useRef } from 'react';

interface LazySectionProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  fallback?: React.ReactNode;
}

export const LazySection: React.FC<LazySectionProps> = ({
  children,
  className = '',
  threshold = 0.1,
  fallback = (
    <div className="flex items-center justify-center py-16">
      <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
    </div>
  )
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  useEffect(() => {
    if (isIntersecting && !isLoaded) {
      // Simulate loading delay for demonstration
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [isIntersecting, isLoaded]);

  return (
    <div ref={ref} className={className}>
      {isIntersecting ? (isLoaded ? children : fallback) : fallback}
    </div>
  );
};
