import {
  customIconComponents,
  heroiconsComponents,
  networkIconComponents,
  socialMediaIconComponents,
} from "@/assets/icons";
import { cn } from "@/lib/utils";

export enum IconType {
  // Heroicons
  BRIEFCASE = "briefcase",
  CALENDAR = "calendar",
  CASH = "cash",
  CHECK = "check",
  CHEVRON_LEFT = "chevron-left",
  CLIPBOARD_LIST = "clipboardList",
  CLOCK = "clock",
  COLLECTION = "collection",
  DOCUMENT_DUPLICATE = "document-duplicate",
  EXCLAMATION_CIRCLE = "exclamation-circle",
  GLOBE = "globe",
  HOME = "home",
  INFORMATION_CIRCLE = "informationCircle",
  LINK = "link",
  PLUS = "plus",
  PENCIL = "pencil",
  SOLID_CHECK = "solid-check",
  SOLID_QUESTION_MARK_CIRCLE = "questionMarkCircle",
  SOLID_X = "solid-x",
  SPARKLES = "sparkles",
  STAR = "star",
  USERS = "users",
  USER_GROUP = "user-group",
  X = "x",
  // Social Media
  TWITTER = "twitter",
  GITHUB = "github",
  // Networks
  ETH = "eth",
  OPTIMISM = "optimism",
  POLYGON = "polygon",
  ARBITRUM = "arbitrum",
  AVAX = "avax",
  BASE = "base",
  // Custom
  CHECKER = "checker",
  EXPLORER = "explorer",
  SHINE = "shine",
  USER = "user",
  VERIFIEDBADGE = "verifiedBadge",
}
export type IconProps = React.SVGProps<SVGSVGElement> & {
  type: IconType;
};

const iconComponents: Record<IconProps["type"], React.FC<React.SVGProps<SVGSVGElement>>> = {
  ...heroiconsComponents,
  ...socialMediaIconComponents,
  ...networkIconComponents,
  ...customIconComponents,
};

export const Icon: React.FC<IconProps> = ({ type, className, ...props }) => {
  const IconComponent = iconComponents[type];
  return <IconComponent className={cn("size-5", className)} {...props} />;
};

export const icons = Object.keys(iconComponents).sort((a, b) =>
  a.localeCompare(b),
) as IconProps["type"][];
