"use client";

import React from "react";

import { match } from "ts-pattern";

import { formatDate, DateFormat } from "@/lib/dates/formatDate";
import { getAddressLabel } from "@/lib/utils";
import { Icon, IconType } from "@/primitives/Icon";
import { Skeleton } from "@/primitives/Skeleton";

import { IconLabelContainer } from "./IconLabelContainer";
import { IconLabelProps } from "./types";
import { getEvaluation, getFormattedLink } from "./utils";
import { variants } from "./variants";

export const IconLabel: React.FC<
  IconLabelProps & {
    isLoading?: boolean;
  }
> = (props) => {
  const { text, icon } = variants();

  return match(props)
    .with({ type: "ai-evaluation" }, ({ percent = 0, className, isLoading }) => {
      const { message, variant } = getEvaluation(percent, isLoading) as keyof typeof icon;

      return (
        <IconLabelContainer
          type="ai-evaluation-a"
          className={className}
          iconType={IconType.SPARKLES}
          iconVariant={icon({ type: variant })}
        >
          {match(isLoading)
            .with(true, () => <Skeleton className="h-6 w-28 rounded-lg" />)
            .otherwise(() => (
              <span className={text()}>{message}</span>
            ))}
        </IconLabelContainer>
      );
    })

    .with({ type: "date" }, ({ date, className, isLoading }) => (
      <IconLabelContainer
        type="date"
        className={className}
        iconType={IconType.CLOCK}
        iconVariant={icon({ type: isLoading ? "loading" : "date" })}
      >
        {match(isLoading)
          .with(true, () => <Skeleton className="h-6 w-40 rounded-lg" />)
          .otherwise(() => (
            <span className={text()}>{formatDate(date, DateFormat.FullDate24Hour)}</span>
          ))}
      </IconLabelContainer>
    ))
    .with({ type: "period" }, ({ startDate, endDate, className, isLoading }) => (
      <IconLabelContainer
        type="period"
        className={className}
        iconType={IconType.CALENDAR}
        iconVariant={icon({ type: isLoading ? "loading" : "dateWithPrefix" })}
      >
        {match(isLoading)
          .with(true, () => <Skeleton className="h-6 w-102 rounded-lg" />)
          .otherwise(() => (
            <span className={text()}>{`${formatDate(
              startDate,
              DateFormat.ShortMonthDayYear,
            )} - ${formatDate(endDate, DateFormat.ShortMonthDayYear)}`}</span>
          ))}
      </IconLabelContainer>
    ))
    .with({ type: "roundPeriod" }, ({ startDate, endDate = undefined, className, isLoading }) => (
      <IconLabelContainer
        type="period"
        className={className}
        iconType={IconType.CLOCK}
        iconVariant={icon({ type: isLoading ? "loading" : "roundPeriod" })}
      >
        {match(isLoading)
          .with(true, () => (
            <div className="flex items-center gap-1">
              <span className={text({ type: "roundPeriod" })}>{`Review period:`}</span>
              <Skeleton className="h-6 w-72 rounded-lg" />
            </div>
          ))
          .otherwise(() => (
            <span className={text({ type: "roundPeriod" })}>{`Review period: ${formatDate(
              startDate,
              DateFormat.ShortMonthDayYear24HourUTC,
            )} - ${
              endDate
                ? formatDate(endDate, DateFormat.ShortMonthDayYear24HourUTC)
                : "No end date (open round)"
            }`}</span>
          ))}
      </IconLabelContainer>
    ))
    .with({ type: "dateWithPrefix" }, ({ date, prefix, className, isLoading }) => (
      <IconLabelContainer
        type="date"
        className={className}
        iconType={IconType.CALENDAR}
        iconVariant={icon({ type: isLoading ? "loading" : "dateWithPrefix" })}
      >
        {match(isLoading)
          .with(true, () => (
            <div className="flex items-center gap-1">
              <span className={text({ type: "roundPeriod" })}>{prefix}</span>
              <Skeleton className="h-6 w-56 rounded-lg" />
            </div>
          ))
          .otherwise(() => (
            <span className={text({ type: "dateWithPrefix" })}>{`${prefix} ${formatDate(
              date,
              DateFormat.FullDate12Hour,
            )}`}</span>
          ))}
      </IconLabelContainer>
    ))
    .with({ type: "address" }, ({ address, ens, className }) => {
      const label = getAddressLabel(ens, address);
      return (
        <IconLabelContainer
          type="default"
          className={className}
          iconType={IconType.ETH}
          iconVariant={icon({ type: "default" })}
        >
          <span className={text()}>{label}</span>
        </IconLabelContainer>
      );
    })
    .with({ type: "social" }, ({ platform, link, isVerified = false, className, isLoading }) => {
      const formattedLink = getFormattedLink(platform, link);
      const iconType = match(platform)
        .with("github", () => IconType.GITHUB)
        .with("twitter", () => IconType.TWITTER)
        .with("website", () => IconType.GLOBE)
        .otherwise(() => IconType.GLOBE);
      return (
        <IconLabelContainer
          type="default"
          className={className}
          iconType={iconType}
          iconVariant={icon({ type: "default" })}
        >
          {match(isLoading)
            .with(true, () => <Skeleton className="h-6 w-32 rounded-lg" />)
            .otherwise(() => (
              <a href={link} target="_blank" rel="noreferrer" className={text({ type: "social" })}>
                {formattedLink}
              </a>
            ))}
          {isVerified && (
            <Icon type={IconType.VERIFIEDBADGE} className={icon({ type: "verifiedBadge" })} />
          )}
        </IconLabelContainer>
      );
    })
    .with(
      { type: "default" },
      ({
        iconType,
        label,
        className,
        iconVariant,
        textVariant,
        laodingSkeletonClassName,
        isLoading,
      }) => (
        <IconLabelContainer
          type="default"
          className={className}
          iconType={isLoading ? undefined : iconType}
          iconVariant={iconVariant ?? icon({ type: "default" })}
        >
          {match(isLoading)
            .with(true, () => <Skeleton className={laodingSkeletonClassName} />)
            .otherwise(() => (
              <span className={textVariant ?? text({ type: "default" })}>{label}</span>
            ))}
        </IconLabelContainer>
      ),
    )
    .otherwise(() => (
      <IconLabelContainer
        type="default"
        iconType={IconType.X}
        iconVariant={icon({ type: "default" })}
      >
        <span className={text()}>You haven't selected a type</span>
      </IconLabelContainer>
    ));
};
