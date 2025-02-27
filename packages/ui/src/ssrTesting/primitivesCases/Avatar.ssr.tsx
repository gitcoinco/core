import { SSRComponent } from "@gitcoin/types";

import { Avatar, AvatarProps } from "../../primitives/Avatar/Avatar";

const gitcoinProfileCID = "QmVSEo7Q1NFok7AT3vqD55EoThBgujoF1KXhiph9T9MNTr";
const gitcoinProfileURL = "https://ipfs.io/ipfs/QmVSEo7Q1NFok7AT3vqD55EoThBgujoF1KXhiph9T9MNTr";

const avatarSSR: SSRComponent<AvatarProps> = {
  component: Avatar,
  cases: [
    {
      label: "Source from IPFS",
      props: {
        ipfsCID: gitcoinProfileCID,
      },
    },
    {
      label: "Source from URL",
      props: {
        url: gitcoinProfileURL,
      },
    },
    {
      label: "Fallback Name",
      props: {
        fallbackName: "Gitcoin Labs",
      },
    },
    {
      label: "Missing Everything",
      props: {},
    },
    {
      label: "All Provided",
      props: {
        url: gitcoinProfileURL,
        ipfsCID: gitcoinProfileCID,
        fallbackName: "Gitcoin Labs",
      },
    },
    {
      label: "Big",
      props: {
        ipfsCID: gitcoinProfileCID,
        size: 200,
      },
    },
    {
      label: "Default Variant",
      props: {
        ipfsCID: gitcoinProfileCID,
        variant: "default",
      },
    },
    {
      label: "Bordered Variant",
      props: {
        ipfsCID: gitcoinProfileCID,
        variant: "bordered",
      },
    },
  ],
};

export default avatarSSR;
