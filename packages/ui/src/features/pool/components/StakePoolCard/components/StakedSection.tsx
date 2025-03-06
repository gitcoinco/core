import { formatDate, DateFormat } from "@/lib";
import { Badge } from "@/primitives/Badge";
import { Button } from "@/primitives/Button";
import { IconType, Icon } from "@/primitives/Icon";

import { IconWithDetails } from "./IconWithDetails";

/**
 * Helper component to display staked section
 */
export const StakedSection = ({
  stakeAmount,
  lastStakeDate,
}: {
  stakeAmount?: number;
  lastStakeDate?: Date;
}) => {
  return (
    <div className="flex w-full items-center justify-between">
      <IconWithDetails
        icon={IconType.LIGHTNING_BOLT}
        iconClassName="size-6"
        value={lastStakeDate ? `On ${formatDate(lastStakeDate, DateFormat.ShortMonthDayYear)}` : ""}
        valueClassName="font-ui-sans text-sm font-normal"
        label={`Staked ${stakeAmount} GTC`}
        labelClassName="font-ui-sans text-base font-bold "
      />
    </div>
  );
};
