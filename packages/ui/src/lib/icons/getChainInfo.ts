import { IconType } from "@/primitives/Icon";

const chains = {
  1: {
    name: "Ethereum",
    icon: IconType.ETH,
  },
  11155111: {
    name: "Sepolia",
    icon: IconType.ETH,
  },
  137: {
    name: "Polygon",
    icon: IconType.POLYGON,
  },
  43114: {
    name: "Avalanche",
    icon: IconType.AVAX,
  },
  42161: {
    name: "Arbitrum",
    icon: IconType.ARBITRUM,
  },
  421614: {
    name: "Arbitrum Sepolia",
    icon: IconType.ARBITRUM,
  },
  10: {
    name: "Optimism",
    icon: IconType.OPTIMISM,
  },
  11155420: {
    name: "Optimism Sepolia",
    icon: IconType.OPTIMISM,
  },
  8453: {
    name: "Base",
    icon: IconType.BASE,
  },
  84532: {
    name: "Base Sepolia",
    icon: IconType.BASE,
  },
};

export const getChainInfo = (chainId: number) =>
  chains[chainId as keyof typeof chains] || { name: "Ethereum", icon: IconType.ETH };
