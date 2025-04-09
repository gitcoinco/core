"use client";

import { useMemo, useState } from "react";

import { tv, type VariantProps } from "tailwind-variants";
import { useMediaQuery } from "usehooks-ts";

import { cn } from "@/lib/utils";

import { DesktopLeaderboard, MobileLeaderboard } from "./components";
import { LeaderboardProps } from "./types";

const leaderboardVariants = tv({
  base: "leaderboard-container",
  variants: {
    padding: {
      none: "p-0",
      sm: "p-2 md:p-2",
      md: "p-2 md:p-4",
      lg: "p-2 md:p-6",
      xl: "p-2 md:p-8",
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
      "3xl": "rounded-3xl",
    },
    size: {
      default:
        "[&_td:first-child]:mt-1 [&_td:first-child]:w-12 [&_td:first-child]:flex-1 [&_td:first-child]:flex-col ",
      slim: "[&_.leaderboard-rank-default]:size-6 [&_.leaderboard-rank-default]:text-base [&_.leaderboard-table-headers]:text-lg [&_.leaderboard-table-icons]:size-4 [&_.leaderboard-table-items]:text-base [&_.metric-value]:text-base [&_.metric-value]:leading-6 [&_.project-logo]:size-7 [&_.project-name]:text-lg [&_.project-name]:leading-6 [&_td:first-child]:flex [&_td:first-child]:w-12 [&_td:first-child]:justify-center [&_td:not(:nth-child(2))]:text-center [&_td]:px-2 [&_th:first-child]:w-12 [&_th:not(:nth-child(2))]:text-center [&_th:nth-child(2)]:min-w-[300px] [&_th]:px-2",
    },
  },
  defaultVariants: {
    padding: "xl",
    radius: "2xl",
    size: "default",
  },
});

interface LeaderboardPropsWithVariants
  extends VariantProps<typeof leaderboardVariants>,
    Omit<LeaderboardProps, "expandedProject" | "setExpandedProject" | "paginationProps"> {}

export const Leaderboard = ({ projects, metrics, ...props }: LeaderboardPropsWithVariants) => {
  const leaderboardClassNames = leaderboardVariants({
    ...props,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const isDesktopView = useMediaQuery("(min-width: 768px)");

  const totalProjects = Object.keys(projects).length;

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(Object.keys(projects).length / itemsPerPage)),
    [projects, itemsPerPage],
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleRowsChange = (newRowsPerPage: number) => {
    const newTotalPages = Math.ceil(totalProjects / newRowsPerPage);

    // Calculate which page should contain the first item of the current page
    const firstItemIndex = (currentPage - 1) * itemsPerPage;
    const newCurrentPage = Math.ceil((firstItemIndex + 1) / newRowsPerPage);

    setItemsPerPage(newRowsPerPage);
    setCurrentPage(Math.min(newCurrentPage, newTotalPages));
  };

  return (
    <div className={cn(leaderboardClassNames, "w-full")}>
      {isDesktopView ? (
        <DesktopLeaderboard
          key={`desktop-leaderboard-${currentPage}`}
          projects={projects}
          metrics={metrics}
          paginationProps={{
            currentPage,
            totalPages,
            rowsPerPage: itemsPerPage,
            onPageChange: handlePageChange,
            onRowsChange: handleRowsChange,
          }}
          expandedProject={expandedProject}
          setExpandedProject={setExpandedProject}
        />
      ) : (
        <MobileLeaderboard
          key={`mobile-leaderboard-${currentPage}`}
          projects={projects}
          metrics={metrics}
          paginationProps={{
            currentPage,
            totalPages,
            rowsPerPage: itemsPerPage,
            onPageChange: handlePageChange,
            onRowsChange: handleRowsChange,
          }}
          expandedProject={expandedProject}
          setExpandedProject={setExpandedProject}
        />
      )}
    </div>
  );
};
