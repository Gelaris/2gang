import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: './',
  esbuild: {
    legalComments: "none",
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        "process.env.NODE_ENV": '"development"',
      },
    },
  },
});