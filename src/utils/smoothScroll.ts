
export const smoothScrollToSection = (sectionId: string, offset: number = 80) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

export const getCurrentActiveSection = (sectionIds: string[], offset: number = 100): string | null => {
  let currentSection = null;
  
  for (const sectionId of sectionIds) {
    const element = document.getElementById(sectionId);
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= offset && rect.bottom >= offset) {
        currentSection = sectionId;
        break;
      }
    }
  }
  
  return currentSection;
};
