
import React from 'react';
import { smoothScrollToSection } from '@/utils/smoothScroll';
import { useActiveSection } from '@/hooks/useActiveSection';
import { ModernButton } from '@/components/ui/modern-button';

interface SectionNavigationProps {
  className?: string;
}

export const SectionNavigation: React.FC<SectionNavigationProps> = ({ className }) => {
  const sectionIds = ['hero', 'developer-resources', 'features', 'creator-dashboard', 'governance', 'cta'];
  const activeSection = useActiveSection(sectionIds);

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'developer-resources', label: 'Build' },
    { id: 'features', label: 'Features' },
    { id: 'creator-dashboard', label: 'Create' },
    { id: 'governance', label: 'Govern' },
    { id: 'cta', label: 'Get Started' }
  ];

  return (
    <nav className={`flex flex-wrap gap-2 ${className}`}>
      {sections.map((section) => (
        <ModernButton
          key={section.id}
          variant={activeSection === section.id ? 'primary' : 'ghost'}
          size="sm"
          onClick={() => smoothScrollToSection(section.id)}
          className={`transition-all duration-200 ${
            activeSection === section.id 
              ? 'bg-primary text-primary-foreground shadow-lg' 
              : 'hover:bg-primary/10'
          }`}
        >
          {section.label}
        </ModernButton>
      ))}
    </nav>
  );
};
