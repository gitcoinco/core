import { DateFormat } from "@/lib/dates/formatDate";
import { IconType } from "@/primitives/Icon";

interface AIEvaluationProps {
  type: "ai-evaluation";
  percent?: number;
  className?: string;
  iconType?: IconType;
}

interface DateProps {
  type: "date";
  date: Date;
  dateFormat?: DateFormat;
  className?: string;
  iconType?: IconType;
}

interface PeriodProps {
  type: "period";
  startDate: Date;
  endDate: Date;
  dateFormat?: DateFormat;
  className?: string;
  iconType?: IconType;
}

interface RoundPeriodProps {
  type: "roundPeriod";
  startDate: Date;
  endDate?: Date;
  dateFormat?: DateFormat;
  label?: string;
  className?: string;
  iconType?: IconType;
}

interface DateWithPrefixProps {
  type: "dateWithPrefix";
  date: Date;
  prefix: string;
  dateFormat?: DateFormat;
  className?: string;
  iconType?: IconType;
}

interface AddressProps {
  type: "address";
  address?: string;
  ens?: string;
  className?: string;
  iconType?: IconType;
}

export interface SocialProps {
  type: "social";
  platform?: "github" | "twitter" | "website";
  link?: string;
  isVerified?: boolean;
  className?: string;
}

export interface DefaultProps {
  type: "default";
  iconType: IconType;
  label?: string;
  iconVariant?: string;
  textVariant?: string;
  className?: string;
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
