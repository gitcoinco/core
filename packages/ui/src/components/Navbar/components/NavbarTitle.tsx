import { cn } from "@/lib";

export interface NavbarTitleProps {
  text: string;
  link?: string;
  className?: string;
}

export const NavbarTitle = ({ text, link, className = "" }: NavbarTitleProps) => {
  return (
    <a href={link || "#"} className={cn("font-ui-mono text-lg", className)}>
      {text}
    </a>
  );
};
