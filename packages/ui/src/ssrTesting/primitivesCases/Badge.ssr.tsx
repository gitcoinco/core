import { SSRComponent } from "@/types";

import { Badge, BadgeProps } from "../../primitives/Badge/Badge";

const testBadges: Record<string, BadgeProps> = {
  success: {
    variant: "success",
    children: "Success",
  },
  info: {
    variant: "info",
    children: "Info",
  },
  warning: {
    variant: "warning",
    children: "Warning",
  },
} as const;

const testBadgesStrong: Record<string, BadgeProps> = {
  successStrong: {
    variant: "success-strong",
    children: "Success Strong",
  },
  infoStrong: {
    variant: "info-strong",
    children: "Info Strong",
  },
  warningStrong: {
    variant: "warning-strong",
    children: "Warning Strong",
  },
  errorStrong: {
    variant: "error-strong",
    children: "Error Strong",
  },
} as const;
const testBadgesOutlined: Record<string, BadgeProps> = {
  success: {
    variant: "outlined-success",
    children: "Outlined Success",
  },
  info: {
    variant: "outlined-info",
    children: "Outlined Info",
  },
  warning: {
    variant: "outlined-warning",
    children: "Outlined Warning",
  },
  successStrong: {
    variant: "outlined-success-strong",
    children: "Outlined Success Strong",
  },
  infoStrong: {
    variant: "outlined-info-strong",
    children: "Outlined Info Strong",
  },
  warningStrong: {
    variant: "outlined-warning-strong",
    children: "Outlined Warning Strong",
  },
} as const;

const testBadgesSize: Record<string, BadgeProps> = {
  xs: {
    size: "xs",
    children: "XS",
  },
  sm: {
    size: "sm",
    children: "SM",
  },
  md: {
    size: "md",
    children: "MD",
  },
  lg: {
    size: "lg",
    children: "LG",
  },
  custom: {
    children: "Custom (300px)",
    className: "min-w-[300px]",
  },
} as const;

const badgeSSR: SSRComponent<BadgeProps> = {
  component: Badge,
  cases: [
    {
      label: "Default",
      groupProps: testBadges,
    },
    {
      label: "Strong",
      groupProps: testBadgesStrong,
    },
    {
      label: "Outlined",
      groupProps: testBadgesOutlined,
    },
    {
      label: "Size",
      groupProps: testBadgesSize,
    },
  ],
};

export default badgeSSR;
