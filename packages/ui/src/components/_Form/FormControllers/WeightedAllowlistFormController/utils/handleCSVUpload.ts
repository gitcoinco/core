import { isAddress, getAddress } from "ethers/lib/utils";
import Papa from "papaparse";

/**
 * Handles CSV file upload and extracts valid addresses with optional weights
 * @param event - The input change event
 * @param isWeighted - Whether to process the CSV as weighted (with weights in column 2)
 */
export const handleCSVUpload = (
  event: React.ChangeEvent<HTMLInputElement>,
  setAddresses: (addresses: string[]) => void,
  setWeights: (weights: number[]) => void,
  isWeighted: boolean,
): void => {
  const file = event.target.files?.[0];
  if (!file) return;

  Papa.parse(file, {
    complete: ({ data }) => {
      if (isWeighted) {
        // Handle weighted mode
        const validPairs: { address: string; weight: number }[] = [];

        data.forEach((row: any) => {
          if (Array.isArray(row) && row.length >= 2) {
            const address = typeof row[0] === "string" ? row[0].trim() : "";
            const weightStr = typeof row[1] === "string" ? row[1].trim() : "";

            if (isAddress(address)) {
              const weight = parseFloat(weightStr);
              if (!isNaN(weight) && weight >= 0 && weight <= 100) {
                validPairs.push({
                  address: getAddress(address),
                  weight,
                });
              }
            }
          }
        });

        // Deduplicate by address (keep last occurrence)
        const addressMap = new Map<string, number>();
        validPairs.forEach(({ address, weight }) => {
          addressMap.set(address, weight);
        });

        const addresses = Array.from(addressMap.keys());
        const weights = Array.from(addressMap.values());

        setAddresses(addresses);
        setWeights(weights);
      } else {
        // Non-weighted mode - just extract unique addresses
        const uniqueAddresses = Array.from(
          new Set(
            data
              .flat()
              .filter((item): item is string => typeof item === "string" && isAddress(item.trim()))
              .map((addr) => getAddress(addr.trim())),
          ),
        );

        setAddresses(uniqueAddresses);
      }
    },
    skipEmptyLines: true,
  });

  // Reset the input value
  event.target.value = "";
};
