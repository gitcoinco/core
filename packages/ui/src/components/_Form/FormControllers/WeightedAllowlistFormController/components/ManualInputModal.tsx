import { useState } from "react";

import { isAddress } from "viem";

import { Icon, IconType, Switch, TextArea } from "@/primitives";
import { Button } from "@/primitives/Button";
import { DialogContent, DialogTitle, Dialog } from "@/primitives/Dialog";
import { Modal } from "@/primitives/Modal";

export const ManualInputModal = ({
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
  // Simple temporary state for the modal only
  const [isWeighted, setIsWeighted] = useState(initialValues.isWeighted);
  const [addressText, setAddressText] = useState(
    Array.isArray(initialValues.addresses) ? initialValues.addresses.join(",") : "",
  );
  const [error, setError] = useState<string | null>(null);
  // Simple info message based on weighting
  const infoMessage = isWeighted
    ? "Enter all the addresses as a comma-separated list below. Duplicates and invalid addresses will be removed. You can assign weights after saving."
    : "Enter all the addresses as a comma-separated list below. Duplicates and invalid addresses will be removed.";

  const handleSave = () => {
    // Parse addresses from text input
    const addresses = addressText
      .split(",")
      .map((addr) => addr.trim())
      .filter(Boolean)
      .filter((address) => isAddress(address));

    // include weights to be an array of length equal to the number of addresses
    const weights = Array(addresses.length).fill(100);
    const areAddressesSameAsInitial = addresses.every((address) =>
      initialValues.addresses.find((a) => a.toLowerCase() === address.toLowerCase()),
    );

    if (addresses.length <= 0) {
      setError("🚨 Please enter at least one address");
      return;
    }

    if (areAddressesSameAsInitial) {
      setError(null);
      onSave(addresses, isWeighted, initialValues.weights);
      setIsOpen(false);
    } else {
      setError(null);
      onSave(addresses, isWeighted, weights);
      setIsOpen(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Modal className="m-0 rounded-lg p-0">
        <DialogContent className="flex max-w-[737px] flex-col gap-0 p-0">
          <DialogTitle className="flex items-center justify-between rounded-t-lg bg-grey-50 p-6">
            <span className="font-ui-sans text-2xl font-semibold">Manually enter voters</span>
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
            <div className="flex flex-col gap-2">
              <span className="font-ui-sans text-sm font-normal">
                Add or remove wallet addresses
              </span>
              <TextArea
                value={addressText}
                onChange={(e) => setAddressText(e.target.value)}
                placeholder="Enter all the addresses as a comma-separated list here..."
                className="min-h-52 w-full"
              />
            </div>
            {error && <p className="font-ui-sans text-sm font-medium text-red-300">{error}</p>}
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
