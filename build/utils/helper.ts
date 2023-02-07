type EnvConfig = Record<string, string>

interface ViteEnvProps {
  VITE_SERVER_PORT: number
  VITE_PROXY: [string, string][]
}

export const handleEnv = (env: EnvConfig): ViteEnvProps => {
  const { VITE_SERVER_PORT, VITE_PROXY } = env

  const proxy: [string, string][] = VITE_PROXY
    ? JSON.parse(VITE_PROXY.replace(/'/g, '"'))
    : []

  const res: ViteEnvProps = {
    VITE_SERVER_PORT: Number(VITE_SERVER_PORT) || 8080,
    VITE_PROXY: proxy
  }
  return res
}
