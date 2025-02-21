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
