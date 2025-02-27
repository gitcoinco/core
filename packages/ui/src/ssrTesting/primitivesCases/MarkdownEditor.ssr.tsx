import { MarkdownEditor } from "@/primitives";
import { SSRComponent } from "@/types";

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
