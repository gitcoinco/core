import Link from "next/link";
import { cn } from "@gitcoin/ui/lib";
import { SSRComponentType, getSSRComponentIndex } from "@/utils/getSSRComponentData";

const pathsPerType: Record<SSRComponentType, string> = {
  primitives: "primitives",
  components: "components",
  features: "features",
  smartComponents: "smart-components",
};

export function ComponentsMenu({
  className,
  type,
}: {
  className?: string;
  type: SSRComponentType;
}) {
  const index = getSSRComponentIndex({ type });
  const path = pathsPerType[type];
  return (
    <nav className={cn("flex flex-col gap-0.5", className)}>
      {index.map(({ key, name, isClient }) => (
        <Link
          key={key}
          href={`/${path}/${isClient ? `client/${key.toLowerCase()}` : key.toLowerCase()}`}
        >
          {isClient ? `* ${name}` : name}
        </Link>
      ))}
    </nav>
  );
}
