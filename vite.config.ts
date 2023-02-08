import { defineConfig, loadEnv } from 'vite'
import { handleEnv } from './build/utils/helper'
import createVitePlugins from './build/plugins'
import buildOptions from './build/vite/build'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const root = process.cwd()
  const { VITE_SERVER_PORT, VITE_PROXY } = handleEnv(loadEnv(mode, root))

  return {
    plugins: createVitePlugins(),
    resolve: {
      alias: {
        '@': '/src',
        '@@': '/types'
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true
        }
      }
    },
    esbuild: {
      pure: ['console.log', 'debugger']
    },
    build: buildOptions()
  }
})
