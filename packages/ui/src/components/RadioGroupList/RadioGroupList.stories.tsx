import { Meta, StoryObj } from "@storybook/react";

import { RadioGroupList } from "./RadioGroupList";
import { radioGroups, radioGroupsWithDisabledOptions } from "./mocks";

const meta: Meta<typeof RadioGroupList> = {
  title: "Components/RadioGroupList",
  component: RadioGroupList,
  argTypes: {
    onSelectionChange: {
      action: "selection changed",
    },
  },
} satisfies Meta<typeof RadioGroupList>;

export default meta;

type Story = StoryObj<typeof RadioGroupList>;

export const Default: Story = {
  render: () => <RadioGroupList groups={radioGroups} />,
};

export const WithDisabledOptions: Story = {
  render: () => <RadioGroupList groups={radioGroupsWithDisabledOptions} />,
};
