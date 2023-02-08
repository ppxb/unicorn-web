import type { PluginOption } from 'vite'
import { presetUno, presetAttributify, presetIcons } from 'unocss'
import Unocss from 'unocss/vite'
import react from '@vitejs/plugin-react'
import pagePlugin from './pages'

const createVitePlugins = () => {
  const vitePlugins: PluginOption[] = [
    react(),
    Unocss({
      presets: [presetUno(), presetAttributify(), presetIcons()]
    }),
    pagePlugin()
  ]
  return vitePlugins
}

export default createVitePlugins
