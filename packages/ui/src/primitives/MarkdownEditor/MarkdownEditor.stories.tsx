// src/primitives/MarkdownEditor/MarkdownEditor.stories.tsx
import React, { useState } from "react";

import { Meta, StoryObj } from "@storybook/react";

import { MarkdownEditor } from "./MarkdownEditor";
import "./markdown_editor.css";

const meta = {
  title: "Primitives/MarkdownEditor",
  component: MarkdownEditor,
  argTypes: {
    value: { control: "text" },
    onChange: { action: "changed" },
  },
} satisfies Meta<typeof MarkdownEditor>;

export default meta;

type Story = StoryObj<typeof MarkdownEditor>;

const MarkdownEditorWithHooks = (args: React.ComponentProps<typeof MarkdownEditor>) => {
  const [value, setValue] = useState(args.value || "");

  const handleChange = (value?: string, event?: React.ChangeEvent<HTMLTextAreaElement>, state?: any) => {
    if (value !== undefined) {
      setValue(value);
    }
  };

  return <MarkdownEditor {...args} value={value} onChange={handleChange} />;
};

export const Default: Story = {
  render: (args) => <MarkdownEditorWithHooks {...args} />,
};
