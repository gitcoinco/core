"use client";

import * as React from "react";

import { tv, type VariantProps } from "tailwind-variants";

import { Avatar } from "@/primitives/Avatar";
import { BannerImage } from "@/primitives/BannerImage";

const bannerVariants = tv({
  slots: {
    container: "relative mb-[60px]",
    avatarContainer: "absolute bottom-0 translate-y-1/2",
  },
  variants: {
    avatarPosition: {
      center: {
        avatarContainer: "left-1/2 -translate-x-1/2",
      },
      left: {
        avatarContainer: "left-8",
      },
      right: {
        avatarContainer: "right-8",
      },
    },
  },
  defaultVariants: {
    avatarPosition: "center",
  },
});

export type ProjectBannerProps = {
  bannerImg: string;
  logoImg: string;
} & VariantProps<typeof bannerVariants>;

export const ProjectBanner: React.FC<ProjectBannerProps> = ({
  bannerImg,
  logoImg,
  avatarPosition,
}) => {
  const { container, avatarContainer } = bannerVariants({ avatarPosition });

  return (
    <div className={container()}>
      <BannerImage ipfsCID={bannerImg} size={1280} rounding="3xl" />
      <div className={avatarContainer()}>
        <Avatar ipfsCID={logoImg} size={120} noPadding variant="bordered" />
      </div>
    </div>
  );
};
