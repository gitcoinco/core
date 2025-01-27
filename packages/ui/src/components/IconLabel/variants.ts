import { tv } from "tailwind-variants";

export const variants = tv({
  slots: {
    container: "flex flex-wrap items-center",
    icon: "size-5",
    text: "text-[16px]/[24px]",
  },
  variants: {
    type: {
      default: {
        container: "gap-2",
      },
      "ai-evaluation-a": {
        container: "gap-1",
        icon: "fill-green-500",
      },
      "ai-evaluation-u": {
        container: "gap-1",
        icon: "fill-yellow-300",
      },
      "ai-evaluation-r": {
        container: "gap-1",
        icon: "fill-red-700",
      },
      loading: {
        container: "gap-1",
        icon: "animate-pulse fill-grey-100",
      },
      date: {
        container: "gap-2",
      },
      dateWithPrefix: { text: "text-grey-900" },
      social: {
        text: "text-moss-900 hover:underline",
      },
      period: {
        container: "gap-2",
      },
      roundPeriod: {
        container: "gap-2",
        text: "text-[14px]/[17px] text-grey-900",
        icon: "size-4 fill-grey-900",
      },

      verifiedBadge: {
        icon: "h-5 w-[28px]",
      },
    },
  },
});
