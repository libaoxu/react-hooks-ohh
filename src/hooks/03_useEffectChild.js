import React, { useEffect } from 'react'

// 传入的第一个参数，可以 return 一个函数，在组件被销毁时，会自动执行这个函数。
export default function HookUseEffectReturnChild () {

  useEffect(() => {
    // 给window绑定点击事件
    window.addEventListener('click', handleClick)

    return () => {
      // 给window移除点击事件
      window.removeEventListener('click', handleClick)
    }
  })

  const handleClick = () => {
    console.log('inke')
  }

  return <div style={{width: '30px', height: '30px', background: 'red'}}></div>
}