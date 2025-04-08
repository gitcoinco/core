import GithubIcon from "./github.svg?react";
import TwitterIcon from "./twitter.svg?react";
import WarpcastIcon from "./warpcast.svg?react";

enum SocialMediaIconType {
  TWITTER = "twitter",
  GITHUB = "github",
  WARPCAST = "warpcast",
}

const socialMediaIconComponents: Record<
  SocialMediaIconType,
  React.FC<React.SVGProps<SVGSVGElement>>
> = {
  twitter: TwitterIcon,
  github: GithubIcon,
  warpcast: WarpcastIcon,
};

const socialMediaIcons = Object.keys(socialMediaIconComponents).sort((a, b) =>
  a.localeCompare(b),
) as SocialMediaIconType[];

export { GithubIcon, TwitterIcon };
export { SocialMediaIconType, socialMediaIconComponents, socialMediaIcons };
