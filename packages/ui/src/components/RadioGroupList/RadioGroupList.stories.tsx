import { Meta, StoryObj } from "@storybook/react";

import { RadioGroupList } from "./RadioGroupList";

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

const radioGroups = [
  {
    id: "group1",
    heading: "Group 1 Heading",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
    ],
  },
  {
    id: "group2",
    heading: "Group 2 Heading",
    options: [
      { value: "optionA", label: "Option A" },
      { value: "optionB", label: "Option B" },
    ],
  },
];

export const Default: Story = {
  render: () => <RadioGroupList groups={radioGroups} />,
};

export const WithDisabledOptions: Story = {
  render: () => (
    <RadioGroupList
      groups={[
        {
          id: "group1",
          heading: "Group 1 Heading",
          options: [
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
          ],
        },
        {
          id: "group2",
          heading: "Group 2 Heading",
          options: [
            { value: "optionA", label: "Option A" },
            { value: "optionB", label: "Option B" },
            { value: "optionC", label: "Option C", disabled: true },
          ],
        },
      ]}
    />
  ),
};
