import { SSRComponent } from "@gitcoin/types";

import { IconLabel } from "@/components/IconLabel/IconLabel";
import { IconType } from "@/primitives/Icon";

const mockDate1 = new Date("2024-12-09T19:22:56.413Z");
const mockDate2 = new Date("2024-12-10T19:23:30.678Z");

const iconLabelSSR: SSRComponent<React.ComponentProps<typeof IconLabel>> = {
  component: IconLabel,
  cases: [
    {
      label: "Default",
      props: {
        iconType: IconType.ETH,
        label: "Default Label",
        type: "default",
      },
    },
    {
      label: "AI Evaluation",
      props: {
        type: "ai-evaluation",
        percent: 77,
      },
    },
    {
      label: "Date Label",
      props: {
        type: "date",
        date: mockDate1,
      },
    },
    {
      label: "Period Label",
      props: {
        type: "period",
        startDate: mockDate1,
        endDate: mockDate2,
      },
    },
    {
      label: "Date Label with Prefix",
      props: {
        type: "dateWithPrefix",
        date: mockDate1,
        prefix: "Applied on: ",
      },
    },
    {
      label: "Address Label",
      props: {
        type: "address",
        address: "0xE307051C410e970b861CC55CBFD5Acc7BB477750",
      },
    },
    {
      label: "Address ENS Label",
      props: {
        type: "address",
        address: "0xE307051C410e970b861CC55CBFD5Acc7BB477750",
        ens: "user.eth",
      },
    },
    {
      label: "Social Website Label",
      props: {
        type: "social",
        platform: "website",
        link: "https://example.com",
      },
    },
    {
      label: "Social Github Label",
      props: {
        type: "social",
        platform: "github",
        link: "https://github.com/user",
      },
    },
    {
      label: "Social Twitter Label",
      props: {
        type: "social",
        platform: "twitter",
        link: "https://twitter.com/user",
      },
    },
  ],
};

export default iconLabelSSR;
