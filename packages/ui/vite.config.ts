import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import svgr from "vite-plugin-svgr";

import react from "@vitejs/plugin-react-swc";

import path, { resolve } from "path";
import preserveDirectives from "rollup-preserve-directives";
import tailwindcss from "tailwindcss";

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, "./src/index.ts"),
        client: resolve(__dirname, "./src/client.ts"),
        icons: resolve(__dirname, "./src/assets/icons/index.ts"),
        lib: resolve(__dirname, "./src/lib/index.ts"),
        logos: resolve(__dirname, "./src/assets/logos/index.ts"),
        mocks: resolve(__dirname, "./src/mocks/handlers.ts"),
        types: resolve(__dirname, "./src/types/index.ts"),
        theme: resolve(__dirname, "./src/theme/index.ts"),
        "use-credential-verification": resolve(
          __dirname,
          "./src/hooks/useCredentialVerification.ts",
        ),
        "use-indexed-db": resolve(__dirname, "./src/hooks/useIndexedDB.ts"),
        "use-persist-form": resolve(__dirname, "./src/hooks/usePersistForm.ts"),
        "use-toast": resolve(__dirname, "./src/hooks/useToast.ts"),
        "use-click-outside": resolve(__dirname, "./src/hooks/useClickOutside.ts"),
        // features
        application: resolve(__dirname, "./src/components/Application/index.ts"),
        pool: resolve(__dirname, "./src/components/Pool/index.ts"),
        program: resolve(__dirname, "./src/components/Program/index.ts"),
        project: resolve(__dirname, "./src/components/Project/index.ts"),
        retrofunding: resolve(__dirname, "./src/features/retrofunding/index.ts"),
      },
      name: "gitcoin-ui",
      fileName: (format: any, filename: any) => `${filename}.js`,
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "tailwindcss"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          tailwindcss: "tailwindcss",
        },
        preserveModules: true,
        preserveModulesRoot: "src",
      },
      plugins: [preserveDirectives()],
    },
    sourcemap: true,
    emptyOutDir: true,
    minify: false,
    target: "esnext",
  },
  plugins: [react(), svgr(), dts({ rollupTypes: true })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "~retrofunding": path.resolve(__dirname, "./src/features/retrofunding"),
      "~pool": path.resolve(__dirname, "./src/components/Pool"),
      "~application": path.resolve(__dirname, "./src/components/Application"),
      "~program": path.resolve(__dirname, "./src/components/Program"),
      "~project": path.resolve(__dirname, "./src/components/Project"),
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});
