import { ListGrid, ListGridProps } from "@/primitives/ListGrid/ListGrid";
import { mockColumns0, mockData0, mockGetRowKey0 } from "@/primitives/ListGrid/mocks";
import { SSRComponent } from "@/types";

const listGridSSR: SSRComponent<ListGridProps<(typeof mockData0)[0]>> = {
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
