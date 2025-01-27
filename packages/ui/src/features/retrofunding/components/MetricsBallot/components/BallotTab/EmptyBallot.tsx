import { DocumentTextIcon } from "@heroicons/react/solid";

import { TabType } from "@/features/retrofunding/types/metricsBallot";

export const EmptyBallot = ({ setActiveTab }: { setActiveTab: (tab: TabType) => void }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 rounded-xl border border-dashed border-grey-300 bg-grey-50 p-16">
      <DocumentTextIcon className="size-6" />
      <div className="flex flex-col items-center justify-center gap-4">
        <span className="text-lg font-medium text-black">Your ballot is empty</span>
        <span className="w-[444px] text-center text-p font-normal text-black">
          Review and add the metrics you believe should be used to reward projects in this round.
        </span>
      </div>
      <button
        className="rounded-lg bg-purple-100 px-4 py-2 font-ui-mono text-sm font-medium text-black"
        onClick={() => setActiveTab("metrics")}
      >
        Review metrics
      </button>
    </div>
  );
};
