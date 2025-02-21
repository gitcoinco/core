import primitivesSSR, { index as primitivesIndex } from "@gitcoin/ui/primitivesSSR";
import componentsSSR, { index as componentsIndex } from "@gitcoin/ui/componentsSSR";
import featuresSSR, { index as featuresIndex } from "@gitcoin/ui/featuresSSR";
import smartComponentsSSR, { index as smartComponentsIndex } from "@gitcoin/ui/smartComponentsSSR";
import { SSRComponents, SSRComponentIndex } from "@gitcoin/ui/types";

export type ComponentType = "primitives" | "components" | "features" | "smartComponents";

const ssrComponentsData: Record<ComponentType, SSRComponents> = {
  primitives: primitivesSSR,
  components: componentsSSR,
  features: featuresSSR,
  smartComponents: smartComponentsSSR,
};

const ssrComponentIndexes: Record<ComponentType, SSRComponentIndex[]> = {
  primitives: primitivesIndex,
  components: componentsIndex,
  features: featuresIndex,
  smartComponents: smartComponentsIndex,
};

export const getSSRComponentData = ({
  component,
  type,
}: {
  component: string;
  type: ComponentType;
}) => ssrComponentsData[type].components[component];

export const getSSRComponentIndex = ({ type }: { type: ComponentType }) =>
  ssrComponentIndexes[type];
