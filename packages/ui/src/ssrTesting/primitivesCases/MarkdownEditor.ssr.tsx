import { SSRComponent } from "@gitcoin/types";

import { MarkdownEditor } from "@/primitives";

const markdownEditorSSR: SSRComponent<React.ComponentProps<typeof MarkdownEditor>> = {
  component: MarkdownEditor,
  isClient: true,
  isFullNext: false,
  tooltipMessage: "document error, use dynamic",
  cases: [
    {
      label: "Basic Markdown Editor",
      props: {},
    },
  ],
};

export default markdownEditorSSR;
