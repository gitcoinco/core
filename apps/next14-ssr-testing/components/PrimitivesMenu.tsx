import Link from "next/link";
import { index as primitivesIndex } from "@gitcoin/ui/primitivesSSR";

export function PrimitivesMenu() {
  return (
    <nav className="flex flex-col gap-0.5">
      {primitivesIndex.map((componentName) => (
        <Link key={componentName} href={`/primitives/${componentName}`}>
          {componentName}
        </Link>
      ))}
    </nav>
  );
}
