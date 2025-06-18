
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationNavigationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const PaginationNavigation: React.FC<PaginationNavigationProps> = ({
  currentPage,
  totalPages,
  onPageChange
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const progressPercentage = (currentPage / totalPages) * 100;

  const pageColors = [
    '#00FFCC', // Home
    '#FF00FF', // Create
    '#00FFCC', // Build
    '#FFFF00', // Govern
    '#FF00FF', // Learn
    '#00FFCC'  // Ecosystem
  ];

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      {/* Progress Bar */}
      <div className="mb-4 w-80 bg-[#1A1A2E]/80 backdrop-blur-xl rounded-full p-1 border border-[#00FFCC]/20">
        <div className="text-center mb-2">
          <span className="text-xs text-white/70">
            Page {currentPage} of {totalPages}
          </span>
        </div>
        <div className="w-full bg-[#0F0F1A]/60 rounded-full h-2 overflow-hidden">
          <div 
            className="h-full rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${progressPercentage}%`,
              background: `linear-gradient(90deg, ${pageColors[currentPage - 1]}, ${pageColors[currentPage - 1]}80)`
            }}
          />
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="bg-[#0F0F1A]/90 backdrop-blur-xl border border-[#00FFCC]/30 rounded-2xl px-6 py-4 shadow-2xl shadow-[#00FFCC]/10">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="text-[#00FFCC] hover:text-[#00FFCC]/80 hover:bg-[#00FFCC]/10 disabled:opacity-30 border border-[#00FFCC]/20 hover:border-[#00FFCC]/40"
          >
            <ChevronLeft size={16} />
            Previous
          </Button>

          {/* Neon Dots Navigation */}
          <div className="flex items-center gap-3">
            {pages.map((page) => (
              <Button
                key={page}
                variant="ghost"
                size="sm"
                onClick={() => onPageChange(page)}
                className={`w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                  currentPage === page
                    ? 'text-white shadow-lg'
                    : 'text-white/50 hover:text-white hover:bg-white/5 border-white/20 hover:border-white/40'
                }`}
                style={{
                  ...(currentPage === page && {
                    backgroundColor: `${pageColors[page - 1]}20`,
                    borderColor: pageColors[page - 1],
                    boxShadow: `0 0 20px ${pageColors[page - 1]}40`,
                    color: pageColors[page - 1]
                  })
                }}
              >
                {page}
              </Button>
            ))}
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="text-[#00FFCC] hover:text-[#00FFCC]/80 hover:bg-[#00FFCC]/10 disabled:opacity-30 border border-[#00FFCC]/20 hover:border-[#00FFCC]/40"
          >
            Next
            <ChevronRight size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};
