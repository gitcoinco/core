import { Icon, IconType } from "@/primitives/Icon";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
  TooltipContentProps,
} from "@/ui-shadcn/tooltip";

interface IconWithTooltipProps extends TooltipContentProps {
  iconType: IconType;
  tooltipText?: string;
  delayDuration?: number;
  iconClassName?: string;
  tooltipClassName?: string;
}

export const IconWithTooltip = ({
  iconType,
  tooltipText,
  delayDuration = 1,
  side = "top",
  iconClassName,
  tooltipClassName,
  ...props
}: IconWithTooltipProps) => {
  return (
    <TooltipProvider delayDuration={delayDuration}>
      <Tooltip>
        <TooltipTrigger aria-label={tooltipText} title="">
          <Icon type={iconType} className={iconClassName} />
        </TooltipTrigger>
        <TooltipContent side={side} {...props}>
          <p className={tooltipClassName}>{tooltipText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
