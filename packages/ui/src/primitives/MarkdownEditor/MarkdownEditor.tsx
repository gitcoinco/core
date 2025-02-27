"use client";

import React, { Component, ComponentProps, Suspense, useContext } from "react";

import { Markdown } from "@gitcoin/types";
import { cn } from "@gitcoin/utils";
import { ContextStore, EditorContext, MDEditorProps, commands } from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";

import { IconType } from "@/index";
import { Icon } from "@/primitives/Icon";

import "./markdown_editor.css";

export interface MarkdownEditorProps extends Markdown {
  onChange?: (value: string) => void;
  value?: string;
}

const MDEditor = React.lazy<React.ComponentType<MDEditorProps>>(
  () => import("@uiw/react-md-editor"),
);

const WriteButton = () => {
  const { preview, dispatch } = useContext<ContextStore>(EditorContext);

  const click = () => {
    if (dispatch) {
      dispatch({
        preview: "edit",
      });
    }
  };

  return (
    <span
      className={cn(
        "cursor-pointer rounded-tl-lg px-4 py-3 text-sm",
        preview === "edit" ? "rounded-tr-lg border-r border-t border-[#d0d7de] bg-white" : "",
      )}
      onClick={click}
    >
      Write
    </span>
  );
};

const PreviewButton = () => {
  const { preview, dispatch } = useContext<ContextStore>(EditorContext);

  const click = () => {
    if (dispatch) {
      dispatch({
        preview: "preview",
      });
    }
  };

  return (
    <span
      className={cn(
        "cursor-pointer px-4 py-3 text-sm",
        preview === "preview"
          ? " rounded-tl-lg rounded-tr-lg border-l border-r border-t border-[#d0d7de] bg-white"
          : "",
      )}
      onClick={click}
    >
      Preview
    </span>
  );
};

const editPreviewCommand = {
  name: "edit-preview",
  keyCommand: "edit-preview",
  icon: <WriteButton />,
};

const customPreviewCommand = {
  name: "custom-preview",
  keyCommand: "custom-preview",
  icon: <PreviewButton />,
};

const customTitleCommand = {
  ...commands.title,
  icon: <Icon type={IconType.HEADING} className="size-fit text-grey-900" />,
};

const customBoldCommand = {
  ...commands.bold,
  icon: <Icon type={IconType.BOLD} className="size-fit text-grey-900" />,
};

const customItalicCommand = {
  ...commands.italic,
  icon: <Icon type={IconType.ITALIC} className="size-fit text-grey-900" />,
};

export const MarkdownEditor = ({ ref, ...props }: MarkdownEditorProps & ComponentProps<"div">) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MDEditor
        commands={[editPreviewCommand, customPreviewCommand]}
        // TODO: Customize commands Icons
        extraCommands={[
          customTitleCommand,
          customBoldCommand,
          customItalicCommand,
          commands.divider,
          commands.link,
          commands.image,
        ]}
        ref={ref as React.Ref<Component>}
        preview="edit"
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]],
        }}
        value={props.value ?? props.placeholder}
        onChange={(val) => props.onChange?.(val ?? "")}
        data-color-mode="light"
      />
    </Suspense>
  );
};
