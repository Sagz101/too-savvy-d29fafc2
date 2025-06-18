
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

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      {/* Progress Bar */}
      <div className="mb-4 w-80 bg-white/90 backdrop-blur-xl rounded-2xl p-4 border border-gray-200/50 shadow-xl">
        <div className="text-center mb-3">
          <span className="text-sm font-medium text-gray-600">
            Page {currentPage} of {totalPages}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="bg-white/90 backdrop-blur-xl border border-gray-200/50 rounded-2xl px-6 py-4 shadow-xl">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 disabled:opacity-30"
          >
            <ChevronLeft size={16} />
            Previous
          </Button>

          {/* Page Numbers */}
          <div className="flex items-center gap-2">
            {pages.map((page) => (
              <Button
                key={page}
                variant="ghost"
                size="sm"
                onClick={() => onPageChange(page)}
                className={`w-10 h-10 rounded-full transition-all duration-200 ${
                  currentPage === page
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-xl'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
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
            className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 disabled:opacity-30"
          >
            Next
            <ChevronRight size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};
