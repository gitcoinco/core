import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import { PoolList } from "./PoolList";
import { mockPools } from "./mocks";

const onPoolClick = action("Pool clicked!");

const meta: Meta<typeof PoolList> = {
  title: "Features/Pool/PoolList",
  component: PoolList,
};

export default meta;
type Story = StoryObj<typeof PoolList>;

export const Default: Story = {
  args: {
    pools: mockPools.map((pool) => ({
      ...pool,
      onClick: (pool?: { chainId: number; roundId: string }) => onPoolClick(pool),
    })),
    title: "Available Pools",
    noPoolsPlaceholder: "No pools found",
  },
};

export const Empty: Story = {
  args: {
    ...Default.args,
    pools: [],
  },
};
