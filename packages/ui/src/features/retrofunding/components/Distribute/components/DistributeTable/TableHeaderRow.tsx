import { Checkbox } from "@/primitives";
import { TableHead, TableRow } from "@/primitives/Table";

interface TableHeaderRowProps {
  isEditing?: boolean;
  isFinalized?: boolean;
  isAllSelected: boolean;
  onSelectAll: (checked: boolean) => void;
  amountOfApplications: number;
}

export const TableHeaderRow = ({
  isEditing,
  isFinalized,
  isAllSelected,
  onSelectAll,
  amountOfApplications,
}: TableHeaderRowProps) => {
  const showCheckbox = !isEditing && !isFinalized;

  return (
    <TableRow className="border-none bg-grey-50">
      <TableHead className="min-w-[260px]">
        <div className="flex items-center gap-2">
          {showCheckbox && (
            <Checkbox
              className="shrink-0"
              id="select-all"
              checked={isAllSelected && amountOfApplications > 0}
              onCheckedChange={onSelectAll}
            />
          )}
          <span className="font-ui-sans text-base font-bold text-black">Project</span>
        </div>
      </TableHead>
      <TableHead className="min-w-[200px]">
        <span className="font-ui-sans text-base font-bold text-black">Wallet address</span>
      </TableHead>
      <TableHead className="min-w-[122px] text-center">
        <span className="font-ui-sans text-base font-bold text-black">Voting distribution</span>
      </TableHead>
      {isEditing && !isFinalized && (
        <TableHead className="min-w-[122px] text-center">
          <span className="font-ui-sans text-base font-bold text-black">New distribution</span>
        </TableHead>
      )}
      <TableHead className="min-w-[122px] text-center">
        <span className="font-ui-sans text-base font-bold text-black">
          {!isEditing ? "Payout" : "New payout"}
        </span>
      </TableHead>
      {!isEditing && !isFinalized && (
        <TableHead className="min-w-[116px] text-center">
          <span className="font-ui-sans text-base font-bold text-black">Action</span>
        </TableHead>
      )}
      {isFinalized && (
        <TableHead className="min-w-[116px] text-center">
          <span className="font-ui-sans text-base font-bold text-black">View transaction</span>
        </TableHead>
      )}
    </TableRow>
  );
};
