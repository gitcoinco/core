import { Markdown } from "@/primitives/Markdown/Markdown";
import { SSRComponent } from "@/types";

const markdownSSR: SSRComponent<React.ComponentProps<typeof Markdown>> = {
  component: Markdown,
  isClient: true,
  isFullNext: false,
  tooltipMessage: "document error, use dynamic",
  cases: [
    {
      label: "Basic Markdown",
      props: {
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
    },
    {
      label: "Small Container",
      props: {
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
    },
    {
      label: "Large Container",
      props: {
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
    },
  ],
};

export default markdownSSR;
