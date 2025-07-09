// import { defineConfig } from "vite"
// import react from "@vitejs/plugin-react"
// import path from "path"

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// })


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // React plugin is required for JSX transformation
    react(),
  ],
  server: {
    // Listen on all network interfaces
    host: "0.0.0.0",
    allowedHosts: [
      "localhost",
      "127.0.0.1",
      "kryptex-platform.onrender.com",
    ],
    // Use PORT environment variable provided by Render, or default to 5173 for local development
    port: parseInt(process.env.PORT || 5173),
    // Make sure to properly handle process shutdown
    strictPort: true,
  },
});
