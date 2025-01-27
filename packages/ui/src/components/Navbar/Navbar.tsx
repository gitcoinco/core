"use client";

import * as React from "react";

import { NavbarGeneric } from "./components/NavbarGeneric";
import { NavbarLogo, NavbarLogoProps } from "./components/NavbarLogo";
import {
  NavbarCenterSection,
  NavbarEndSection,
  NavbarStartSection,
} from "./components/NavbarSections";
import { NavbarSeparator } from "./components/NavbarSeparator";
import { NavbarTitle, NavbarTitleProps } from "./components/NavbarTitle";

export interface NavbarProps {
  className?: string;
  primaryLogo?: NavbarLogoProps;
  secondaryLogo?: NavbarLogoProps;
  showDivider?: boolean;
  text?: NavbarTitleProps;
  children?: React.ReactNode;
}

export const Navbar = ({
  className,
  primaryLogo,
  secondaryLogo,
  showDivider = true,
  text,
  children,
}: NavbarProps) => {
  return (
    <NavbarGeneric behavior="sticky" className={className}>
      <NavbarStartSection>
        <NavbarLogo {...primaryLogo} />
        {showDivider && <NavbarSeparator />}
        <div className="flex items-center gap-2">
          {secondaryLogo && <NavbarLogo {...secondaryLogo} />}
          {text && <NavbarTitle {...text} />}
        </div>
      </NavbarStartSection>
      <NavbarCenterSection>{"hola"}</NavbarCenterSection>
      <NavbarEndSection>{children}</NavbarEndSection>
    </NavbarGeneric>
  );
};
