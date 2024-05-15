import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Set the base path to the current directory
  build: {
    outDir: 'dist', // Output directory for build files
    rollupOptions: {
      input: {
        main: './index.html',
      }
    }
  },
  server: {
    open: true, // Automatically open the app in the browser on server start
  }
});
