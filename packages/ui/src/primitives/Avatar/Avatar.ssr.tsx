import { SSRComponent } from "@/ssrTesting/types";

import { Avatar, AvatarProps } from "./Avatar";

const gitcoinProfileCID = "QmVSEo7Q1NFok7AT3vqD55EoThBgujoF1KXhiph9T9MNTr";
const gitcoinProfileURL = "https://ipfs.io/ipfs/QmVSEo7Q1NFok7AT3vqD55EoThBgujoF1KXhiph9T9MNTr";

const avatarSSR: SSRComponent<AvatarProps> = {
  component: Avatar,
  cases: [
    {
      label: "Default",
      props: Object.entries({
        sourceFromIPFS: {
          ipfsCID: gitcoinProfileCID,
        },
        sourceFromURL: {
          url: gitcoinProfileURL,
        },
        fallbackName: {
          fallbackName: "Gitcoin Labs",
        },
        missingEverything: {},
        allProvided: {
          url: gitcoinProfileURL,
          ipfsCID: gitcoinProfileCID,
          fallbackName: "Gitcoin Labs",
        },
        big: {
          ipfsCID: gitcoinProfileCID,
          size: 200,
        },
        defaultVariant: {
          ipfsCID: gitcoinProfileCID,
          variant: "default",
        },
        borderedVariant: {
          ipfsCID: gitcoinProfileCID,
          variant: "bordered",
        },
      }),
    },
  ],
};

export default avatarSSR;
