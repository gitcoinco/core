"use client";

import { ThemeSelector } from "@/components/ThemeSelector";
import { getSSRComponentIndex } from "@/utils/getSSRComponentData";
import {
  NavbarEndSection,
  NavbarGeneric,
  NavbarCenterSection,
  NavbarStartSection,
} from "@gitcoin/ui";
import { SSRComponentIndex } from "@gitcoin/ui/types";
import { usePathname } from "next/navigation";
export const Navbar = () => {
  const primitivesIndex = getSSRComponentIndex({ type: "primitives" });
  const componentsIndex = getSSRComponentIndex({ type: "components" });
  const featuresIndex = getSSRComponentIndex({ type: "features" });
  const smartComponentsIndex = getSSRComponentIndex({ type: "smartComponents" });
  const pathname = usePathname();
  const [, firstSection, secondSection, thirdSection] = pathname?.split("/") ?? [];

  const isClient = secondSection === "client";

  let index: SSRComponentIndex | undefined;
  if (!isClient) {
    if (firstSection === "primitives")
      index = primitivesIndex.find(({ key }) => key === secondSection);
    if (firstSection === "components")
      index = componentsIndex.find(({ key }) => key === secondSection);
    if (firstSection === "features") index = featuresIndex.find(({ key }) => key === secondSection);
    if (firstSection === "smartComponents")
      index = smartComponentsIndex.find(({ key }) => key === secondSection);
  } else {
    if (firstSection === "primitives")
      index = primitivesIndex.find(({ key }) => key === thirdSection);
    if (firstSection === "components")
      index = componentsIndex.find(({ key }) => key === thirdSection);
    if (firstSection === "features") index = featuresIndex.find(({ key }) => key === thirdSection);
    if (firstSection === "smartComponents")
      index = smartComponentsIndex.find(({ key }) => key === thirdSection);
  }

  const sectionTitle = firstSection
    ? `${firstSection.charAt(0).toUpperCase() + firstSection.slice(1)}`
    : "";
  const componentTitle = index?.name ?? "";
  const title = componentTitle
    ? `${sectionTitle} / ${componentTitle}${isClient ? ' ("use client")' : ""}`
    : sectionTitle;

  return (
    <NavbarGeneric behavior="sticky">
      <NavbarStartSection>
        <h1 className="text-center text-2xl font-bold">SSR / RSC testing Next 14</h1>
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
