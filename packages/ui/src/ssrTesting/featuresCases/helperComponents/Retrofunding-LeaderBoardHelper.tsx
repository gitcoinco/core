"use client";

import { Leaderboard } from "@/features/retrofunding/components/Leaderboard";

export const LeaderboardHelper = (
  props: Omit<React.ComponentProps<typeof Leaderboard>, "paginationProps">,
) => {
  const fullProps = {
    ...props,
    paginationProps: {
      currentPage: 1,
      totalPages: 1,
      rowsPerPage: 10,
      onPageChange: () => console.log("onPageChange"),
      onRowsChange: () => console.log("onRowsChange"),
    },
  };
  return <Leaderboard {...fullProps} />;
};
