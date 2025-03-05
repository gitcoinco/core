"use client";

import { getTransactionUrl } from "@gitcoin/utils";

import { IconType } from "@/index";
import { Icon } from "@/index";
import { Button } from "@/index";

export const ViewTransactionButton = ({ chainId, txHash }: { chainId: number; txHash: string }) => {
  return (
    <Button
      value="View transaction"
      icon={<Icon type={IconType.EXTERNAL_LINK} className="size-4" />}
      onClick={() => {
        window.open(getTransactionUrl(chainId, txHash ?? "") ?? "", "_blank");
      }}
      iconPosition="right"
      variant="ghost"
      className="bg-white text-black"
    />
  );
};
