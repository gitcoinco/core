import { formatDate, DateFormat } from "@/lib";
import { Badge } from "@/primitives/Badge";
import { Button } from "@/primitives/Button";
import { IconType, Icon } from "@/primitives/Icon";

import { IconWithDetails } from "./IconWithDetails";

/**
 * Helper component to display staked section
 */
export const StakedSection = ({
  isUnlocked,
  stakeAmount,
  lastStakeDate,
  claimed,
  unlockMessage,
  onClaim,
}: {
  isUnlocked: boolean;
  stakeAmount?: number;
  lastStakeDate?: Date;
  claimed?: boolean;
  unlockMessage: string;
  onClaim?: () => void;
}) => {
  return (
    <div className="flex w-full items-center justify-between">
      <IconWithDetails
        icon={IconType.LIGHTNING_BOLT}
        label={`Staked ${stakeAmount} GTC`}
        value={lastStakeDate ? `On ${formatDate(lastStakeDate, DateFormat.ShortMonthDayYear)}` : ""}
      />
      {claimed ? (
        <Badge className="bg-green-100 text-green-900">Claimed</Badge>
      ) : (
        <div className="flex items-center justify-center gap-2">
          <div className="font-ui-sans text-sm font-normal leading-tight text-black">
            {unlockMessage}
          </div>
          {isUnlocked && (
            <Button
              size="small"
              value="Claim reward"
              icon={<Icon type={IconType.ARROW_RIGHT} className="size-4" />}
              iconPosition="right"
              className="bg-moss-100 text-black"
              onClick={onClaim}
            />
          )}
        </div>
      )}
    </div>
  );
};
