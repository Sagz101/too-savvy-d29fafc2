
import { useState, useEffect } from 'react';
import { getCurrentActiveSection } from '@/utils/smoothScroll';

export const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentSection = getCurrentActiveSection(sectionIds);
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, activeSection]);

  return activeSection;
};
