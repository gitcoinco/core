import ArbitrumIcon from "./arbitrum.svg?react";
import AvaxIcon from "./avax.svg?react";
import BaseIcon from "./base.svg?react";
import ETHIcon from "./eth.svg?react";
import OptimismIcon from "./optimism.svg?react";
import PolygonIcon from "./polygon.svg?react";

enum NetworkIconType {
  ETH = "eth",
  OPTIMISM = "optimism",
  POLYGON = "polygon",
  ARBITRUM = "arbitrum",
  AVAX = "avax",
  BASE = "base",
}

const networkIconComponents: Record<NetworkIconType, React.FC<React.SVGProps<SVGSVGElement>>> = {
  arbitrum: ArbitrumIcon,
  avax: AvaxIcon,
  base: BaseIcon,
  eth: ETHIcon,
  optimism: OptimismIcon,
  polygon: PolygonIcon,
};

const networkIcons = Object.keys(networkIconComponents).sort((a, b) =>
  a.localeCompare(b),
) as NetworkIconType[];

export { ArbitrumIcon, AvaxIcon, BaseIcon, ETHIcon, OptimismIcon, PolygonIcon };
export { NetworkIconType, networkIconComponents, networkIcons };
