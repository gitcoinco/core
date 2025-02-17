import plugin from "tailwindcss/plugin";

export const paginationPlugin = plugin(({ addComponents }) => {
  const paginationComponents = {
    ".pagination-items:hover": {
      border: "1px solid hsl(var(--twc-pagination-border))",
      backgroundColor: "hsl(var(--twc-pagination-background))",
    },
    ".pagination-icons": {
      color: "hsl(var(--twc-pagination-icons))",
    },
    ".pagination-text": {
      color: "hsl(var(--twc-pagination-text))",
    },
  };
  addComponents(paginationComponents);
});
