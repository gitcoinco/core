import { tv } from "tailwind-variants";

import { IconWithTooltip } from "@/components/IconWithTooltip";
import { cn } from "@/lib/utils";
import { IconType, Icon } from "@/primitives/Icon";
import { Pagination } from "@/primitives/Pagination";

import { LeaderboardProps } from "../types";
import { ProjectInfo } from "./ProjectInfo";

const mobileLeaderboard = tv({
  slots: {
    rankBadge:
      "leaderboard-rank-default flex size-7 items-center justify-center rounded-full bg-none text-right text-lg",
    firstRankBadge: "leaderboard-rank-1st",
    secondRankBadge: "leaderboard-rank-2nd",
    projectName: "leaderboard-table-headers font-ui-sans text-lg font-medium",
    metricLabel: "leaderboard-table-headers text-sm font-medium",
    metricValue: "leaderboard-table-items font-ui-sans text-base font-medium",
    itemContainer: "leaderboard-border overflow-hidden rounded-lg border bg-transparent",
    icon: "leaderboard-table-icons size-5 shrink-0 cursor-pointer",
    tooltipText: "leaderboard-table-items w-36 text-sm",
  },
});

export const MobileLeaderboard = ({
  projects,
  metrics,
  paginationProps,
  expandedProject,
  setExpandedProject,
  sortConfig,
  setSortConfig,
}: LeaderboardProps) => {
  const {
    rankBadge,
    firstRankBadge,
    secondRankBadge,
    projectName,
    metricLabel,
    metricValue,
    itemContainer,
    icon,
    tooltipText,
  } = mobileLeaderboard();

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
    setSortConfig({
      key,
      direction: sortConfig.key === key && sortConfig.direction === "asc" ? "desc" : "asc",
    });
  };

  return (
    <div className="space-y-4 p-1">
      {paginatedProjects.map((projectData) => {
        const { project, metrics: projectMetrics, originalRank } = projectData;
        const isExpanded = expandedProject === originalRank;
        return (
          <div key={originalRank} className={itemContainer()}>
            {/* Header with Rank and Name */}
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      rankBadge(),
                      originalRank === 1 && firstRankBadge(),
                      originalRank === 2 && secondRankBadge(),
                    )}
                    onClick={() => handleSort("rank")}
                  >
                    {originalRank}
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="size-8 shrink-0 overflow-hidden rounded-full">
                      <img
                        src={project.logoImg}
                        alt={project.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span className={projectName()}>{project.name}</span>
                  </div>
                </div>
                <Icon
                  type={IconType.CHEVRON_DOWN}
                  className={cn(icon(), "transition-transform", isExpanded && "rotate-180")}
                  onClick={() =>
                    setExpandedProject(expandedProject === originalRank ? null : originalRank)
                  }
                />
              </div>

              {/* Metrics */}
              <div className="mt-4 grid grid-cols-2 gap-4 overflow-hidden transition-all">
                {metricIds.map((metricId) => (
                  <div key={metricId} className="space-y-1">
                    <div className="flex items-center gap-1">
                      <span className={metricLabel()} onClick={() => handleSort(metricId)}>
                        {metrics[metricId].name}
                      </span>
                      {metrics[metricId].description && (
                        <IconWithTooltip
                          iconType={IconType.INFORMATION_CIRCLE}
                          tooltipText={metrics[metricId].description}
                          iconClassName={cn(icon(), "fill-none stroke-leaderboard-tableIcons")}
                          tooltipClassName={tooltipText()}
                        />
                      )}
                      <Icon
                        type={IconType.SORT}
                        className={cn(icon())}
                        onClick={() => handleSort(metricId)}
                      />
                    </div>
                    <div className={metricValue()}>{projectMetrics[metricId]}</div>
                  </div>
                ))}
              </div>
            </div>
            {isExpanded && <ProjectInfo project={project} />}
          </div>
        );
      })}
      <Pagination
        currentPage={paginationProps.currentPage}
        totalPages={paginationProps.totalPages}
        rowsPerPage={paginationProps.rowsPerPage}
        onPageChange={paginationProps.onPageChange}
        onRowsChange={paginationProps.onRowsChange}
      />
    </div>
  );
};
