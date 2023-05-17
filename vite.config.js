import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/testTask',
  plugins: [react()],
  server: {
    port: 3030,
  },
  preview: {
    port: 8080,
  },
});
