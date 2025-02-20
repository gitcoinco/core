"use client";

import { ThemeSelector } from "@/components/ThemeSelector";
import {
  NavbarEndSection,
  NavbarGeneric,
  NavbarCenterSection,
  NavbarStartSection,
} from "@gitcoin/ui";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();
  const section = pathname.split("/")[1];
  const title = section ? `${section.charAt(0).toUpperCase() + section.slice(1)}` : "";
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
