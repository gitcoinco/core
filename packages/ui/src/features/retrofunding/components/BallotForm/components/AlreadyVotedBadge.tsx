import moment from "moment";

import { Button } from "@/primitives";
import { IconType, Icon } from "@/primitives";

export const AlreadyVotedBadge = ({
  submittedAt,
  onShare,
}: {
  submittedAt?: string;
  onShare?: () => void;
}) => {
  if (!submittedAt) return null;
  return (
    <div className="flex items-center justify-between rounded-xl bg-moss-100 p-4">
      <p className="text-sm font-medium text-moss-700">
        {`Your ballot was submitted on ${moment(submittedAt).format(
          "MMMM D, YYYY [at] HH:mm [UTC]",
        )}.`}
      </p>
      {onShare && (
        <Button
          value="Share on"
          icon={<Icon type={IconType.TWITTER} className="size-4 fill-white" />}
          iconPosition="right"
          onClick={onShare}
        />
      )}
    </div>
  );
};
