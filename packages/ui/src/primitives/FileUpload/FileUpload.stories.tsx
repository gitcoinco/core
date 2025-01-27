import { Meta, StoryObj } from "@storybook/react";

import { FileUpload } from "./FileUpload";

const meta: Meta<typeof FileUpload> = {
  title: "Primitives/FileUpload",
  component: FileUpload,
};

export default meta;
export const Default: StoryObj<any> = {
  decorators: [(Story) => <Story />],
  render: (args) => {
    return (
      <div>
        <FileUpload {...args} />
      </div>
    );
  },
};
