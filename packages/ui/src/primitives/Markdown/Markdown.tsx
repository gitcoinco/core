"use client";

import React, { Suspense } from "react";

import { type MarkdownPreviewProps } from "@uiw/react-markdown-preview";

const MarkdownPreview = React.lazy<React.ComponentType<MarkdownPreviewProps>>(
  () => import("@uiw/react-markdown-preview"),
);

export const Markdown = ({ children }: { children: string }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MarkdownPreview
        source={children}
        wrapperElement={{
          "data-color-mode": "light",
        }}
      />
    </Suspense>
  );
};
