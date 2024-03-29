import React, { useState, useLayoutEffect } from 'react'

export default function HookUseLayoutEffect () {
  const [name, setName] = useState('inke')
  /**
   * useLayoutEffect 在渲染之前执行（可能会阻止页面渲染）
   * @param {Function} 必选 callback
   * @param {Array} 可选 
   * 1.不传：commponentDidMount&componentDidUpdate的时候调用
   * 2.传[]：仅commponentDidMount会调用
   * 3.传[state|props]: commponentDidMount, state|props改变时调用
   */
  useLayoutEffect(() => {
    const rootElement = document.getElementById('root')
    console.log(rootElement)
  }, [name])

  return <button onClick={() => { setName(name + '哈') }}>name改变</button>
}
