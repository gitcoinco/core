"use client";

import { tv, VariantProps } from "tailwind-variants";

import { cn } from "@/lib";

// TODO: Add variant (h1, h2, h3, p, body, caption, label, link, div), size, weight, etc

const styles = tv({
  base: "",
  variants: {
    font: {
      sans: "font-ui-sans",
      mono: "font-ui-mono",
    },
  },
  defaultVariants: {
    font: "sans",
  },
});

export interface TypographyProps extends VariantProps<typeof styles> {
  className?: string;
  children: string;
}

export const Typography = ({ className, children, font }: TypographyProps) => {
  return <div className={cn(styles({ font }), className)}>{children}</div>;
};
