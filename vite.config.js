import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import glsl from 'vite-plugin-glsl'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), glsl()],
  resolve: {
    alias: {
      'three': 'three'
    }
  },
  optimizeDeps: {
    include: ['three']
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  }
})
