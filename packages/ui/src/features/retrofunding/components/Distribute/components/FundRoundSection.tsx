import { Button } from "@/primitives/Button";
import { Icon, IconType } from "@/primitives/Icon";
import { StatCardGroup } from "@/primitives/StatCardGroup";
import { PoolConfig } from "@/types/distribute";

import { useRound } from "../hooks/useRound";

interface FundRoundSectionProps {
  onFundRound: (amount: bigint) => void;
  poolConfig: PoolConfig;
  totalPaid: bigint;
  distributionCompleted: boolean;
}

export const FundRoundSection = ({
  poolConfig,
  onFundRound,
  totalPaid,
  distributionCompleted,
}: FundRoundSectionProps) => {
  const { statCardGroupProps, fundRoundCompleted, formattedNeededTokens, tokensNeeded } = useRound({
    poolConfig,
    totalPaid,
    distributionCompleted,
  });

  return (
    <div className="flex flex-col gap-3 rounded-xl bg-white p-6">
      <div className="flex flex-col gap-2">
        <h2 className="font-ui-sans text-xl font-medium">Fund round</h2>
        <p className="font-ui-sans text-base text-grey-900">
          To distribute funds to grantees, first fund your round with the full token amount selected
          during setup.
        </p>
      </div>
      <StatCardGroup {...statCardGroupProps} justify="start" className="w-full" />
      {!fundRoundCompleted ? (
        <div className="flex flex-col gap-3 ">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="font-ui-sans text-sm font-medium">Remaining amount to fund: </span>
              <span className="font-ui-mono text-sm font-medium">
                {formattedNeededTokens} {poolConfig.tokenTicker}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="inline-flex h-9 w-24 items-center justify-start gap-2 rounded-lg border border-black bg-white p-2">
                <div className="font-ui-mono text-sm font-normal leading-tight text-grey-500">
                  {formattedNeededTokens}
                </div>
              </div>
              <span className="font-ui-mono text-sm font-medium">{poolConfig.tokenTicker}</span>
            </div>
            <Button value="Fund" onClick={() => onFundRound(tokensNeeded)} />
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Icon
            className="size-4 rounded-full bg-moss-500 p-0.5 text-white"
            type={IconType.CHECK}
          />
          <span className="font-ui-sans text-sm font-normal">Your round has been funded</span>
          <span className="font-ui-mono text-sm font-bold">
            {poolConfig.amountOfTokensToDistribute} {poolConfig.tokenTicker}
          </span>
          {!!poolConfig.constantAmountPerGrant && (
            <div className="flex items-center gap-1 pl-5">
              <Icon
                className="size-5 rounded-full text-yellow-500"
                type={IconType.INFORMATION_CIRCLE}
              />
              <span className="font-ui-sans text-sm font-normal">
                This round has a constant distribution amount per application of
              </span>

              <span className="font-ui-mono text-sm font-bold">
                {poolConfig.constantAmountPerGrant} {poolConfig.tokenTicker}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
