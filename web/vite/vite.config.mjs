import { defineConfig } from 'vite'

export default defineConfig({
  base: 'Arkema-House/web/demo',
  build: {
    outDir: '../demo',
    emptyOutDir: true,
  },
})