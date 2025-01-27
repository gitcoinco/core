import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-white group-[.toaster]:text-black group-[.toaster]:border-grey-100 group-[.toaster]:shadow-lg dark:group-[.toaster]:bg-black dark:group-[.toaster]:text-grey-50 dark:group-[.toaster]:border-black",
          description: "group-[.toast]:text-grey-900 dark:group-[.toast]:text-grey-500",
          actionButton:
            "group-[.toast]:bg-black group-[.toast]:text-grey-50 dark:group-[.toast]:bg-grey-50 dark:group-[.toast]:text-black",
          cancelButton:
            "group-[.toast]:bg-grey-100 group-[.toast]:text-grey-900 dark:group-[.toast]:bg-black dark:group-[.toast]:text-grey-500",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
