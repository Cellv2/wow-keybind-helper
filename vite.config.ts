import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import { defineConfig } from "vitest/config";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), svgr(), tailwindcss()],
    test: {
        environment: "jsdom",
        setupFiles: ["./src/vitest-setup.ts"],
    },
});
