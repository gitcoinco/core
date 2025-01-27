"use client";

import MarkdownPreview from "@uiw/react-markdown-preview";

import { withSSR } from "@/lib/withSSR";

const MarkdownComponent = ({ children }: { children: string }) => {
  return (
    <MarkdownPreview
      source={children}
      wrapperElement={{
        "data-color-mode": "light",
      }}
    />
  );
};

export const Markdown = withSSR(MarkdownComponent);
