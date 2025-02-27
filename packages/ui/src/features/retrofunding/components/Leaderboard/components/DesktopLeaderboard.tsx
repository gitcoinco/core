import React, { useState } from "react";

import { cn } from "@gitcoin/utils";
import { tv } from "tailwind-variants";

import { IconWithTooltip } from "@/components/IconWithTooltip";
import { Icon, IconType } from "@/primitives/Icon";
import { Pagination } from "@/primitives/Pagination";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/primitives/Table";

import { LeaderboardProps, SortConfig } from "../types";
import { ProjectInfo } from "./ProjectInfo";

const desktopLeaderboard = tv({
  slots: {
    headerText: "leaderboard-table-headers font-ui-sans text-2xl leading-loose",
    rankBadge:
      "leaderboard-rank-default flex size-7 items-center justify-center rounded-full bg-none text-right text-lg",
    firstRankBadge: "leaderboard-rank-1st",
    secondRankBadge: "leaderboard-rank-2nd",
    projectName: "leaderboard-table-headers font-ui-sans text-xl font-normal leading-7",
    metricValue: "leaderboard-table-items font-ui-sans text-xl font-normal leading-7",
    icon: "leaderboard-table-icons size-5 shrink-0 cursor-pointer",
    tooltipText: "leaderboard-table-items text-sm",
  },
});

export const DesktopLeaderboard = ({
  projects,
  metrics,
  paginationProps,
  expandedProject,
  setExpandedProject,
}: LeaderboardProps) => {
  const {
    headerText,
    rankBadge,
    firstRankBadge,
    secondRankBadge,
    projectName,
    metricValue,
    icon,
    tooltipText,
  } = desktopLeaderboard();
  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: "rank", direction: "asc" });
  const ranks = Object.keys(projects).map(Number);
  const metricIds = Object.keys(metrics);

  const sortedProjects = ranks
    .map((rank) => ({
      originalRank: rank,
      ...projects[rank],
    }))
    .sort((a, b) => {
      if (sortConfig.key === "rank") {
        return sortConfig.direction === "asc"
          ? a.originalRank - b.originalRank
          : b.originalRank - a.originalRank;
      }

      const aValue = a.metrics[sortConfig.key];
      const bValue = b.metrics[sortConfig.key];

      if (sortConfig.direction === "asc") {
        return aValue - bValue;
      }
      return bValue - aValue;
    });

  const paginatedProjects = sortedProjects.slice(
    (paginationProps.currentPage - 1) * paginationProps.rowsPerPage,
    paginationProps.currentPage * paginationProps.rowsPerPage,
  );

  const handleSort = (key: "rank" | string) => {
    setSortConfig((currentConfig) => {
      if (currentConfig.key === key) {
        return {
          key,
          direction: currentConfig.direction === "asc" ? "desc" : "asc",
        };
      }
      return { key, direction: "desc" };
    });
  };

  return (
    <div className="hidden flex-col gap-4 overflow-y-auto md:flex">
      <Table className="table-auto">
        <TableHeader>
          <TableRow className="border-none">
            <TableHead
              className="w-32 cursor-pointer px-7 text-left"
              onClick={() => handleSort("rank")}
            >
              <div className="flex items-center gap-1">
                <span className={headerText()}>Rank</span>
                <Icon type={IconType.SORT} className={icon()} />
              </div>
            </TableHead>
            <TableHead className="max-w-80 px-7">
              <span className={headerText()}>Project name</span>
            </TableHead>
            {metricIds.map((metricId) => (
              <TableHead
                key={metricId}
                title={metrics[metricId].description}
                className={cn("w-fit px-7 text-left")}
              >
                <div className="flex items-center gap-1">
                  <span className={cn("truncate", headerText())}>{metrics[metricId].name}</span>
                  <IconWithTooltip
                    iconType={IconType.INFORMATION_CIRCLE}
                    tooltipText={metrics[metricId].description}
                    iconClassName={cn(icon(), "fill-none stroke-leaderboard-tableIcons")}
                    tooltipClassName={tooltipText()}
                  />
                  <Icon
                    type={IconType.SORT}
                    className={cn(icon())}
                    onClick={() => handleSort(metricId)}
                  />
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedProjects.map((projectData) => {
            const { project, metrics: projectMetrics, originalRank } = projectData;
            const isExpanded = expandedProject === originalRank;
            return (
              <React.Fragment key={originalRank}>
                <TableRow className="border-b border-leaderboard-border">
                  <TableCell className="pl-12">
                    <span
                      className={cn(
                        rankBadge(),
                        originalRank === 1 && firstRankBadge(),
                        originalRank === 2 && secondRankBadge(),
                      )}
                    >
                      {originalRank}
                    </span>
                  </TableCell>
                  <TableCell className="max-w-80 px-7">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex w-fit items-center gap-3">
                        <div className="size-9 shrink-0 overflow-hidden rounded-full">
                          <img
                            src={project.logoImg}
                            alt={project.name}
                            className="h-full w-full shrink-0 object-cover"
                          />
                        </div>
                        <span className={cn(projectName())}>{project.name}</span>
                      </div>
                      <Icon
                        type={IconType.CHEVRON_DOWN}
                        className={cn(icon(), "transition-transform", isExpanded && "rotate-180")}
                        onClick={() =>
                          setExpandedProject(expandedProject === originalRank ? null : originalRank)
                        }
                      />
                    </div>
                  </TableCell>
                  {metricIds.map((metricId) => (
                    <TableCell key={metricId} className="px-7">
                      <span className={cn(metricValue())}>{projectMetrics[metricId]}</span>
                    </TableCell>
                  ))}
                </TableRow>
                {isExpanded && (
                  <TableRow className="z-20 border-none hover:bg-transparent">
                    <TableCell colSpan={metricIds.length + 2} className="px-7">
                      <ProjectInfo project={project} />
                    </TableCell>
                  </TableRow>
                )}
              </React.Fragment>
            );
          })}
        </TableBody>
      </Table>
      <div className="w-full border-none bg-transparent px-0">
        <div className="border-none bg-transparent px-0 py-0 hover:bg-transparent">
          <Pagination
            currentPage={paginationProps.currentPage}
            totalPages={paginationProps.totalPages}
            rowsPerPage={paginationProps.rowsPerPage}
            onPageChange={paginationProps.onPageChange}
            onRowsChange={paginationProps.onRowsChange}
          />
        </div>
      </div>
    </div>
  );
};
