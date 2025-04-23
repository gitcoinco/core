import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    allo: "src/allo/index.ts",
    checker: "src/checker/index.ts",
  },
  format: ["esm"],
  external: [],
  dts: true,
});
