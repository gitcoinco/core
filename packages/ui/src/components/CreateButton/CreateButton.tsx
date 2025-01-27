"use client";

import { tv, VariantProps } from "tailwind-variants";

import { cn } from "@/lib";
import { Icon, IconType } from "@/primitives/Icon";

const variants = tv({
  base: "flex h-20 w-full items-center gap-2 rounded-2xl p-6 font-ui-sans text-2xl font-medium",
  variants: {
    variant: {
      program: "bg-moss-50",
      round: "bg-purple-50",
    },
  },
  defaultVariants: {
    variant: "program",
  },
});

export interface CreateButtonProps extends VariantProps<typeof variants> {
  className?: string;
  children: string;
  onClick?: () => void;
}

export const CreateButton = ({
  variant,
  children = "Create new program",
  onClick,
  className,
}: CreateButtonProps) => {
  const styles = variants({ variant });
  return (
    <button className={cn(styles, className)} onClick={onClick} value={children}>
      <Icon type={IconType.PLUS} />
      {children}
    </button>
  );
};
