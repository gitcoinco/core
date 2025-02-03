import { Button } from "@/index";

interface ActionButtonsProps {
  isEditing: boolean;
  canEdit: boolean;
  hasPendingApplications: boolean;
  distributionCompleted: boolean;
  selectedCount: number;
  onEdit: () => void;
  onSave: () => void;
  onCancel: () => void;
  onDistribute: () => void;
}

export const ActionButtons = ({
  isEditing,
  canEdit,
  hasPendingApplications,
  selectedCount,
  distributionCompleted,
  onEdit,
  onSave,
  onCancel,
  onDistribute,
}: ActionButtonsProps) => (
  <div className="flex items-center justify-end gap-6">
    {!isEditing ? (
      <>
        {canEdit && (
          <Button
            value="Edit voting distribution"
            variant="ghost"
            onClick={onEdit}
            className="h-10 rounded-lg bg-white px-4 py-2 font-ui-mono text-sm font-medium text-[#4b5050]"
          />
        )}
        {hasPendingApplications && (
          <Button
            disabled={selectedCount === 0}
            value={`Distribute tokens to (${selectedCount}) applications`}
            onClick={() => onDistribute()}
          />
        )}
        {distributionCompleted && (
          <span className="h-10 rounded-lg bg-[#22635a] px-4 py-2 font-ui-mono text-sm font-medium text-white">
            Distribution completed successfully
          </span>
        )}
      </>
    ) : (
      <>
        <Button
          value="Cancel"
          variant="ghost"
          onClick={onCancel}
          className="h-10 rounded-lg bg-[#22635a] px-4 py-2 font-ui-mono text-sm font-medium text-white"
        />
        <Button
          value="Save"
          onClick={onSave}
          className="h-10 rounded-lg bg-[#22635a] px-4 py-2 font-ui-mono text-sm font-medium text-white"
        />
      </>
    )}
  </div>
);
