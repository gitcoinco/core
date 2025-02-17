import { PropsWithChildren } from "react";

import { tv } from "tailwind-variants";

import { Button } from "@/primitives";

const PRE_TITLE = "ERM... THIS IS AWKWARD";
const TITLE = "Page not found";
const DESCRIPTION = "Looks like the page you are looking for has been moved or removed.";

const variants = tv({
  slots: {
    container: "flex h-full flex-col items-center justify-center",
    content: "flex max-w-[80%] flex-col  gap-2 md:max-w-[60%] lg:max-w-[40%]",
    preTitle: "font-ui-mono text-xs/[20px] font-medium sm:text-sm/[24px]",
    title: "font-ui-sans text-3xl font-semibold sm:text-5xl",
    description: "font-ui-sans text-base font-medium sm:text-lg",
  },
  variants: {
    description: {
      default: "font-ui-sans text-5xl font-semibold",
    },
  },
});

export interface NotFoundPageProps extends PropsWithChildren {
  description?: string;
  button?: {
    label: string;
    onClick: () => void;
  };
}

export const NotFoundPage = ({
  description = DESCRIPTION,
  button,
  children,
}: NotFoundPageProps) => {
  const { container, content, preTitle, title, description: descriptionStyle } = variants();

  return (
    <div className={container()}>
      <div className={content()}>
        <div className={preTitle()}>{PRE_TITLE}</div>
        <div className={title()}>{TITLE}</div>
        {description && <div className={descriptionStyle()}>{description}</div>}
        {children}
        {button && (
          <Button className="w-fit" size="lg" onClick={button.onClick} value={button.label} />
        )}
      </div>
    </div>
  );
};
