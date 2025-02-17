import ExplorerIconRaw from "@/assets/logos/explorer/explorer.svg?react";
import ExplorerIcon from "@/assets/logos/explorer/explorerGrad.svg?react";

import BoldIcon from "./bold.svg?react";
import CheckerIcon from "./checker.svg?react";
import HeadingIcon from "./heading.svg?react";
import ItalicIcon from "./italic.svg?react";
import RetrofundingIcon from "./retrofunding.svg?react";
import ShineIcon from "./shine.svg?react";
import SortIcon from "./sortIcon.svg?react";
import SpinnerIcon from "./spinner.svg?react";
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
};
export { CustomIconType, customIconComponents, customIcons };
