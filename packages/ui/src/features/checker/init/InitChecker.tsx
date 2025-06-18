import React, { ReactNode, useEffect, useState } from "react";

import { initializeAlloClient } from "../services/allo/alloClient";
import { initializeCheckerClient } from "../services/checker/checkerClient";

export interface CheckerConfig {
  checkerEndpoint: string;
  gsIndexerEndpoint: string;
}

interface InitCheckerProps {
  children?: ReactNode;
  config: CheckerConfig;
}

// Default configuration
export const defaultConfig: CheckerConfig = {
  checkerEndpoint: "https://api.checker.gitcoin.co",
  gsIndexerEndpoint: "https://yc7lia2566.execute-api.us-east-2.amazonaws.com/api/v1/graphql",
};

export const InitChecker: React.FC<InitCheckerProps> = ({
  children = null,
  config = defaultConfig,
}) => {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    initializeCheckerClient(config.checkerEndpoint);
    initializeAlloClient(config.gsIndexerEndpoint);
    setInitialized(true);
  }, [config]);

  return <>{initialized ? children : null}</>;
};
