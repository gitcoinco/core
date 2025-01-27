import { GitcoinLogo } from "@/assets/logos/gitcoin";

const DefaultLogo = GitcoinLogo;

export interface NavbarLogoProps {
  link?: string;
  img?: string | React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  size?: string;
  color?: string;
}

export const NavbarLogo = ({
  link,
  img,
  size = "h-10 max-w-12",
  color = "black",
}: NavbarLogoProps) => {
  const logoClasses = `${size} text-${color}`;

  if (!img) {
    return <DefaultLogo className={logoClasses} />;
  }

  if (typeof img === "string") {
    return <img src={img} alt="Logo" className={logoClasses} />;
  }

  const LogoComponent = img;

  return (
    <a href={link || "#"} style={{ color }}>
      <LogoComponent className={logoClasses} />
    </a>
  );
};
