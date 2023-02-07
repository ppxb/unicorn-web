import { defineConfig, loadEnv } from 'vite'
import { handleEnv } from './build/utils/helper'
import createVitePlugins from './build/plugins'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const root = process.cwd()
  const viteEnv = handleEnv(loadEnv(mode, root))
  const { VITE_SERVER_PORT, VITE_PROXY } = viteEnv

  return {
    plugins: createVitePlugins(),
    resolve: {
      alias: {
        '@': '/src',
        '@@': '/types'
      }
    }
  }
})
