import { AccordionProps } from "@/primitives/Accordion";
import { IconType } from "@/primitives/Icon";

import { sideNavVariants } from "./SideNav";

export interface SideNavItem {
  content: React.ReactNode;
  icon?: React.ReactNode;
  iconType?: IconType;
  id?: string;
  isSeparator?: boolean;
  items?: SideNavItem[];
}

export interface InternalSideNavProps {
  items?: SideNavItem[];
  onClick: (id: string | undefined) => void;
  activeId?: string;
  className?: string;
  accordionProps?: Omit<AccordionProps, "header" | "content">;
  hoverVariant?: keyof typeof sideNavVariants.variants.hover;
  isRecursive?: boolean;
}

export type SideNavProps = Omit<InternalSideNavProps, "isRecursive">;
