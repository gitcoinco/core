import ExplorerIconRaw from "@/assets/logos/explorer/explorer.svg?react";
import ExplorerIcon from "@/assets/logos/explorer/explorerGrad.svg?react";
import GTCIcon from "@/assets/logos/gitcoin/gitcoin.svg?react";

import ArrowRightIcon from "./arrowRight.svg?react";
import BoldIcon from "./bold.svg?react";
import CheckerIcon from "./checker.svg?react";
import HeadingIcon from "./heading.svg?react";
import ItalicIcon from "./italic.svg?react";
import LightningBoltIcon from "./lightning-bolt.svg?react";
import RetrofundingIcon from "./retrofunding.svg?react";
import ShineIcon from "./shine.svg?react";
import SortIcon from "./sortIcon.svg?react";
import SpinnerIcon from "./spinner.svg?react";
import UpTrendIcon from "./upTrend.svg?react";
import UserIcon from "./user.svg?react";
import VerifiedBadgeIcon from "./verifiedBadge.svg?react";
import VoteIcon from "./vote.svg?react";

enum CustomIconType {
  CHECKER = "checker",
  EXPLORER = "explorer",
  EXPLORER_RAW = "explorerRaw",
  SHINE = "shine",
  USER = "user",
  VERIFIEDBADGE = "verifiedBadge",
  HEADING = "heading",
  BOLD = "bold",
  ITALIC = "italic",
  SPINNER = "spinner",
  SORT = "sort",
  LIGHTNING_BOLT = "lightningBolt",
  UP_TREND = "upTrend",
  ARROW_RIGHT = "arrowRight",
  GITCOIN = "gitcoin",
}

const customIconComponents: Record<CustomIconType, React.FC<React.SVGProps<SVGSVGElement>>> = {
  checker: CheckerIcon,
  explorer: ExplorerIcon,
  explorerRaw: ExplorerIconRaw,
  shine: ShineIcon,
  user: UserIcon,
  verifiedBadge: VerifiedBadgeIcon,
  heading: HeadingIcon,
  bold: BoldIcon,
  italic: ItalicIcon,
  spinner: SpinnerIcon,
  sort: SortIcon,
  lightningBolt: LightningBoltIcon,
  upTrend: UpTrendIcon,
  arrowRight: ArrowRightIcon,
  gitcoin: GTCIcon,
};

const customIcons = Object.keys(customIconComponents).sort((a, b) =>
  a.localeCompare(b),
) as CustomIconType[];

export {
  CheckerIcon,
  ExplorerIcon,
  SpinnerIcon,
  ShineIcon,
  UserIcon,
  VerifiedBadgeIcon,
  RetrofundingIcon,
  VoteIcon,
  HeadingIcon,
  BoldIcon,
  ItalicIcon,
  SortIcon,
  LightningBoltIcon,
  UpTrendIcon,
  ArrowRightIcon,
  GTCIcon,
};
export { CustomIconType, customIconComponents, customIcons };
