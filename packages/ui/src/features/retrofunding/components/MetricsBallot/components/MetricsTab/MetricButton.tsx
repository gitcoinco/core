import { PlusIcon } from "@heroicons/react/solid";

import { cn } from "@/lib/utils";
import { Button, IconType } from "@/primitives";
import { Icon } from "@/primitives";
import { TooltipContent, Tooltip, TooltipProvider, TooltipTrigger } from "@/ui-shadcn/tooltip";

interface MetricButtonProps {
  isAdded: boolean;
  isLocked: boolean;
  alreadyVoted: boolean;
  onClick: () => void;
}

export const MetricButton = ({ isAdded, isLocked, onClick, alreadyVoted }: MetricButtonProps) => {
  const getTooltipMessage = () => {
    if (alreadyVoted) return "You have already voted";
    if (isLocked) return "Unlock to remove from ballot";
    if (isAdded) return "Click to remove from ballot";
    return "Click to add to ballot";
  };

  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <div className="cursor-pointer">
            <Button
              variant={isAdded ? "success" : "light-purple"}
              disabled={isLocked}
              onClick={onClick}
              className={cn("flex items-center gap-2")}
              icon={
                isAdded ? (
                  <Icon className="size-4" type={IconType.CHECK} />
                ) : (
                  <PlusIcon className="size-4" />
                )
              }
              value={isAdded ? "Added to ballot" : "Add to ballot"}
            />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{getTooltipMessage()}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
