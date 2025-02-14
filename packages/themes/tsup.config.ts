import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/colors.ts"],
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  external: ["tailwindcss"],
  treeshake: true,
  sourcemap: true,
});