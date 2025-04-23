import { Hex } from "viem";

export const getAddressLabel = (ens?: string, address?: string) => {
  let addressLabel = "";
  if (ens) {
    addressLabel = ens;
  } else if (address) {
    addressLabel = address.slice(0, 4) + "..." + address.slice(-4);
  }
  return addressLabel;
};

export const addressFrom = (index: number): Hex => {
  const address = index.toString(16).padStart(40, "0");
  return `0x${address}`;
};
