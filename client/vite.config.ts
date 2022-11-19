import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import svgrPlugin from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      overlay: false,
      typescript: true,
    }),
    svgrPlugin({
      svgrOptions: {
        icon: true,
        // ...svgr options (https://react-svgr.com/docs/options/)
      },
    }),
    tsconfigPaths(),
  ],
  server: {
    port: 3030,
    open: true,
    host: true,
    strictPort: true,
  },
  build: {
    outDir: 'build',
    sourcemap: true,
  },
  preview: {
    strictPort: true,
  },
  envPrefix: 'REACT_APP_',
});
