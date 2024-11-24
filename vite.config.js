import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split node_modules into a separate chunk
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    },
  },
  chunkSizeWarningLimit: 2000, // Set the chunk size limit to 2MB
});
