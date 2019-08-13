import React, { useRef } from 'react'

export default function HookUseRef () {
  /**
   * useRef 返回一个可变的ref对象
   */
  const inputRef = useRef(null)

  const handleChange = () => {
    console.log(inputRef.current.value)
  }

  return (
    <div>
      <input defaultValue='1234' type='text' ref={inputRef} />
      <button onClick={handleChange}>获取Input的值</button>
    </div>
  )
}
