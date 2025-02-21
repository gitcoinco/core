export interface SSRComponent<TProps> {
  name?: string;
  isClient?: boolean;
  component: React.ComponentType<TProps>;
  cases: SSRComponentsCase[];
}

export interface SSRComponentsCase {
  label?: string;
  props?: Record<string, any>;
  groupProps?: Record<string, any>;
}

export interface SSRComponents {
  title: string;
  components: Record<string, SSRComponent<any>>;
}
