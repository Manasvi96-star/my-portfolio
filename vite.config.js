import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/My-Portfolio/",   // ← put your repo name here EXACTLY
  plugins: [react()],
});
