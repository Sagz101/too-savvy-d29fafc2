
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
  const totalPages = 6;

  // Handle URL parameters for direct page access
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const page = parseInt(urlParams.get('page') || '1');
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  }, []);

  // Update URL when page changes
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.set('page', page.toString());
      window.history.pushState(null, '', newUrl);
      
      // Smooth scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Keyboard navigation
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
    <div className="min-h-screen bg-background text-foreground">
      <ImprovedModernHeader />
      <StickyNavigation currentPage={currentPage} />
      
      <main className="relative">
        <div 
          className="transition-all duration-500 ease-in-out"
          style={{ minHeight: 'calc(100vh - 140px)' }}
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
