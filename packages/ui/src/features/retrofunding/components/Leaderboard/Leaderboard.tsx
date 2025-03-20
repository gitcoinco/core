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
  },
  defaultVariants: {
    padding: "xl",
    radius: "2xl",
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
