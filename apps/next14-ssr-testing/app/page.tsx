import { PrimitivesMenu } from "@/components/PrimitivesMenu";

export default function Page() {
  return (
    <div className="grid grid-cols-1 justify-between gap-4 p-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div className="flex flex-col items-center gap-3">
        <div className="text-lg font-bold">Primitives</div>
        <PrimitivesMenu />
      </div>
    </div>
  );
}
