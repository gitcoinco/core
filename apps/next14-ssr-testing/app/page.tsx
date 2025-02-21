import { ComponentsMenu } from "@/components/ComponentsMenu";
import { index as componentsIndex } from "@gitcoin/ui/componentsSSR";
import { index as primitivesIndex } from "@gitcoin/ui/primitivesSSR";
import { index as featuresIndex } from "@gitcoin/ui/featuresSSR";
export default function Page() {
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
    </div>
  );
}
