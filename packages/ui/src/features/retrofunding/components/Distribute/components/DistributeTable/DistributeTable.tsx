import { useCallback, useState, useMemo, useEffect } from "react";

import { ApplicationPayout, PoolConfig } from "@/types/distribute";
import { Table, TableHeader, TableBody } from "@/primitives/Table";

import { ProjectTableRow } from "./ProjectTableRow";
import { TableHeaderRow } from "./TableHeaderRow";

interface DistributeTableProps {
  applications: ApplicationPayout[];
  isEditing?: boolean;
  isFinalized?: boolean;
  poolConfig: PoolConfig;
  onSelectApplications?: (projects: ApplicationPayout[]) => void;
  onDistribute?: (applicationId?: string) => void;
  onEditPayouts?: (applications: ApplicationPayout[]) => void;
}

export const DistributeTable = ({
  applications,
  isEditing,
  isFinalized,
  poolConfig,
  onSelectApplications,
  onDistribute,
  onEditPayouts,
}: DistributeTableProps) => {
  const [selectedApplications, setSelectedApplications] = useState<string[]>([]);
  const [originalApplications, setOriginalApplications] =
    useState<ApplicationPayout[]>(applications);
  const [editedApplications, setEditedApplications] = useState<ApplicationPayout[]>(applications);

  const isAllSelected = useMemo(
    () => selectedApplications.length === applications.length,
    [selectedApplications, applications],
  );

  useEffect(() => {
    setOriginalApplications(applications);
    setEditedApplications(applications);
  }, [applications]);

  useEffect(() => {
    if (isEditing && onEditPayouts) {
      onEditPayouts(editedApplications);
    }
  }, [isEditing, onEditPayouts, editedApplications]);

  const handleSelectAll = useCallback(
    (checked: boolean) => {
      const newSelection = checked ? applications.map((p) => p.id) : [];
      setSelectedApplications(newSelection);
      if (onSelectApplications) {
        onSelectApplications(checked ? applications : []);
      }
    },
    [applications, onSelectApplications],
  );

  const handleSelectApplication = useCallback(
    (applicationId: string, checked: boolean) => {
      if (onSelectApplications) {
        setSelectedApplications((prev) => {
          const newSelection = checked
            ? [...prev, applicationId]
            : prev.filter((id) => id !== applicationId);
          onSelectApplications(
            (isEditing ? editedApplications : originalApplications).filter((p) =>
              newSelection.includes(p.id),
            ),
          );
          return newSelection;
        });
      }
    },
    [isEditing, editedApplications, originalApplications, onSelectApplications],
  );

  const handleEditApplication = useCallback((updatedApplication: ApplicationPayout) => {
    setEditedApplications((prev) =>
      prev.map((app) =>
        app.id === updatedApplication.id
          ? { ...app, payoutPercentage: updatedApplication.payoutPercentage }
          : app,
      ),
    );
  }, []);

  return (
    <div className="flex h-[692px] justify-center overflow-auto">
      <Table className="mx-auto bg-grey-50">
        <TableHeader>
          <TableHeaderRow
            isEditing={isEditing}
            isFinalized={isFinalized}
            isAllSelected={isAllSelected}
            onSelectAll={handleSelectAll}
            amountOfApplications={applications.length}
          />
        </TableHeader>
        <TableBody>
          {originalApplications.map((application) => {
            const editedApplication = editedApplications.find((app) => app.id === application.id);
            return (
              <ProjectTableRow
                key={application.id}
                application={application}
                editedApplication={editedApplication || application}
                allApplications={originalApplications}
                editedApplications={editedApplications}
                isEditing={isEditing}
                isFinalized={isFinalized}
                isSelected={selectedApplications.includes(application.id)}
                poolConfig={poolConfig}
                onSelect={handleSelectApplication}
                onEditApplication={handleEditApplication}
                onDistribute={onDistribute}
              />
            );
          })}
        </TableBody>
        {applications.length === 0 && !isFinalized && (
          <div className="py-3 pl-3 font-ui-sans text-base font-normal text-grey-900">
            Projects that haven’t been paid out yet will appear here.
          </div>
        )}
      </Table>
    </div>
  );
};
