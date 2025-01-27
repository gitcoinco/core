import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    "index": "src/index.ts",
    // "./button": "src/button.ts",
  },
  format: ["esm"],
  external: ["react"],
  dts: true,
});
