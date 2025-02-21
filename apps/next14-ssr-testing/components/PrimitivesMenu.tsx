import Link from "next/link";
import { index as primitivesIndex } from "@gitcoin/ui/primitivesSSR";
import { cn } from "@gitcoin/ui/lib";

export function PrimitivesMenu({ className }: { className?: string }) {
  return (
    <nav className={cn("flex flex-col gap-0.5", className)}>
      {primitivesIndex.map(({ key, name }) => (
        <Link key={key} href={`/primitives/${key.toLowerCase()}`}>
          {name}
        </Link>
      ))}
    </nav>
  );
}
