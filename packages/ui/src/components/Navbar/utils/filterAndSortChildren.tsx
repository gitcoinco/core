import * as React from "react";

import {
  NavbarCenterSection,
  NavbarEndSection,
  NavbarStartSection,
} from "../components/NavbarSections";

const sectionComponentsOrder = [NavbarStartSection, NavbarCenterSection, NavbarEndSection] as const;
type NavbarSection = (typeof sectionComponentsOrder)[number];

export const filterAndSortChildren = (children: React.ReactNode) => {
  const validDisplayNames = sectionComponentsOrder.map((comp) => comp.displayName) as string[];
  const finalChildren = new Array(sectionComponentsOrder.length).fill(null);

  // Handle the case that children is a React.Fragment
  const processChild = (child: React.ReactNode) => {
    if (React.isValidElement(child)) {
      const mightBeFragment =
        React.isValidElement(child) &&
        typeof child.type === "function" &&
        !(child.type as any)?.displayName;

      if (mightBeFragment) {
        const rendered = (child.type as React.FC)(child.props);
        if (React.isValidElement(rendered)) {
          React.Children.forEach(rendered.props.children, processChild);
        }
      } else {
        const displayName = (child.type as NavbarSection).displayName;
        if (displayName) {
          const index = validDisplayNames.indexOf(displayName);
          if (index !== -1) {
            finalChildren[index] = child;
          }
        }
      }
    }
  };

  React.Children.forEach(children, processChild);

  return finalChildren.map((child, i) => {
    if (child === null) {
      const SectionComponent = sectionComponentsOrder[i];
      return <SectionComponent key={validDisplayNames[i]} />;
    }
    return child;
  });
};
