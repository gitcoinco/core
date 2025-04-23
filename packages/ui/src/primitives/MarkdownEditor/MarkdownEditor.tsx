"use client";

import { forwardRef, useContext } from "react";
import { Suspense, lazy } from "react";
import { useState, useEffect, ComponentType } from "react";

import { cn } from "@gitcoin/utils";
import { EditorContext, commands, MDEditorProps } from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";

import { IconType } from "@/index";
import { Icon } from "@/primitives/Icon";

import "./markdown_editor.css";

const MDEditor = lazy(() => import("@uiw/react-md-editor"));

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

export const MarkdownEditor_ = forwardRef(function MarkdownEditorComponent({
  ...props
}: MDEditorProps) {
  return (
    <Suspense fallback={null}>
      <MDEditor
        commands={[editPreviewCommand, customPreviewCommand]}
        extraCommands={[
          customTitleCommand,
          customBoldCommand,
          customItalicCommand,
          commands.divider,
          commands.link,
          commands.image,
        ]}
        preview="edit"
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]],
        }}
        value={props.value}
        onChange={(val) => props.onChange?.(val ?? "")}
        data-color-mode="light"
      />
    </Suspense>
  );
});

export const MarkdownEditor = (props: MDEditorProps) => (
  <DynamicLoader component={MarkdownEditor_} {...props} />
);

export function DynamicLoader<T extends object>({
  component: Component,
  ...props
}: { component: ComponentType<T> } & T) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;
  return <Component {...(props as T)} />;
}
