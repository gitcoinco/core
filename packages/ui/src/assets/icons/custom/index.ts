import BoldIcon from "./bold.svg?react";
import CheckerIcon from "./checker.svg?react";
import ExplorerIcon from "./explorer.svg?react";
import HeadingIcon from "./heading.svg?react";
import ItalicIcon from "./italic.svg?react";
import RetrofundingIcon from "./retrofunding.svg?react";
import ShineIcon from "./shine.svg?react";
import SpinnerIcon from "./spinner.svg?react";
import UserIcon from "./user.svg?react";
import VerifiedBadgeIcon from "./verifiedBadge.svg?react";
import VoteIcon from "./vote.svg?react";

enum CustomIconType {
  CHECKER = "checker",
  EXPLORER = "explorer",
  SHINE = "shine",
  USER = "user",
  VERIFIEDBADGE = "verifiedBadge",
  HEADING = "heading",
  BOLD = "bold",
  ITALIC = "italic",
  SPINNER = "spinner",
}

const customIconComponents: Record<CustomIconType, React.FC<React.SVGProps<SVGSVGElement>>> = {
  checker: CheckerIcon,
  explorer: ExplorerIcon,
  shine: ShineIcon,
  user: UserIcon,
  verifiedBadge: VerifiedBadgeIcon,
  heading: HeadingIcon,
  bold: BoldIcon,
  italic: ItalicIcon,
  spinner: SpinnerIcon,
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
};
export { CustomIconType, customIconComponents, customIcons };
