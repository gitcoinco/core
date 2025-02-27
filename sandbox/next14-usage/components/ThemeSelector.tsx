"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const baseThemes = ["default", "polygon"];

export const ThemeSelector = ({ className }: { className?: string }) => {
  const { setTheme, resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme?.includes("dark");

  const currentBase =
    resolvedTheme === "light" || resolvedTheme === "dark"
      ? "default"
      : resolvedTheme?.replace(/-dark$/, "").replace(/-light$/, "") || "default";

  const handleBaseChange = (base: string) => {
    if (base === "default") {
      setTheme(isDarkMode ? "dark" : "light");
    } else {
      setTheme(`${base}-${isDarkMode ? "dark" : "light"}`);
    }
  };

  const handleDarkMode = () => {
    if (currentBase === "default") {
      setTheme(isDarkMode ? "light" : "dark");
    } else {
      setTheme(`${currentBase}-${isDarkMode ? "light" : "dark"}`);
    }
  };

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <select
        value={currentBase}
        onChange={(e) => handleBaseChange(e.target.value)}
        className="select select-bordered w-32"
      >
        {baseThemes.map((t) => (
          <option key={t} value={t}>
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </option>
        ))}
      </select>

      <div className="flex items-center space-x-2">
        <button onClick={handleDarkMode} className="btn btn-ghost btn-circle">
          {isDarkMode ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
        </button>
      </div>
    </div>
  );
};
