import { match } from "ts-pattern";

import { Button } from "@/primitives";

export interface ConnectButtonProps {
  type: "vote" | "admin";
  onClick?: () => void;
}

export const ConnectButton = ({ type, onClick }: ConnectButtonProps) => {
  const className = match(type)
    .with("vote", () => "bg-purple-900 text-[14px]/[24px]")
    .with("admin", () => "bg-moss-700 text-[14px]/[24px]")
    .exhaustive();
  return <Button value="Connect wallet" onClick={onClick} className={className} />;
};
