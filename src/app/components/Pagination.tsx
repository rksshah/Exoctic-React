import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { clsx } from 'clsx';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalItems?: number;
  itemsPerPage?: number;
  className?: string;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  itemsPerPage,
  className,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  // Build page number array with ellipsis logic
  const getPageNumbers = (): (number | 'ellipsis')[] => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages: (number | 'ellipsis')[] = [];

    // Always show first page
    pages.push(1);

    if (currentPage > 3) {
      pages.push('ellipsis');
    }

    // Show pages around current
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push('ellipsis');
    }

    // Always show last page
    pages.push(totalPages);

    return pages;
  };

  const pageNumbers = getPageNumbers();
  const startItem = itemsPerPage ? (currentPage - 1) * itemsPerPage + 1 : undefined;
  const endItem = itemsPerPage && totalItems
    ? Math.min(currentPage * itemsPerPage, totalItems)
    : undefined;

  return (
    <div className={clsx('mt-16 flex flex-col items-center gap-4', className)}>
      {/* Item count info */}
      {totalItems !== undefined && startItem && endItem && (
        <p className="text-xs text-gray-400 tracking-widest uppercase">
          Showing {startItem}–{endItem} of {totalItems} products
        </p>
      )}

      {/* Controls */}
      <div className="flex items-center gap-1">
        {/* Previous */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Previous page"
          className={clsx(
            'flex items-center gap-1.5 px-3 h-9 text-xs font-bold uppercase tracking-widest transition-all',
            currentPage === 1
              ? 'text-gray-300 cursor-not-allowed'
              : 'text-[#555348] hover:text-black hover:bg-gray-50'
          )}
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Prev</span>
        </button>

        {/* Page Numbers */}
        <div className="flex items-center gap-1 mx-2">
          {pageNumbers.map((item, idx) =>
            item === 'ellipsis' ? (
              <span
                key={`ellipsis-${idx}`}
                className="w-9 h-9 flex items-center justify-center text-xs text-gray-400 select-none"
              >
                &hellip;
              </span>
            ) : (
              <button
                key={item}
                onClick={() => onPageChange(item)}
                aria-label={`Page ${item}`}
                aria-current={currentPage === item ? 'page' : undefined}
                className={clsx(
                  'w-9 h-9 flex items-center justify-center text-xs font-bold tracking-wider transition-all',
                  currentPage === item
                    ? 'bg-[#1a1a1a] text-white'
                    : 'text-[#555348] hover:bg-gray-100 hover:text-black'
                )}
              >
                {item}
              </button>
            )
          )}
        </div>

        {/* Next */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Next page"
          className={clsx(
            'flex items-center gap-1.5 px-3 h-9 text-xs font-bold uppercase tracking-widest transition-all',
            currentPage === totalPages
              ? 'text-gray-300 cursor-not-allowed'
              : 'text-[#555348] hover:text-black hover:bg-gray-50'
          )}
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
