import { Meta, StoryObj } from "@storybook/react";

import { Markdown } from "./Markdown";

const meta: Meta<typeof Markdown> = {
  title: "Primitives/Markdown",
  component: Markdown,
  args: {
    children: `
---
## Welcome to Markdown Demo
Explore various Markdown features in this example!

- **Bold text**
- *Italic text*
- [Links](https://example.com)
- Inline code: \`const x = 42;\`

---
    `,
  },
  argTypes: {
    children: {
      control: "text",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} satisfies Meta<typeof Markdown>;

export default meta;

type Story = StoryObj<typeof Markdown>;

export const BasicMarkdown: Story = {};

export const SmallMarkdownContainer: Story = {
  args: {
    children: `
## Small Container Example
This is displayed in a smaller container to showcase content in compact spaces.

### List Example
- List item one
- List item two
- List item three

\`Inline code example\`
`,
  },
  render: (args) => (
    <div className="flex w-[250px] list-disc flex-col items-center justify-center rounded-lg border border-grey-300 p-6 shadow-sm">
      <Markdown {...args} />
    </div>
  ),
};

export const LargeMarkdownContainer: Story = {
  args: {
    children: `
# Large Container with Rich Content
This larger container is perfect for showcasing detailed Markdown features, including headers, lists, and code blocks.

## Subheader Example
Here’s an example of a list with more items:
- Feature one
- Feature two
- Feature three

### Another Section
1. First item
2. Second item
3. Third item

> "This is a blockquote example to highlight quoted text."

\`\`\`javascript
// JavaScript code block
function greet() {
  console.log("Hello, world!");
}
greet();
\`\`\`
    `,
  },
  render: (args) => (
    <div className="flex w-full items-center justify-center rounded-lg border border-grey-300 p-10 shadow-lg">
      <Markdown {...args} />
    </div>
  ),
};

export const LargeMarkdownCenteredContainer: Story = {
  args: {
    children: `
## Centered Container Example
This example showcases a centered container with various Markdown features.

 # Task List
 - [x] Complete Markdown demo
 - [ ] Add new features
 - [ ] Write documentation

## Data Table
| Feature        | Description              |
| -------------- | ------------------------ |
| **Bold Text**  | Supports bold styling    |
| *Italic Text*  | Also supports italics    |
| Inline Code    | \`console.log("Code")\`   |

~~Strikethrough example~~

\`\`\`python
# Python code example
def hello():
    print("Hello, centered world!")
hello()
\`\`\`
`,
  },
  render: (args) => (
    <div className="flex w-full items-center justify-center rounded-lg border border-grey-300 p-10 shadow-lg">
      <Markdown {...args} />
    </div>
  ),
};
