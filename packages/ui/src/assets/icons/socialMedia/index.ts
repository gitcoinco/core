import GithubIcon from "./github.svg?react";
import TwitterIcon from "./twitter.svg?react";

enum SocialMediaIconType {
  TWITTER = "twitter",
  GITHUB = "github",
}

const socialMediaIconComponents: Record<
  SocialMediaIconType,
  React.FC<React.SVGProps<SVGSVGElement>>
> = {
  twitter: TwitterIcon,
  github: GithubIcon,
};

const socialMediaIcons = Object.keys(socialMediaIconComponents).sort((a, b) =>
  a.localeCompare(b),
) as SocialMediaIconType[];

export { GithubIcon, TwitterIcon };
export { SocialMediaIconType, socialMediaIconComponents, socialMediaIcons };
