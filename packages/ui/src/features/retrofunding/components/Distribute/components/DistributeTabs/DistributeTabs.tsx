// DistributionTabs.tsx
import { ApplicationPayout, PoolConfig } from "@/types/distribute";
import { Tabs, TabsContent, TabsList } from "@/ui-shadcn/tabs";

import { DistributeTable } from "../DistributeTable";
import { TabTrigger } from "./TabTrigger";

interface DistributeTabsProps {
  pendingApplications: ApplicationPayout[];
  finalizedApplications: ApplicationPayout[];
  isEditing: boolean;
  poolConfig: PoolConfig;
  onSelectApplications: (applicationIds: string[]) => void;
  onDistribute: (
    applications: {
      applicationId: string;
      amount: bigint;
    }[],
  ) => void;
  onEditPayouts: (applications: ApplicationPayout[]) => void;
}

/**
 * Tabbed interface for displaying pending and finalized projects
 */
export const DistributeTabs = ({
  pendingApplications,
  finalizedApplications,
  isEditing,
  poolConfig,
  onSelectApplications,
  onDistribute,
  onEditPayouts,
}: DistributeTabsProps) => {
  const handleApplicationSelection = (applications: ApplicationPayout[]) => {
    onSelectApplications(applications.map((p) => p.id));
  };

  return (
    <Tabs defaultValue="pending" className="w-full bg-grey-50">
      <TabsList className="inline-flex gap-12 bg-grey-50">
        <TabTrigger value="pending" label="Pending" count={pendingApplications.length} />
        <TabTrigger value="finalized" label="Finalized" count={finalizedApplications.length} />
      </TabsList>

      <TabsContent value="pending" className="mt-6">
        <DistributeTable
          applications={pendingApplications}
          isEditing={isEditing}
          poolConfig={poolConfig}
          onSelectApplications={handleApplicationSelection}
          onDistribute={onDistribute}
          onEditPayouts={onEditPayouts}
        />
      </TabsContent>

      <TabsContent value="finalized" className="mt-6">
        <DistributeTable
          applications={finalizedApplications}
          poolConfig={poolConfig}
          isFinalized
          onSelectApplications={handleApplicationSelection}
        />
      </TabsContent>
    </Tabs>
  );
};
