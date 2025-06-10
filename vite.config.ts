import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import { defineConfig } from "vitest/config";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), svgr(), tailwindcss()],
    test: {
        coverage: {
            provider: "v8",
        },
        environment: "jsdom",
        setupFiles: ["./src/vitest-setup.ts"],
    },
});
