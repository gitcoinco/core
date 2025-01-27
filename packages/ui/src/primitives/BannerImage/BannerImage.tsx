"use client";

import { useMemo } from "react";

import { tv } from "tailwind-variants";
import { match, P } from "ts-pattern";

import DefaultBanner from "@/assets/images/default_banner.jpg";

const bannerVariants = tv({
  variants: {
    rounding: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
      "3xl": "rounded-3xl",
    },
  },
  defaultVariants: {
    rounding: "none",
  },
});

interface BannerImageProps {
  ipfsCID?: string;
  url?: string;
  size?: number;
  ipfsBaseURL?: string;
  defaultImage?: string;
  rounding?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
}

export const BannerImage = ({
  ipfsCID,
  url,
  size = 0,
  ipfsBaseURL = "https://ipfs.io/ipfs/",
  defaultImage = DefaultBanner,
  rounding = "none",
}: BannerImageProps) => {
  const imageURL = useMemo(() => {
    return match({ ipfsCID, url })
      .with(
        { ipfsCID: P.when((cid) => !cid || typeof cid !== "string"), url: P.nullish },
        () => defaultImage,
      )
      .with({ ipfsCID: P.when((cid) => !cid || typeof cid !== "string"), url }, ({ url }) => url)
      .with(
        { ipfsCID: P.when((cid) => typeof cid === "string" && cid.length > 0), url: P.nullish },
        ({ ipfsCID }) => `${ipfsBaseURL}${ipfsCID}`,
      )
      .with(
        { ipfsCID: P.string.minLength(1), url: P.string.minLength(1) },
        ({ ipfsCID }) => `${ipfsBaseURL}${ipfsCID}`,
      )
      .otherwise(() => defaultImage);
  }, [ipfsCID, url, ipfsBaseURL]);

  const variantClasses = bannerVariants({
    rounding,
  });

  const sizeStyle = useMemo(() => {
    if (!size || size <= 0) {
      return undefined;
    }
    return { width: `${size}px` };
  }, [size]);

  return (
    <img
      src={imageURL}
      alt="banner"
      className={`aspect-3/1 object-cover ${variantClasses}`}
      style={sizeStyle}
    />
  );
};
