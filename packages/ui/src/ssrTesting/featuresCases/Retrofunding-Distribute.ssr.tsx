import { PoolStatus, SSRComponent } from "@gitcoin/types";
import { parseUnits } from "viem";

import {
  MOCK_APPLICATIONS,
  POOL_CONFIG,
  TOKEN_DECIMALS,
} from "@/features/retrofunding/components/Distribute/mocks";

import { DistributeHelper } from "./helperComponents/Retrofunding-DistributeHelper";

const props = {
  applications: MOCK_APPLICATIONS,
  poolConfig: {
    ...POOL_CONFIG,
    amountOfTokensInPool: parseUnits("96", TOKEN_DECIMALS).toString(),
  },
  canResetEdit: true,
  className: "w-full",
};

const distributeSSR: SSRComponent<React.ComponentProps<typeof DistributeHelper>> = {
  component: DistributeHelper,
  isClient: true,
  cases: [
    {
      label: "Default",
      props,
    },
    {
      label: "Finalized",
      props: {
        ...props,
        applications: MOCK_APPLICATIONS.map((application: any) => ({
          ...application,
          payoutTransactionHash:
            "0x010ddbb8a9039a7f9c672538b6dded667dd7ca9cad9f9fd5bf6aed1301bcdb5b",
        })),
        poolConfig: {
          ...POOL_CONFIG,
          amountOfTokensInPool: parseUnits("0.0000001", POOL_CONFIG.tokenDecimals).toString(),
        },
      },
    },
    {
      label: "Funding Required",
      props: {
        ...props,
        applications: MOCK_APPLICATIONS.map((application: any) => ({
          ...application,
          payoutTransactionHash: undefined,
        })),
        poolConfig: {
          ...POOL_CONFIG,
          amountOfTokensInPool: parseUnits(
            "0.000000000000000001",
            POOL_CONFIG.tokenDecimals,
          ).toString(),
        },
      },
    },
    {
      label: "No Finalized Projects",
      props: {
        ...props,
        applications: MOCK_APPLICATIONS.map((application: any) => ({
          ...application,
          payoutTransactionHash: undefined,
        })),
        poolConfig: {
          ...POOL_CONFIG,
          amountOfTokensInPool: parseUnits("100", POOL_CONFIG.tokenDecimals).toString(),
        },
      },
    },
    {
      label: "Not Funding Phase",
      props: {
        ...props,
        poolConfig: {
          ...POOL_CONFIG,
          poolStatus: PoolStatus.ApplicationsInProgress,
          amountOfTokensInPool: parseUnits("100", POOL_CONFIG.tokenDecimals).toString(),
        },
        applications: [],
      },
    },
  ],
};

export default distributeSSR;
