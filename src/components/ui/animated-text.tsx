
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  threshold?: number;
  type?: 'gradient' | 'regular';
  gradientFrom?: string;
  gradientTo?: string;
  delay?: number;
  staggerDelay?: number;
  tag?: 'span' | 'h1' | 'h2' | 'h3' | 'p' | 'div';
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text,
  className = '',
  once = true,
  threshold = 0.1,
  type = 'regular',
  gradientFrom = 'from-neura-purple',
  gradientTo = 'to-neura-cyan',
  delay = 0,
  staggerDelay = 0.03,
  tag = 'span'
}) => {
  const [displayText, setDisplayText] = useState('');
  const { ref, inView } = useInView({ threshold, triggerOnce: once });
  
  useEffect(() => {
    if (inView) {
      let animationTimeout: ReturnType<typeof setTimeout>;
      
      // Initial delay
      const initialTimeout = setTimeout(() => {
        const textArray = text.split('');
        let currentIndex = 0;
        
        const animateText = () => {
          if (currentIndex <= textArray.length) {
            setDisplayText(text.substring(0, currentIndex));
            currentIndex++;
            animationTimeout = setTimeout(animateText, staggerDelay * 1000);
          }
        };
        
        animateText();
      }, delay * 1000);
      
      return () => {
        clearTimeout(initialTimeout);
        clearTimeout(animationTimeout);
      };
    }
  }, [inView, text, delay, staggerDelay]);
  
  const Component = tag;
  
  return (
    <Component
      ref={ref}
      className={`inline-block whitespace-pre-wrap ${
        type === 'gradient' 
          ? `bg-gradient-to-r ${gradientFrom} ${gradientTo} bg-clip-text text-transparent` 
          : ''
      } ${className}`}
    >
      {inView ? displayText : ''}
    </Component>
  );
};
