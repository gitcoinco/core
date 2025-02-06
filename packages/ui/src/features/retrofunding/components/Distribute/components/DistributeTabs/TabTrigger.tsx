import { TabsTrigger } from "@/ui-shadcn/tabs";

export const TabTrigger = ({
  value,
  label,
  count,
}: {
  value: string;
  label: string;
  count: number;
}) => (
  <TabsTrigger
    value={value}
    className="flex items-center gap-2 rounded-none border-b-2 border-transparent bg-grey-50 px-6 py-4 text-[#959c9c] transition-colors data-[state=active]:border-black data-[state=active]:bg-grey-50 data-[state=active]:text-black"
  >
    <span className="font-ui-mono text-xl font-medium leading-tight">{label}</span>
    <div className="inline-flex h-[19px] items-center justify-center bg-grey-50 px-2.5 py-0.5">
      <span className="font-ui-mono text-sm font-medium">{count}</span>
    </div>
  </TabsTrigger>
);
