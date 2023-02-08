import { useEffect } from 'react'
import { TITLE_SUFFIX } from '@/utils/config'

const useTitle = (title: string) => {
  const value = `${title} - ${TITLE_SUFFIX}`

  useEffect(() => {
    document.title = value
  }, [value])
}

export default useTitle
