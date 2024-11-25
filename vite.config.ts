import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
// https://vitest.dev/config/file.html
// https://vitest.dev/guide/coverage.html
export default defineConfig({
    plugins: [react()],
    test: {
        environment: "jsdom",
        setupFiles: "./src/tests/setup-tests.ts",
    },
});
