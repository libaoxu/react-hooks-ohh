import React, { useRef, useImperativeHandle, forwardRef } from 'react'

function FancyInput(props, ref) {
  const inputRef = useRef()
  console.log('FancyInput ref: ', ref)

  /**
  * useImperativeHandle 在使用ref时 公开给父组件的实例值 必须和forwardRef一起使用
  * @param ref
  * @param {Function} callback
  */
  useImperativeHandle(ref, params => {
    console.log('useImperativeHandle params: ', params)
    return {
      setFocus () {
        inputRef.current.focus()
      }
    }
  });

  return <input ref={inputRef} />
}

export const ForWardFancyInput = forwardRef(FancyInput)
