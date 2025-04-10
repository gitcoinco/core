import { tv } from "tailwind-variants";

import { sortOptions } from "@/features/retrofunding/utils/metricsBallot";
import { ProgressBar, Select } from "@/primitives";

const variants = tv({
  slots: {
    container: "flex items-center justify-between text-sm text-grey-500",
    titleContainer: "flex w-[520px] flex-col justify-start gap-2",
    title: "text-lg font-medium text-black",
    description: "text-sm font-normal text-grey-900",
    progressBarContainer: "flex items-center gap-2",
    progressBarLabel: "font-ui-sans text-sm font-normal text-black",
    select:
      "w-fit shrink-0 px-3 py-2 font-medium ring-0 hover:ring-0 focus:outline-none focus:ring-0 active:ring-0",
  },
});

const BALLOT_INFO =
  "Distribute your votes across the metrics on your ballot as percentages, ensuring they add up to 100% before submission. You can hide metrics if needed and revisit this step anytime before finalizing your ballot.";

interface BallotHeaderProps {
  sumOfAllocations: number;
  sortOrder: string;
  setSortOrder: (value: string) => void;
}

export const BallotHeader = ({ sortOrder, setSortOrder, sumOfAllocations }: BallotHeaderProps) => (
  <div className={variants().container()}>
    <div className={variants().titleContainer()}>
      <div className={variants().progressBarContainer()}>
        <span className={variants().title()}>Your Ballot</span>
        <ProgressBar variant="green-sm" value={sumOfAllocations} max={100} />
        <span className={variants().progressBarLabel()}>{sumOfAllocations}% allocated</span>
      </div>
      <span className={variants().description()}>{BALLOT_INFO}</span>
    </div>
    <Select
      variant="filled"
      className={variants().select()}
      options={sortOptions}
      onValueChange={(value) => {
        setSortOrder(value);
      }}
      value={sortOrder}
    />
  </div>
);
