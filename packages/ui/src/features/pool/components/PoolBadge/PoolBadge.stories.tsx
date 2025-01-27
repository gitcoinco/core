import { Meta, StoryObj } from "@storybook/react";

import { PoolStatus, PoolType } from "@/types";

import { PoolBadge } from "./PoolBadge";

const meta: Meta<typeof PoolBadge> = {
  title: "Features/Pool/PoolBadge",
  component: PoolBadge,
  argTypes: {
    badge: {
      control: "select",
      options: [...Object.values(PoolStatus), ...Object.values(PoolType), undefined],
      description: "The specific badge value be it a PoolStatus or PoolType.",
    },
    // Exclude the type from the controls
    type: {
      control: "radio",
      options: ["poolStatus", "poolType"],
      description: "The type of badge to display.",
    },
  },
  args: {
    type: "poolStatus",
    badge: PoolStatus.ApplicationsInProgress,
  },
};

export default meta;
type Story = StoryObj<typeof PoolBadge>;

export const Default: Story = {};

export const PoolStatusStory: Story = {
  name: "Pool Status Badge",
  argTypes: {
    badge: {
      control: "select",
      options: [...Object.values(PoolStatus), undefined],
      description: "The specific badge value.",
    },
    // Exclude the type from the controls
    type: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    type: "poolStatus",
    badge: PoolStatus.ApplicationsInProgress,
  },
};

// Story for poolType
export const PoolTypeStory: Story = {
  name: "Pool Type Badge",
  argTypes: {
    badge: {
      control: "select",
      options: [...Object.values(PoolType), undefined],
      description: "The specific badge value.",
    },
    type: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    type: "poolType",
    badge: PoolType.QuadraticFunding,
  },
};

export const UndefinedPoolStatus: Story = {
  argTypes: {
    badge: {
      control: "select",
      options: [undefined],
      description: "The specific badge value.",
    },
    type: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    type: "poolStatus",
    badge: undefined,
  },
};

export const UndefinedPoolType: Story = {
  argTypes: {
    badge: {
      control: "select",
      options: [undefined],
      description: "The specific badge value.",
    },
    type: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    type: "poolType",
    badge: undefined,
  },
};

export const InvalidPoolStatus: Story = {
  argTypes: {
    badge: {
      control: "select",
      options: Object.values(PoolType),
    },
    type: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    type: "poolStatus",
    badge: PoolType.QuadraticFunding,
  },
};

export const InvalidPoolType: Story = {
  argTypes: {
    badge: {
      control: "select",
      options: Object.values(PoolStatus),
    },
    type: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    type: "poolType",
    badge: PoolStatus.ApplicationsInProgress,
  },
};
