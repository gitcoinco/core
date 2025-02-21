import { SSRComponent } from "@/ssrTesting/types";

import { Pagination } from "./Pagination";

const paginationSSR: SSRComponent<React.ComponentProps<typeof Pagination>> = {
  component: Pagination,
  cases: [
    {
      label: "Default",
      props: {
        currentPage: 1,
        totalPages: 10,
        rowsPerPage: 10,
        onPageChange: () => null,
        onRowsChange: () => null,
      },
    },
  ],
};

export default paginationSSR;
