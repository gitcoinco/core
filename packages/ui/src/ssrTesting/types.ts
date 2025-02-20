export interface SSRComponent<TProps> {
  component: React.ComponentType<TProps>;
  cases: {
    label: string;
    props: [string, TProps][];
  }[];
}

export interface SSRComponents {
  title: string;
  components: Record<string, SSRComponent<any>>;
}
