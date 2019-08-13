import React, { useEffect, useDebugValue } from 'react'

const useTitle = title => {

  /**
   * useDebugValue 用于在React开发者工具中显示自定义hook的标签
   */
  useDebugValue(title)

  useEffect(() => {
    document.title = title
  }, [title])
}

export default function HookUseDebugValue () {

  useTitle('inke')

  return 123
}
