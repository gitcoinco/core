import { useState, useMemo } from "react";

import { cn } from "@/lib/utils";
import { PoolStatus } from "@/types";
import { ApplicationPayout, PoolConfig } from "@/types/distribute";

import { FundRoundSection, ActionButtons } from "./components";
import { DistributeTabs } from "./components/DistributeTabs";
import { useRound } from "./hooks/useRound";
import { formatAmountFromPercentage } from "./utils";

interface DistributeProps {
  applications: ApplicationPayout[];
  poolConfig: PoolConfig;
  onFundRound: (amount: bigint) => Promise<void>;
  onDistribute: (applications: { applicationId: string; amount: bigint }[]) => Promise<void>;
  onEditPayouts: (applications: ApplicationPayout[]) => Promise<void>;
  className?: string;
}

export const Distribute = ({
  applications,
  poolConfig,
  onFundRound,
  onDistribute,
  onEditPayouts,
  className,
}: DistributeProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedApplications, setSelectedApplications] = useState<string[]>([]);
  const [editedApplications, setEditedApplications] = useState<ApplicationPayout[]>(applications);

  const { finalizedApplications, pendingApplications } = useMemo(
    () => ({
      finalizedApplications: applications.filter((p) => p.payoutTransactionHash),
      pendingApplications: applications.filter((p) => !p.payoutTransactionHash),
    }),
    [applications],
  );

  const canEdit = finalizedApplications.length === 0 && pendingApplications.length > 0;
  const hasPendingApplications = pendingApplications.length > 0;
  const distributionCompleted =
    pendingApplications.length === 0 && finalizedApplications.length > 0;

  const handleDistribute = () => {
    onDistribute(
      applications
        .filter((p) => selectedApplications.includes(p.id))
        .map((p) => ({
          applicationId: p.id,
          amount: formatAmountFromPercentage(
            poolConfig.amountOfTokensToDistribute,
            p.payoutPercentage,
            poolConfig.tokenDecimals,
          ),
        })),
    );
  };

  const totalPaid = finalizedApplications.reduce(
    (acc, curr) =>
      acc +
      formatAmountFromPercentage(
        poolConfig.amountOfTokensToDistribute,
        curr.payoutPercentage,
        poolConfig.tokenDecimals,
      ),
    0n,
  );

  const { fundRoundCompleted } = useRound({
    poolConfig,
    totalPaid,
    distributionCompleted,
  });

  const handleEditPayouts = async (applications: ApplicationPayout[]) => {
    setEditedApplications(applications);
    await onEditPayouts(applications);
  };

  return (
    <div className={cn("flex flex-col gap-6 rounded-2xl bg-grey-50 p-6", className)}>
      <div className="flex flex-col gap-3">
        <h1 className="font-ui-sans text-2xl font-medium">Distribute</h1>
        <p className="font-ui-sans text-lg text-grey-900">
          Distribute funds and pay out grantees here.
        </p>
      </div>
      <FundRoundSection
        poolConfig={poolConfig}
        onFundRound={onFundRound}
        totalPaid={totalPaid}
        distributionCompleted={distributionCompleted}
      />
      <div className="flex flex-col gap-2">
        <h2 className="font-ui-sans text-xl font-medium">Pay grantees</h2>
        <p className="font-ui-sans text-base text-grey-900">
          Once your round has been funded and voting has finished, you can distribute tokens to
          grantees here.
        </p>
      </div>
      {poolConfig.poolStatus === PoolStatus.FundingPending && fundRoundCompleted && (
        <>
          <ActionButtons
            isEditing={isEditing}
            canEdit={canEdit}
            hasPendingApplications={hasPendingApplications}
            distributionCompleted={distributionCompleted}
            selectedCount={selectedApplications.length}
            onEdit={() => setIsEditing(true)}
            onSave={async () => {
              await handleEditPayouts(editedApplications);
              setIsEditing(false);
            }}
            onDistribute={handleDistribute}
            onCancel={() => {
              setIsEditing(false);
            }}
          />
          <DistributeTabs
            pendingApplications={pendingApplications}
            finalizedApplications={finalizedApplications}
            isEditing={isEditing}
            poolConfig={poolConfig}
            onSelectApplications={setSelectedApplications}
            onDistribute={handleDistribute}
            onEditPayouts={setEditedApplications}
          />
        </>
      )}
    </div>
  );
};
