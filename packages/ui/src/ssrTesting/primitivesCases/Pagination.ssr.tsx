import { SSRComponent } from "@gitcoin/types";

import { Pagination } from "@/primitives/Pagination/Pagination";

const paginationSSR: SSRComponent<React.ComponentProps<typeof Pagination>> = {
  component: Pagination,
  isClient: true,
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
