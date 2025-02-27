import { ComponentsMenuWrapper } from "@/components/ComponentsMenuWrapper";
import { SSRComponentType } from "@/utils/getSSRComponentData";

const menuItems: { title: string; type: SSRComponentType }[] = [
  { title: "Primitives", type: "primitives" },
  { title: "Components", type: "components" },
  { title: "Features", type: "features" },
  { title: "Smart Components", type: "smartComponents" },
];

export default function Page() {
  return (
    <div className="grid h-[calc(100vh-100px)] grid-cols-1 justify-between gap-4 px-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {menuItems.map(({ title, type }) => (
        <ComponentsMenuWrapper key={type} title={title} type={type} />
      ))}
    </div>
  );
}
