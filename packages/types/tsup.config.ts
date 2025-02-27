import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    checker: "src/checker/index.ts",
  },
  format: ["esm"],
  external: ["react"],
  dts: true,
});
