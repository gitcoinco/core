import { Meta, StoryObj } from "@storybook/react";

import { IconType } from "@/primitives/Icon";

import { IconWithTooltip } from "./IconWithTooltip";

const meta: Meta<typeof IconWithTooltip> = {
  title: "Components/IconWithTooltip",
  component: IconWithTooltip,
};

export default meta;

type Story = StoryObj<typeof IconWithTooltip>;

const iconTypes = Object.values(IconType);

export const AllIcons: Story = {
  render: () => (
    <div className="grid grid-cols-6 gap-20 p-10">
      {iconTypes.map((iconType) => (
        <div key={iconType} className="flex justify-center">
          <IconWithTooltip iconType={iconType} tooltipText={`This is ${iconType} icon`} />
        </div>
      ))}
    </div>
  ),
};
