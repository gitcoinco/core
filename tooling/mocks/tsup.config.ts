import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    application: "src/application/index.ts",
    checker: "src/checker/index.ts",
    handlers: "src/handlers.ts",
    mockData: "src/mockData/index.ts",
  },
  format: ["esm"],
  external: ["react"],
  dts: true,
});
