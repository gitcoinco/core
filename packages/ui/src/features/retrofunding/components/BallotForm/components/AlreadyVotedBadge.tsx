import moment from "moment";

export const AlreadyVotedBadge = ({ submittedAt }: { submittedAt?: string }) => {
  if (!submittedAt) return null;
  return (
    <p className="rounded-xl bg-moss-100 p-4 text-sm font-medium text-moss-300">
      {`Your ballot was submitted on ${moment(submittedAt).format(
        "MMMM D, YYYY [at] HH:mm [UTC]",
      )}.`}
    </p>
  );
};
