import { Icon } from "@/primitives/Icon";
import { IconType } from "@/primitives/Icon";

import { IconWithDetails } from "./IconWithDetails";

/**
 * Helper component to display pool metrics section
 */
export const PoolMetricsSection = ({
  matchingPoolAmount,
  totalProjects,
  totalStaked,
  chainIcon,
}: {
  matchingPoolAmount?: number;
  totalProjects?: number;
  totalStaked?: number;
  chainIcon: IconType;
}) => {
  return (
    <div className="flex w-full items-center justify-between">
      <div>
        <div className="inline-flex items-center justify-start gap-4 text-grey-900">
          <div className="flex items-center justify-start gap-8">
            <IconWithDetails
              icon={IconType.GLOBE}
              label={`${matchingPoolAmount} USD`}
              value="Matching Pool"
            />
            <IconWithDetails
              icon={IconType.COLLECTION}
              label={`${totalProjects} Projects`}
              value="Total Projects"
            />
            <IconWithDetails
              icon={IconType.UP_TREND}
              label={`${totalStaked} GTC`}
              value="Total Staked"
            />
          </div>
        </div>
      </div>
      <Icon type={chainIcon} className="size-8" />
    </div>
  );
};
