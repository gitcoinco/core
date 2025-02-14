import plugin from "tailwindcss/plugin";

export const leaderboardPlugin = plugin(({ addComponents }) => {
  const leaderboardComponents = {
    ".leaderboard-container": {
      border: "1px solid hsl(var(--twc-leaderboard-border))",
      backgroundImage: `linear-gradient(
          to bottom,
          hsl(var(--twc-leaderboard-gradientFrom)),
          hsl(var(--twc-leaderboard-gradientTo))
        )`,
    },
    ".leaderboard-border": {
      border: "1px solid hsl(var(--twc-leaderboard-border))",
    },
    ".leaderboard-rank-default": {
      backgroundColor: "hsl(var(--twc-leaderboard-ranksDefaultBg))",
      color: "hsl(var(--twc-leaderboard-ranksDefaultText))",
    },
    ".leaderboard-rank-1st": {
      backgroundColor: "hsl(var(--twc-leaderboard-ranks1stBg))",
      color: "hsl(var(--twc-leaderboard-ranks1stText))",
    },
    ".leaderboard-rank-2nd": {
      backgroundColor: "hsl(var(--twc-leaderboard-ranks2ndBg))",
      color: "hsl(var(--twc-leaderboard-ranks2ndText))",
    },
    ".leaderboard-table-icons": {
      fill: "hsl(var(--twc-leaderboard-tableIcons))",
    },
    ".leaderboard-table-headers": {
      color: "hsl(var(--twc-leaderboard-tableHeaders))",
    },
    ".leaderboard-table-items": {
      color: "hsl(var(--twc-leaderboard-tableItemsText))",
    },
    ".leaderboard-pagination-items:hover": {
      border: "1px solid hsl(var(--twc-leaderboard-paginationHoverBorder))",
      backgroundColor: "hsl(var(--twc-leaderboard-paginationHoverBg))",
    },
    ".leaderboard-pagination-icons": {
      color: "hsl(var(--twc-leaderboard-paginationIcons))",
    },
    ".leaderboard-pagination-text": {
      color: "hsl(var(--twc-leaderboard-paginationText))",
    },
    ".leaderboard-project-info-link": {
      color: "hsl(var(--twc-leaderboard-projectInfoLink))",
    },
    ".leaderboard-project-info-description": {
      color: "hsl(var(--twc-leaderboard-projectInfoDescription))",
    },
    ".leaderboard-project-info-icons": {
      fill: "hsl(var(--twc-leaderboard-projectInfoIcons))",
    },
  };
  addComponents(leaderboardComponents);
});
