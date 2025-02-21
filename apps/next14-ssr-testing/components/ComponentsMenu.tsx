import Link from "next/link";
import { cn } from "@gitcoin/ui/lib";

export function ComponentsMenu({
  className,
  index,
  path,
}: {
  className?: string;
  index: {
    key: string;
    name: string | undefined;
  }[];
  path: string;
}) {
  return (
    <nav className={cn("flex flex-col gap-0.5", className)}>
      {index.map(({ key, name }) => (
        <Link key={key} href={`/${path}/${key.toLowerCase()}`}>
          {name}
        </Link>
      ))}
    </nav>
  );
}
