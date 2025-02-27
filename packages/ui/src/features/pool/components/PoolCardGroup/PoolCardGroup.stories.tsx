import { PoolStatus, PoolType } from "@gitcoin/types";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import { PoolCardGroup } from "./PoolCardGroup";
import { mockPools } from "./mocks";

const onPoolClick = action("Pool Clicked!");

const pools = mockPools.map((pool) => ({
  ...pool,
  onClick: (pool?: { chainId: number; roundId: string }) => onPoolClick(pool),
}));

const meta = {
  title: "Features/Pool/PoolCardGroup",
  component: PoolCardGroup,
  args: {
    pools,
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof PoolCardGroup>;

export const Default: Story = {};

export const withJustifyNormal: Story = {
  args: {
    pools,
  },
};

export const withJustifyStart: Story = {
  args: {
    pools: pools,
    justify: "start",
  },
};

export const withJustifyEnd: Story = {
  args: {
    pools: pools,
    justify: "end",
  },
};

export const withJustifyCenter: Story = {
  args: {
    pools: pools,
    justify: "center",
  },
};

export const withJustifyBetween: Story = {
  args: {
    pools: pools,
    justify: "between",
  },
};

export const withJustifyAround: Story = {
  args: {
    pools: pools,
    justify: "around",
  },
};

export const withJustifyEvenly: Story = {
  args: {
    pools: pools,
    justify: "evenly",
  },
};
