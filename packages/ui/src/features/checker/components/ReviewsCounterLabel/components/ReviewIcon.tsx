import { tv } from "tailwind-variants";

import { cn } from "@/lib/utils";
import { Icon, IconType } from "@/primitives/Icon";

const iconType = {
  approved: IconType.CHECK,
  rejected: IconType.X,
  pending: IconType.EXCLAMATION_CIRCLE,
};

const iconVariants = tv({
  slots: {
    icon: "size-5 shrink-0",
    container: "flex items-center justify-center gap-1 border border-grey-100 bg-white",
  },
  variants: {
    status: {
      approved: { icon: "fill-green-500" },
      rejected: { icon: "fill-red-500" },
      pending: { icon: "fill-yellow-300" },
    },
    withCounter: {
      true: { container: "flex h-7 w-14 items-center gap-1 rounded-3.5 px-1.5 py-1" },
      false: { container: "size-7 rounded-full p-1" },
    },
  },
  defaultVariants: {
    withCounter: false,
  },
});

export interface ReviewIconProps {
  withCounter?: boolean;
  nReviews?: number;
  status: "approved" | "rejected" | "pending";
  className?: string;
  style?: React.CSSProperties;
}

export const ReviewIcon = ({
  withCounter,
  nReviews = 0,
  status,
  className,
  style,
}: ReviewIconProps) => {
  const { icon, container } = iconVariants({ status, withCounter });

  if (status === "pending") {
    return <Icon type={iconType[status]} className={icon()} />;
  }

  return (
    <div className={cn(container(), className)} style={style}>
      <Icon type={iconType[status]} className={icon()} />
      {withCounter && <span>{nReviews ? nReviews : "?"}</span>}
    </div>
  );
};
