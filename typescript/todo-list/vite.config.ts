import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import envCompatible from "vite-plugin-env-compatible";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    envCompatible({
      prefix: "VITE_",
      mountedPath: "process.env",
      ignoreProcessEnv: false,
    }),
  ],
});
