import React, { useState, useEffect } from 'react'
import HookUseEffectReturnChild from './03_useEffectChild'

export function HookUseEffect () {
  const [inke, setInke] = useState('inke')
  const [count, setCount] = useState(0)
  // const [other, setOther] = useState(0)

  const changeColor = () => {
    setInke(inke + '哈')
  }

  /**
   * useEffect（代替生命周期）
   * @param {Function} 必选 callback
   * @param {Array} 可选 
   * 1.不传：commponentDidMount&componentDidUpdate的时候调用
   * 2.传[]：仅commponentDidMount会调用
   * 3.传[state|props]: commponentDidMount, state|props改变时调用
   * 注意：state不能为引用类型，引用类型比较不出来数据的变化，会造成死循环。
   */
  useEffect(() => {
    changeColor()
  }, [count])

  return (
    <div>
      <p>{inke}</p>
      <button onClick={() => setCount(count + 1)}>change</button>
    </div>
  )
}

export function HookUseEffectReturn () {

  const [isShow, setIsShow] = useState(true)

  return <div>
    <button onClick={() => { setIsShow(!isShow) }}>开关</button>
    {
      isShow && <HookUseEffectReturnChild />
    }
  </div>
}
