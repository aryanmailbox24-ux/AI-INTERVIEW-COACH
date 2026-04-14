// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: '/AI-Powered-Interview-Coaching/',
//   build: {
//     chunkSizeWarningLimit: 2000,
//   },
//   optimizeDeps: {
//     exclude: ['lucide-react'],
//     include: ['lodash', 'lodash-es'],
//   },
// });
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/AI-Powered-Interview-Coaching/',
  
  build: {
    chunkSizeWarningLimit: 2000,
  },

  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['lodash', 'lodash-es'],
  },

  // ✅ ADD THIS PART
  server: {
    host: "0.0.0.0",
    port: process.env.PORT || 5173,
  },

  preview: {
    host: "0.0.0.0",
    port: process.env.PORT || 4173,
  }
});
