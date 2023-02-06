import { useSelector } from 'react-redux'
import { HashRouter as Router } from 'react-router-dom'
import App from './App'

// antd
import { theme, ConfigProvider } from 'antd'
import zh_CN from 'antd/locale/zh_CN'

// antd theme
import type { RootState } from '@/stores'
const { defaultAlgorithm, darkAlgorithm } = theme

const Page = () => {
  const theme = useSelector((state: RootState) => state.public.theme)

  return (
    <Router>
      <ConfigProvider
        locale={zh_CN}
        theme={{
          algorithm: [theme === 'dark' ? darkAlgorithm : defaultAlgorithm]
        }}
      >
        <App />
      </ConfigProvider>
    </Router>
  )
}

export default Page
