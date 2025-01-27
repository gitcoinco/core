import * as React from "react";

export function withSSR<P extends object>(
  Component: React.ComponentType<P>,
  fallback: React.ReactNode = null,
) {
  return function SSRSafeComponent(props: P) {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
      setMounted(true);
    }, []);

    if (!mounted) {
      return <>{fallback}</>;
    }

    return <Component {...props} />;
  };
}
