"use client";

import { ThemeSelector } from "@/components/ThemeSelector";
import {
  NavbarEndSection,
  NavbarGeneric,
  NavbarCenterSection,
  NavbarStartSection,
} from "@gitcoin/ui";
import { usePathname } from "next/navigation";
import { index as primitivesIndex } from "@gitcoin/ui/primitivesSSR";

export const Navbar = () => {
  const pathname = usePathname();
  const [, section, componentKey] = pathname.split("/");
  const primitiveIndex = primitivesIndex.find(({ key }) => key === componentKey);
  const sectionTitle = section ? `${section.charAt(0).toUpperCase() + section.slice(1)}` : "";
  const componentTitle = primitiveIndex?.name ?? "";
  const title = componentTitle ? `${sectionTitle} / ${componentTitle}` : sectionTitle;
  return (
    <NavbarGeneric behavior="sticky">
      <NavbarStartSection>
        <h1 className="text-center text-2xl font-bold">SSR / RSC testing</h1>
      </NavbarStartSection>
      <NavbarCenterSection>
        <h1 className="text-center text-2xl font-bold">{title}</h1>
      </NavbarCenterSection>
      <NavbarEndSection>
        <ThemeSelector className={`pointer-events-auto`} />
      </NavbarEndSection>
    </NavbarGeneric>
  );
};
