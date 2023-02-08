import type { BuildOptions } from 'vite'

const buildOptions = (): BuildOptions => {
  return {
    chunkSizeWarningLimit: 1000,
    sourcemap: process.env.NODE_ENV != 'production',
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name].[hash].js',
        entryFileNames: 'assets/js/[name].[hash].js',
        assetFileNames: 'assets/[ext]/[name].[hash].[ext]'
      }
    }
  }
}

export default buildOptions
