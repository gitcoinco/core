import { ComponentsMenu } from "@/components/ComponentsMenu";
import { getSSRComponentIndex } from "@/utils/getSSRComponentData";
export default function Page() {
  const primitivesIndex = getSSRComponentIndex({ type: "primitives" });
  const componentsIndex = getSSRComponentIndex({ type: "components" });
  const featuresIndex = getSSRComponentIndex({ type: "features" });
  const smartComponentsIndex = getSSRComponentIndex({ type: "smartComponents" });

  return (
    <div className="grid grid-cols-1 justify-between gap-4 p-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div className="flex flex-col items-center gap-3">
        <div className="text-lg font-bold">Primitives</div>
        <ComponentsMenu path="primitives" index={primitivesIndex} />
      </div>
      <div className="flex flex-col items-center gap-3">
        <div className="text-lg font-bold">Components</div>
        <ComponentsMenu path="components" index={componentsIndex} />
      </div>
      <div className="flex flex-col items-center gap-3">
        <div className="text-lg font-bold">Features</div>
        <ComponentsMenu path="features" index={featuresIndex} />
      </div>
      <div className="flex flex-col items-center gap-3">
        <div className="text-lg font-bold">Smart Components</div>
        <ComponentsMenu path="smartComponents" index={smartComponentsIndex} />
      </div>
    </div>
  );
}
