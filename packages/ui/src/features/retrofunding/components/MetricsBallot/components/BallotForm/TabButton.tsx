import { cn } from "@/lib/utils";

interface TabButtonProps {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

export const TabButton = ({ active, children, onClick }: TabButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-2xl font-semibold transition-colors",
        active ? "text-black" : "text-grey-500",
      )}
    >
      {children}
    </button>
  );
};
