"use client";

import { SideNav, SideNavItem, sideNavVariants } from "@/components/SideNav";
import { Accordion, AccordionProps } from "@/primitives/Accordion";
import { Icon } from "@/primitives/Icon";

interface AccordionItemProps {
  item: SideNavItem;
  onClick: (itemLink: string | undefined) => void;
  hoverVariant: keyof typeof sideNavVariants.variants.hover;
  accordionProps?: Omit<AccordionProps, "header" | "content">;
  activeId?: string;
}

/**
 * Renders an accordion item with nested navigation
 */
export const AccordionItem = ({
  item,
  onClick,
  hoverVariant,
  accordionProps,
  activeId,
}: AccordionItemProps) => (
  <Accordion
    isOpen={false}
    header={
      <div className="flex items-center gap-2 font-ui-sans text-p">
        {item.iconType ? <Icon type={item.iconType} /> : item.icon}
        {item.content}
      </div>
    }
    content={
      <SideNav
        items={item.items}
        className="pl-6"
        isRecursive
        onClick={onClick}
        hoverVariant={hoverVariant}
        activeId={activeId}
      />
    }
    variant="light"
    paddingX="sm"
    paddingY="sm"
    {...accordionProps}
  />
);
