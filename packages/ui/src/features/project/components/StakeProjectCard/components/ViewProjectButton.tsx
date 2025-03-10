"use client";

import { Button, Icon, IconType } from "@/primitives";

export const ViewProjectButton = ({
  chainId,
  roundId,
  applicationId,
}: {
  chainId: number;
  roundId: string;
  applicationId: string;
}) => {
  return (
    <Button
      className="justify-end"
      value="View Project"
      variant="ghost"
      icon={<Icon type={IconType.ARROW_RIGHT} className="size-4" />}
      iconPosition="right"
      onClick={() => {
        window.open(
          `https://explorer.gitcoin.co/#/round/${chainId}/${roundId}/${applicationId}`,
          "_blank",
        );
      }}
    />
  );
};
