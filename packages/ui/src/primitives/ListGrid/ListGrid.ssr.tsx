import { SSRComponent } from "@/types";

import { ListGrid } from "./ListGrid";
import { mockColumns0, mockData0, mockGetRowKey0 } from "./mocks";

const listGridSSR: SSRComponent<React.ComponentProps<typeof ListGrid>> = {
  component: ListGrid,
  cases: [
    {
      label: "Default",
      props: {
        data: mockData0,
        columns: mockColumns0,
        getRowKey: mockGetRowKey0,
      },
    },
  ],
};

export default listGridSSR;
