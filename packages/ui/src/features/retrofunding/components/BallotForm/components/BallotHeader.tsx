import { tv } from "tailwind-variants";

import { sortOptions } from "@/features/retrofunding/utils/metricsBallot";
import { Select } from "@/primitives";

const variants = tv({
  slots: {
    container: "flex items-center justify-between text-sm text-grey-500",
    titleContainer: "flex w-[520px] flex-col justify-start gap-2",
    title: "text-lg font-medium text-black",
    description: "text-sm font-normal text-grey-900",
    select:
      "w-fit shrink-0 px-3 py-2 font-medium ring-0 hover:ring-0 focus:outline-none focus:ring-0 active:ring-0",
  },
});

const BALLOT_INFO =
  "Distribute your votes across the metrics on your ballot as percentages, ensuring they add up to 100% before submission. You can hide metrics if needed and revisit this step anytime before finalizing your ballot.";

interface BallotHeaderProps {
  sortOrder: string;
  setSortOrder: (value: string) => void;
}

export const BallotHeader = ({ sortOrder, setSortOrder }: BallotHeaderProps) => (
  <div className={variants().container()}>
    <div className={variants().titleContainer()}>
      <span className={variants().title()}>Your Ballot</span>
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
