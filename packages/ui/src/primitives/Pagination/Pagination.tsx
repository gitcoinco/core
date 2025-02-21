"use client";

import { ChevronLeft, ChevronRight, LucideChevronsRight, LucideChevronsLeft } from "lucide-react";
import { tv } from "tailwind-variants";

import { Select } from "@/primitives";

const paginationVariants = tv({
  slots: {
    container: "flex items-center justify-between gap-3 px-0 py-4 md:justify-end md:gap-6 md:px-6",
    button:
      "pagination-items rounded border border-transparent p-1 disabled:cursor-not-allowed disabled:border-transparent disabled:opacity-50",
    pageInfo: "pagination-text font-ui-sans text-xs font-medium md:text-sm",
    select: "w-fit border-pagination-border p-2",
    icons: "pagination-icons size-5",
  },
});

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  rowsPerPage: number;
  onPageChange: (page: number) => void;
  onRowsChange: (rows: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  rowsPerPage,
  onPageChange,
  onRowsChange,
}: PaginationProps) {
  const { container, button, pageInfo, select, icons } = paginationVariants();

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <div className={container()}>
      <div className="flex flex-col items-center gap-2 md:flex-row">
        <span className={pageInfo()}>Rows per page</span>
        <Select
          size="sm"
          className={select()}
          defaultValue={rowsPerPage.toString()}
          onValueChange={(value) => onRowsChange(parseInt(value))}
          side="right"
          align="start"
          options={[
            {
              items: [
                {
                  label: "10",
                  value: "10",
                },
                {
                  label: "20",
                  value: "20",
                },
                {
                  label: "50",
                  value: "50",
                },
              ],
            },
          ]}
        />
      </div>

      <div className="flex flex-col items-center gap-2 md:flex-row md:gap-6">
        <span className={pageInfo()}>{`Page ${currentPage} of ${totalPages}`}</span>
        <div className="flex h-6 items-center md:gap-2">
          <button onClick={() => onPageChange(1)} disabled={isFirstPage} className={button()}>
            <LucideChevronsLeft className={icons()} />
          </button>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={isFirstPage}
            className={button()}
          >
            <ChevronLeft className={icons()} />
          </button>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={isLastPage}
            className={button()}
          >
            <ChevronRight className={icons()} />
          </button>
          <button
            onClick={() => onPageChange(totalPages)}
            disabled={isLastPage}
            className={button()}
          >
            <LucideChevronsRight className={icons()} />
          </button>
        </div>
      </div>
    </div>
  );
}
