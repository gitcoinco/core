"use client";

import ReactMarkdown from "react-markdown";

import rehypeHighlight from "rehype-highlight";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

import { withSSR } from "@/lib/withSSR";

export const MarkdownComponent = ({ children }: { children?: string }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeKatex, rehypeHighlight]}
    >
      {children}
    </ReactMarkdown>
  );
};
export const Markdown = withSSR(MarkdownComponent);
