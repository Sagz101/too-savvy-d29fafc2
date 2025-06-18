
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

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 bg-gray-900/90 backdrop-blur-lg border border-cyan-400/30 rounded-2xl px-6 py-3 shadow-2xl">
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10 disabled:opacity-30"
        >
          <ChevronLeft size={16} />
          Previous
        </Button>

        <div className="flex items-center gap-2">
          {pages.map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "ghost"}
              size="sm"
              onClick={() => onPageChange(page)}
              className={`w-10 h-10 ${
                currentPage === page
                  ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white'
                  : 'text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10'
              }`}
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
          className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10 disabled:opacity-30"
        >
          Next
          <ChevronRight size={16} />
        </Button>
      </div>

      <div className="text-center mt-2">
        <span className="text-xs text-gray-400">
          Page {currentPage} of {totalPages}
        </span>
        <div className="w-full bg-gray-700 rounded-full h-1 mt-1">
          <div 
            className="bg-gradient-to-r from-cyan-400 to-purple-500 h-1 rounded-full transition-all duration-300"
            style={{ width: `${(currentPage / totalPages) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};
