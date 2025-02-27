import {
  mockListGrid,
  mockListGridColumns,
  TListGridData,
  mockGetRowKey0,
} from "@repo/mocks/listGrid";
import type { Meta, StoryObj } from "@storybook/react";

import { ListGrid } from "./ListGrid";

const meta = {
  title: "Primitives/ListGrid",
  component: ListGrid,
} satisfies Meta;

export default meta;

type Story<T> = StoryObj<typeof ListGrid<T>>;

export const Default: Story<TListGridData> = {
  args: {
    data: mockListGrid,
    columns: mockListGridColumns,
    getRowKey: mockGetRowKey0,
  },
};
