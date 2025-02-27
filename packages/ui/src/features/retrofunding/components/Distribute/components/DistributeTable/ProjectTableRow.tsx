import { useCallback, useEffect, useRef } from "react";
import { NumericFormat } from "react-number-format";

import { ApplicationPayout, PoolConfig } from "@gitcoin/types";
import { cn } from "@gitcoin/utils";
import { getTransactionUrl } from "@gitcoin/utils";

import { Button, Checkbox } from "@/primitives";
import { TableRow, TableCell } from "@/primitives/Table";

import { formatAmountFromPercentage } from "../../utils";

interface ApplicationTableRowProps {
  application: ApplicationPayout;
  editedApplication: ApplicationPayout;
  allApplications: ApplicationPayout[];
  editedApplications: ApplicationPayout[];
  isEditing?: boolean;
  isFinalized?: boolean;
  isSelected: boolean;
  poolConfig: PoolConfig;
  onSelect: (projectId: string, checked: boolean) => void;
  onEditApplication?: (application: ApplicationPayout) => void;
  onDistribute?: (applications: { applicationId: string; amount: bigint }[]) => void;
}

export const ProjectTableRow = ({
  application,
  editedApplication,
  allApplications,
  editedApplications,
  isEditing,
  isFinalized,
  isSelected,
  poolConfig,
  onSelect,
  onEditApplication,
  onDistribute,
}: ApplicationTableRowProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY < 0 ? 1 : -1;
      const currentVal = editedApplication.payoutPercentage;
      const nextVal = Number((currentVal + delta).toFixed(4));

      if (nextVal >= 0 && handleSafeChange(nextVal) && onEditApplication) {
        onEditApplication({
          ...editedApplication,
          payoutPercentage: nextVal,
        });
      }
    },
    [editedApplication],
  );

  useEffect(() => {
    const input = inputRef.current;
    input?.addEventListener("wheel", handleWheel, { passive: false });
    return () => input?.removeEventListener("wheel", handleWheel);
  }, [handleWheel, inputRef.current]);

  const handleSafeChange = useCallback(
    (newValue: number) => {
      const otherApplicationsTotal = editedApplications
        .filter((a) => a.id !== application.id)
        .reduce((acc, p) => acc + (p.payoutPercentage ?? 0), 0);

      return otherApplicationsTotal + newValue <= 100;
    },
    [editedApplications, application.id],
  );

  const formatPayoutAmount = (percentage: number): number => {
    const amount = (percentage / 100) * poolConfig.amountOfTokensToDistribute;
    return Number(amount.toFixed(4));
  };

  const showCheckbox = !isEditing && !isFinalized && allApplications.length > 1;

  const applicationToConsider = isEditing ? editedApplication : application;

  return (
    <TableRow className="border-grey-300 bg-grey-50">
      <TableCell>
        <div className="flex items-center gap-2">
          {showCheckbox && (
            <Checkbox
              className="shrink-0"
              name="project-checkbox"
              id={`project-${application.id}`}
              checked={isSelected}
              onCheckedChange={(checked) => onSelect(application.id, Boolean(checked))}
            />
          )}
          <img
            className="size-12 rounded object-cover"
            src={application.imageUrl}
            alt={application.title}
          />
          <span className="line-clamp-2 max-w-52 font-ui-sans text-base">{application.title}</span>
        </div>
      </TableCell>
      <TableCell>
        <div className="max-w-60 rounded-lg bg-grey-100 p-2">
          <span className="line-clamp-2 break-all font-ui-mono text-sm text-grey-500">
            {application.payoutAddress}
          </span>
        </div>
      </TableCell>
      <TableCell className="text-center">
        <div
          className={cn(
            "inline-flex rounded-lg border border-grey-300 bg-white px-4 py-2",
            isFinalized && "border-none bg-grey-100 text-grey-500",
          )}
        >
          <span className="font-ui-mono text-sm">{`${application.payoutPercentage}%`}</span>
        </div>
      </TableCell>
      {isEditing && (
        <TableCell className="text-center">
          <NumericFormat
            getInputRef={inputRef}
            suffix="%"
            allowNegative={false}
            allowLeadingZeros={false}
            decimalSeparator=","
            decimalScale={6}
            min={0}
            className="w-[68px] rounded-lg border border-grey-300 bg-white py-2 text-center font-ui-mono text-sm outline-none"
            isAllowed={(values) => {
              const val = values?.floatValue ?? 0;
              return val >= 0 && handleSafeChange(val);
            }}
            value={editedApplication.payoutPercentage}
            onBlur={(e: any) => {
              const newValue = Number(
                Number(e.target.value.replace("%", "").replace(",", ".")).toFixed(4),
              );
              if (handleSafeChange(newValue) && onEditApplication) {
                onEditApplication({
                  ...editedApplication,
                  payoutPercentage: newValue,
                });
              }
            }}
          />
        </TableCell>
      )}
      <TableCell>
        <div className="flex items-center justify-center gap-2">
          <div className="rounded-lg bg-grey-100 p-2">
            <span className="font-ui-mono text-sm text-grey-500">
              {formatPayoutAmount(applicationToConsider.payoutPercentage)}
            </span>
          </div>
          <span className="font-ui-mono text-sm font-medium">{poolConfig.tokenTicker}</span>
        </div>
      </TableCell>
      {!isEditing && !isFinalized && onDistribute && (
        <TableCell className="text-center">
          <Button
            disabled={!isSelected}
            variant="light-purple"
            value="Distribute"
            onClick={() =>
              onDistribute([
                {
                  applicationId: application.id,
                  amount: formatAmountFromPercentage(
                    poolConfig.amountOfTokensToDistribute,
                    application.payoutPercentage,
                    poolConfig.tokenDecimals,
                  ),
                },
              ])
            }
          />
        </TableCell>
      )}
      {isFinalized && (
        <TableCell className="text-center">
          <Button
            variant="light-purple"
            value="View transaction"
            onClick={() => {
              const url = getTransactionUrl(
                poolConfig.chainId,
                application.payoutTransactionHash ?? "",
              );
              if (url) {
                window.open(url, "_blank");
              }
            }}
          />
        </TableCell>
      )}
    </TableRow>
  );
};
