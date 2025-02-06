import { Button } from "@/index";

interface ActionButtonsProps {
  isEditing: boolean;
  canEdit: boolean;
  canResetEdit: boolean;
  hasPendingApplications: boolean;
  distributionCompleted: boolean;
  selectedCount: number;
  onEdit: () => void;
  onResetEdit: () => void;
  onSave: () => void;
  onCancel: () => void;
  onDistribute: () => void;
}

export const ActionButtons = ({
  isEditing,
  canEdit,
  canResetEdit,
  hasPendingApplications,
  selectedCount,
  distributionCompleted,
  onEdit,
  onResetEdit,
  onSave,
  onCancel,
  onDistribute,
}: ActionButtonsProps) => (
  <div className="flex items-start justify-end gap-6">
    {!isEditing ? (
      <>
        {canEdit && (
          <div className="flex flex-col items-start gap-2">
            <Button
              value="Edit voting distribution"
              variant="ghost"
              onClick={onEdit}
              className="h-10 rounded-lg bg-white px-4 py-2 font-ui-mono text-sm font-medium text-[#4b5050]"
            />
            {canResetEdit && (
              <Button
                value="Reset editted distribution"
                variant="ghost"
                onClick={onResetEdit}
                className="h-10 rounded-lg bg-white px-4 py-2 font-ui-mono text-sm font-medium text-[#4b5050]"
              />
            )}
          </div>
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
