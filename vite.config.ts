import { defineConfig } from 'vite';
import remarkRehypePlugin from 'vite-plugin-remark-rehype';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), remarkRehypePlugin()],
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
  },
  build: {
    watch: {
      buildDelay: 10000,
    },
  },
});
