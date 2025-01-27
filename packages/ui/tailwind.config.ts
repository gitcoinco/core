import { withTV } from "tailwind-variants/transformer";
import type { Config } from "tailwindcss";
import sharedConfig from "@gitcoin/themes/gitcoin-theme"


export default withTV<Pick<Config, "content" | "presets">>({
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  presets: [sharedConfig],
}) satisfies Config;
