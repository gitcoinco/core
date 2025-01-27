"use client";

import { ComponentProps, forwardRef, Ref, useContext } from "react";

import MDEditor, { commands, EditorContext } from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";

import { cn } from "@/lib";
import { Markdown } from "@/types";

import "./markdown_editor.css";

export interface MarkdownEditorProps extends Markdown {
  onChange?: (value: string) => void;
  value?: string;
}

const WriteButton = () => {
  const { preview, dispatch } = useContext(EditorContext);

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
  const { preview, dispatch } = useContext(EditorContext);

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

export const MarkdownEditor = forwardRef(function MarkdownEditorComponent(
  { ...props }: MarkdownEditorProps & ComponentProps<"div">,
  ref: Ref<HTMLDivElement>,
) {
  return (
    <MDEditor
      commands={[editPreviewCommand, customPreviewCommand]}
      // TODO: Customize commands Icons
      extraCommands={[
        commands.title,
        commands.bold,
        commands.italic,
        commands.divider,
        commands.link,
        commands.image,
      ]}
      ref={ref}
      preview="edit"
      previewOptions={{
        rehypePlugins: [[rehypeSanitize]],
      }}
      value={props.value ?? props.placeholder}
      onChange={(val) => props.onChange?.(val ?? "")}
      data-color-mode="light"
    />
  );
});
