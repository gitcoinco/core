import type { Meta, StoryObj } from "@storybook/react";

import { ListGrid } from "./ListGrid";
import { mockColumns0, mockGetRowKey0, TMockData0 } from "./mocks";
import { mockData0 } from "./mocks";

const meta = {
  title: "Primitives/ListGrid",
  component: ListGrid,
} satisfies Meta;

export default meta;

type Story<T> = StoryObj<typeof ListGrid<T>>;

export const Default: Story<TMockData0> = {
  args: {
    data: mockData0,
    columns: mockColumns0,
    getRowKey: mockGetRowKey0,
  },
};
