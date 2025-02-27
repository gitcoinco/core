import { NavbarCenterSection, NavbarEndSection, NavbarStartSection } from "./NavbarSections";

export const DefaultContent = () => (
  <>
    <NavbarStartSection>
      <div className="rounded-sm bg-grey-500 p-2">Start Content</div>
    </NavbarStartSection>
    <NavbarCenterSection>
      <div className="rounded-sm bg-grey-500 p-2">Center Content</div>
    </NavbarCenterSection>
    <NavbarEndSection>
      <div className="rounded-sm bg-grey-500 p-2">End Content</div>
    </NavbarEndSection>
  </>
);
