export interface SSRComponent<TProps> {
  name?: string;
  isClient?: boolean;
  isFullNext?: boolean;
  tooltipMessage?: string;
  isDynamic?: boolean;
  component: React.ComponentType<TProps>;
  cases: SSRComponentsCase<TProps>[];
}

export interface SSRComponentsCase<TProps> {
  label?: string;
  props?: TProps;
  groupProps?: Record<string, any>;
}

export interface SSRComponents {
  title: string;
  components: Record<string, SSRComponent<any>>;
}

export interface SSRComponentIndex {
  key: string;
  name?: string;
  isClient?: boolean;
  isFullNext?: boolean;
  isDynamic?: boolean;
  tooltipMessage?: string;
}
