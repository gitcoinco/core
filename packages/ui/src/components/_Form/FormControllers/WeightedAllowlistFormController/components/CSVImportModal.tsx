import { useRef, useState } from "react";

import { UploadIcon } from "@heroicons/react/outline";

import { cn } from "@/lib/utils";
import { Icon, IconType, Switch } from "@/primitives";
import { Button } from "@/primitives/Button";
import { DialogContent, DialogTitle, Dialog } from "@/primitives/Dialog";
import { Modal } from "@/primitives/Modal";

import { handleCSVUpload } from "../utils";

export const CSVImportModal = ({
  isOpen,
  setIsOpen,
  onSave,
  initialValues,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onSave: (addresses: string[], isWeighted: boolean, weights: number[]) => void;
  initialValues: { addresses: string[]; isWeighted: boolean; weights: number[] };
}) => {
  // Simple temporary state just for this modal
  const [isWeighted, setIsWeighted] = useState(initialValues.isWeighted);
  const [addresses, setAddresses] = useState<string[]>([]);
  const [weights, setWeights] = useState<number[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState<string | null>(null);

  // Simple info message
  const infoMessage = isWeighted
    ? "CSV should have addresses in column 1 and weights (0-100) in column 2. Duplicates and invalid entries will be removed."
    : "CSV should contain addresses (one per row or cell). Duplicates and invalid addresses will be removed.";

  const handleSave = () => {
    // Only save if we have addresses from file upload
    if (addresses.length > 0) {
      setError(null);
      onSave(addresses, isWeighted, weights);
    } else {
      setError("🚨 There was an error importing the CSV file. Please try again.");
      return;
    }
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Modal className="m-0 rounded-lg p-0">
        <DialogContent className="flex max-w-[743px] flex-col gap-0 p-0">
          <DialogTitle className="flex items-center justify-between rounded-t-lg bg-grey-50 p-6">
            <span className="font-ui-sans text-2xl font-semibold">Import CSV</span>
            <Icon type={IconType.X} onClick={() => setIsOpen(false)} />
          </DialogTitle>
          <div className="flex flex-col gap-6 p-6">
            <div className="flex flex-col gap-[10px]">
              <span className="font-ui-sans text-sm font-normal">Turn on weighted voting?</span>
              <div className="flex items-center gap-2">
                <span className="font-ui-sans text-sm font-normal">Weighted</span>
                <Switch checked={isWeighted} onCheckedChange={setIsWeighted} />
              </div>
            </div>

            <div className={cn("flex items-center justify-center")}>
              <Button
                value="Import CSV"
                className="border border-grey-100 bg-white text-black"
                icon={<UploadIcon className="size-4 text-grey-900" />}
                onClick={() => fileInputRef.current?.click()}
              />
              <input
                type="file"
                id="csv-upload"
                className="hidden"
                accept=".csv"
                onChange={(event) => handleCSVUpload(event, setAddresses, setWeights, isWeighted)}
                ref={fileInputRef}
              />
            </div>

            {addresses.length > 0 && (
              <p className="font-ui-sans text-sm font-medium text-green-300">
                ✅ {addresses.length} valid addresses {isWeighted ? "with weights" : ""} imported
              </p>
            )}

            {addresses.length <= 0 && error && (
              <p className="font-ui-sans text-sm font-medium text-red-300">{error}</p>
            )}

            <span className="font-ui-sans text-sm text-grey-900">{infoMessage}</span>
            <div className="flex justify-end">
              <Button value="Save" onClick={handleSave} />
            </div>
          </div>
        </DialogContent>
      </Modal>
    </Dialog>
  );
};
