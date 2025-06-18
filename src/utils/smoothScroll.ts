
export const smoothScrollToSection = (sectionId: string, offset: number = 70) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;
    
    // Use smooth scrolling with proper timing
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    // Update URL hash without jumping
    if (history.replaceState) {
      history.replaceState(null, '', `#${sectionId}`);
    }
  }
};

export const getCurrentActiveSection = (sectionIds: string[], offset: number = 100): string | null => {
  let currentSection = null;
  let closestDistance = Infinity;
  
  for (const sectionId of sectionIds) {
    const element = document.getElementById(sectionId);
    if (element) {
      const rect = element.getBoundingClientRect();
      const distance = Math.abs(rect.top - offset);
      
      // Consider a section active if it's near the top of the viewport
      if (rect.top <= offset && rect.bottom >= offset) {
        if (distance < closestDistance) {
          closestDistance = distance;
          currentSection = sectionId;
        }
      }
    }
  }
  
  return currentSection;
};

// Utility function for handling keyboard navigation
export const handleKeyboardNavigation = (event: KeyboardEvent, callback: () => void) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    callback();
  }
};
