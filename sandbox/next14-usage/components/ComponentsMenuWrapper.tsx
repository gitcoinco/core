import { SSRComponentType } from "@/utils/getSSRComponentData";
import { ComponentsMenu } from "./ComponentsMenu";
import { ScrollArea } from "@gitcoin/ui";

export function ComponentsMenuWrapper({ title, type }: { title?: string; type: SSRComponentType }) {
  return (
    <div className="flex min-h-0 w-full flex-col items-center gap-3">
      {title && <div className="text-center text-lg font-bold">{title}</div>}
      <ScrollArea className="pr-4">
        <ComponentsMenu type={type} />
      </ScrollArea>
    </div>
  );
}
