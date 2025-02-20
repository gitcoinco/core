import { useMemo } from "react";

import { tv } from "tailwind-variants";
import { match, P } from "ts-pattern";

import DefaultLogo from "@/assets/images/default_logo.png";
import { Avatar as ShadCNAvatar, AvatarFallback, AvatarImage } from "@/ui-shadcn/avatar";

export interface AvatarProps {
  fallbackName?: string;
  ipfsCID?: string;
  url?: string;
  size?: number;
  ipfsBaseURL?: string;
  defaultImage?: string;
  noPadding?: boolean; // New prop to optionally remove padding
  variant?: "default" | "bordered"; // New variant prop
}

const avatarVariants = tv({
  variants: {
    variant: {
      default: "shadow-slate-600 bg-white shadow-md",
      bordered: "border-4 border-white bg-white",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const Avatar = ({
  fallbackName,
  ipfsCID,
  url,
  size = 40,
  ipfsBaseURL = "https://ipfs.io/ipfs/",
  defaultImage = DefaultLogo,
  noPadding = false, // Default to false
  variant = "default", // Default to default variant
}: AvatarProps) => {
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

  const fallback = useMemo(() => {
    return match(fallbackName)
      .with(undefined, () => "")
      .otherwise((name) => {
        const words = name.trim().split(/\s+/);
        return match(words)
          .with([P.string], ([word]) =>
            word.length === 1 ? word.toUpperCase() : word.slice(0, 2).toUpperCase(),
          )
          .otherwise(([first, second]) => (first[0] + (second?.[0] || "")).toUpperCase());
      });
  }, [fallbackName]);

  const avatarClassNames = avatarVariants({ variant });

  return (
    <ShadCNAvatar
      role="presentation"
      className={`aspect-square h-full w-full ${avatarClassNames}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <AvatarImage src={imageURL} alt="avatar" className={noPadding ? "" : "p-1"} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </ShadCNAvatar>
  );
};
