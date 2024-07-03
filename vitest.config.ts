import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    coverage: {
      exclude: [
        "src/index.ts",
      ],
    },
  },
});
