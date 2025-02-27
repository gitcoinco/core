import { P, match } from "ts-pattern";
import { Hex } from "viem";

export const parseENSOrAddress = (ens?: string, address?: string) => {
  return match({ ens, address })
    .with({ ens: P.string }, ({ ens }) => ens)
    .with({ address: P.string }, ({ address }) => address.slice(0, 4) + "..." + address.slice(-4))
    .otherwise(() => "");
};

export const addressFrom = (index: number): Hex => {
  const address = index.toString(16).padStart(40, "0");
  return `0x${address}`;
};
