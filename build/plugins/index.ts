import type { PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import pagePlugin from './pages'

const createVitePlugins = () => {
  const vitePlugins: PluginOption[] = [react(), pagePlugin()]
  return vitePlugins
}

export default createVitePlugins
