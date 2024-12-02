import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import { defineConfig } from "vitest/config";

// https://vite.dev/config/
// https://vitest.dev/config/file.html
// https://vitest.dev/guide/coverage.html
export default defineConfig({
    plugins: [react(), svgr()],
    test: {
        environment: "jsdom",
        setupFiles: "./src/tests/setup-tests.ts",
    },
});
