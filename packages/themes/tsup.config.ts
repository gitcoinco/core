import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/gitcoin/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  external: ["tailwindcss"],
  treeshake: true,
  sourcemap: true,
});