"use client";

import MarkdownPreview from "@uiw/react-markdown-preview";

export const Markdown = ({ children }: { children: string }) => {
  return (
    <MarkdownPreview
      source={children}
      wrapperElement={{
        "data-color-mode": "light",
      }}
    />
  );
};
