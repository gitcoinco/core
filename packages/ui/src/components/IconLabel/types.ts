import { ReactNode } from "react";

import { DateFormat } from "@/lib/dates/formatDate";
import { IconType } from "@/primitives/Icon";

interface CustomVariantProps {
  className?: string;
  iconVariant?: string;
  textVariant?: string;
}

interface AIEvaluationProps extends CustomVariantProps {
  type: "ai-evaluation";
  percent?: number;
  iconType?: IconType;
}

interface DateProps extends CustomVariantProps {
  type: "date";
  date: Date;
  dateFormat?: DateFormat;
  iconType?: IconType;
}

interface PeriodProps extends CustomVariantProps {
  type: "period";
  startDate: Date;
  endDate: Date;
  dateFormat?: DateFormat;
  iconType?: IconType;
}

interface RoundPeriodProps extends CustomVariantProps {
  type: "roundPeriod";
  startDate: Date;
  endDate?: Date;
  dateFormat?: DateFormat;
  label?: string;
  iconType?: IconType;
}

interface DateWithPrefixProps extends CustomVariantProps {
  type: "dateWithPrefix";
  date: Date;
  prefix: string;
  dateFormat?: DateFormat;
  iconType?: IconType;
}

interface AddressProps extends CustomVariantProps {
  type: "address";
  address?: string;
  ens?: string;
  iconType?: IconType;
}

interface SocialProps extends CustomVariantProps {
  type: "social";
  platform?: "github" | "twitter" | "website";
  iconType?: IconType;
  link?: string;
  isVerified?: boolean;
}

interface DefaultProps extends CustomVariantProps {
  type: "default";
  iconType: IconType;
  label?: ReactNode;
  laodingSkeletonClassName?: string;
}

export type IconLabelProps =
  | AIEvaluationProps
  | DateProps
  | PeriodProps
  | RoundPeriodProps
  | AddressProps
  | SocialProps
  | DateWithPrefixProps
  | DefaultProps;
