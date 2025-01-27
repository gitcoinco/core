import { match } from "ts-pattern";

import { RetrofundingIcon, VoteIcon } from "@/assets/icons";

interface BaseLandingProps {
  type: "vote" | "admin";
  actionButton?: React.ReactNode;
}
export interface VoteSpecificProps extends BaseLandingProps {
  roundName: string;
  roundDescription: string;
}

export type AdminSpecificProps = BaseLandingProps;

export type LandingProps = VoteSpecificProps | AdminSpecificProps;

export const LandingPage = ({ type, ...props }: LandingProps) => {
  return match(type)
    .with("vote", () => <VoteLanding {...(props as VoteSpecificProps)} />)
    .with("admin", () => <AdminLanding {...(props as AdminSpecificProps)} />)
    .exhaustive();
};

const VoteLanding = ({ roundName, roundDescription, actionButton }: VoteSpecificProps) => {
  return (
    <div className="background-grid-purple flex flex-col items-center justify-center">
      <div className="flex max-w-[564px] flex-col items-center gap-8 ">
        <VoteIcon />
        <div className="flex flex-col gap-4 text-center">
          <div className="text-2xl font-medium">{roundName}</div>
          <div className="text-[16px]/[28px]">{roundDescription}</div>
        </div>
        {actionButton}
      </div>
    </div>
  );
};

const AdminLanding = ({ actionButton }: AdminSpecificProps) => {
  return (
    <div className="background-grid-green flex flex-col justify-center">
      <div className="flex flex-col items-center gap-10">
        <RetrofundingIcon />
        {actionButton}
      </div>
    </div>
  );
};
