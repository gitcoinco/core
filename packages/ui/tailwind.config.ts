import { withTV } from "tailwind-variants/transformer";
import type { Config } from "tailwindcss";
import { tailwindConfig } from "@gitcoin/themes"


export default withTV<Pick<Config, "content" | "presets">>({
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  presets: [tailwindConfig],
}) satisfies Config;
