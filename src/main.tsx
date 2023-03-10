import { createRoot } from 'react-dom/client'
import RouterView from '@/router'

// store
import { Provider } from 'react-redux'
import { store } from '@/stores'

// style
import {
  StyleProvider,
  legacyLogicalPropertiesTransformer
} from '@ant-design/cssinjs'
import 'virtual:uno.css'
import '@/assets/styles/common.less'

// time
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')

const root = document.getElementById('root') as HTMLElement

createRoot(root).render(
  <StyleProvider
    hashPriority="high"
    transformers={[legacyLogicalPropertiesTransformer]}
  >
    <Provider store={store}>
      <RouterView />
    </Provider>
  </StyleProvider>
)
