import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Access environment variable with `import.meta.env`
const VITE_BASE_PATH = import.meta.env.VITE_BASE_PATH || '/puvitha-portfolio';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  base: VITE_BASE_PATH,  // Fixed missing comma and variable reference
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
