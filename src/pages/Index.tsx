
import React, { useState, useEffect } from 'react';
import { ImprovedModernHeader } from '@/components/layout/ImprovedModernHeader';
import { StickyNavigation } from '@/components/ui/sticky-navigation';
import { PaginationNavigation } from '@/components/ui/pagination-navigation';
import { HomePage } from '@/components/sections/HomePage';
import { CreatePage } from '@/components/sections/CreatePage';
import { BuildPage } from '@/components/sections/BuildPage';
import { GovernPage } from '@/components/sections/GovernPage';
import { LearnPage } from '@/components/sections/LearnPage';
import { EcosystemPage } from '@/components/sections/EcosystemPage';
import { Footer } from '@/components/layout/Footer';

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const totalPages = 6;

  // Handle URL parameters for direct page access
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const page = parseInt(urlParams.get('page') || '1');
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  }, []);

  // Enhanced page change with smooth transitions
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      setIsTransitioning(true);
      
      // Update URL
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.set('page', page.toString());
      window.history.pushState(null, '', newUrl);
      
      // Simulate AJAX loading with smooth transition
      setTimeout(() => {
        setCurrentPage(page);
        setIsTransitioning(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 200);
    }
  };

  // Keyboard navigation with accessibility
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft' && currentPage > 1) {
        handlePageChange(currentPage - 1);
      } else if (event.key === 'ArrowRight' && currentPage < totalPages) {
        handlePageChange(currentPage + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, totalPages]);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 1:
        return <HomePage />;
      case 2:
        return <CreatePage />;
      case 3:
        return <BuildPage />;
      case 4:
        return <GovernPage />;
      case 5:
        return <LearnPage />;
      case 6:
        return <EcosystemPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #0F0F1A 0%, #1A1A2E 100%)' }}>
      <ImprovedModernHeader />
      <StickyNavigation currentPage={currentPage} />
      
      <main className="relative">
        <div 
          className={`transition-all duration-300 ease-in-out ${
            isTransitioning ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
          }`}
          style={{ minHeight: 'calc(100vh - 140px)' }}
          role="main"
          aria-live="polite"
          aria-label={`Page ${currentPage} of ${totalPages}`}
        >
          {renderCurrentPage()}
        </div>
        
        <PaginationNavigation
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
