import { IconLabel } from "@/components/IconLabel";

/**
 * Helper component to display staking period section
 */
export const StakingPeriodSection = ({
  votingStartDate,
  votingEndDate,
}: {
  votingStartDate: Date;
  votingEndDate: Date;
}) => {
  return (
    <div className="flex w-full items-center justify-between">
      <div>
        <div className="inline-flex items-center justify-start gap-4 text-grey-900">
          <div className="flex items-center justify-start gap-2">
            <div className="text-[16px]/[24px] font-medium leading-7">Staking Period</div>
            <IconLabel
              type="period"
              iconVariant="text-black"
              startDate={votingStartDate}
              endDate={votingEndDate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
