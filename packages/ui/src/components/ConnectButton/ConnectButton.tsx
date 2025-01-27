import { match } from "ts-pattern";

import { Button } from "@/primitives";

export const ConnectButton = ({
  type,
  onClick,
}: {
  type: "vote" | "admin";
  onClick?: () => void;
}) => {
  const className = match(type)
    .with("vote", () => "bg-purple-900 text-[14px]/[24px]")
    .with("admin", () => "bg-moss-700 text-[14px]/[24px]")
    .exhaustive();
  return <Button value="Connect wallet" onClick={onClick} className={className} />;
};
