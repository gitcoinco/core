import { BannerImage } from "@/primitives/BannerImage/BannerImage";
import { SSRComponent } from "@/types";

const gitcoinBannerCID = "QmXE6wP4Zsqp6VdNtXjv2EwqJpCTcBZfZNdSKSbjzEKKtn";
const gitcoinBannerURL = "https://ipfs.io/ipfs/QmXE6wP4Zsqp6VdNtXjv2EwqJpCTcBZfZNdSKSbjzEKKtn";

const bannerImageSSR: SSRComponent<React.ComponentProps<typeof BannerImage>> = {
  component: BannerImage,
  cases: [
    {
      label: "Default",
      groupProps: {
        sourceFromIPFS: {
          ipfsCID: gitcoinBannerCID,
          size: 350,
        },
        sourceFromURL: {
          url: gitcoinBannerURL,
          size: 350,
        },
        missingEverything: {
          size: 350,
        },
        allProvided: {
          url: gitcoinBannerURL,
          ipfsCID: gitcoinBannerCID,
          size: 350,
        },
        big: {
          ipfsCID: gitcoinBannerCID,
          size: 1000,
        },
        small: {
          ipfsCID: gitcoinBannerCID,
          size: 100,
        },
        rounded: {
          ipfsCID: gitcoinBannerCID,
          size: 350,
          rounding: "3xl",
        },
        bigAndRounded: {
          ipfsCID: gitcoinBannerCID,
          size: 1280,
          rounding: "3xl",
        },
        default: {
          ipfsCID: gitcoinBannerCID,
          size: 350,
          rounding: "none",
        },
      },
    },
  ],
};

export default bannerImageSSR;
