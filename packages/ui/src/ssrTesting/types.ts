export interface SSRComponent<TProps> {
  component: React.ComponentType<TProps>;
  cases: {
    label?: string;
    props?: Record<string, any>;
    groupProps?: Record<string, any>;
  }[];
}

export interface SSRComponents {
  title: string;
  components: Record<string, SSRComponent<any>>;
}
