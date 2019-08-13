import React, { useMemo } from 'react'

export default function HookUseMemo () {
  /**
   * useMemo 返回值是函数的返回值
   * 应用场景：适用于耗时的计算，复杂的业务逻辑
   * @param {Function} 必选 callback
   * @param {Array} 可选 
   * 1.不传：每次组件渲染时都调用
   * 2.传[]：commponentDidMount&componentDidUpdate的时候调用
   * 3.传[state]: state改变时调用
   */
  const obj1 = { id: 12, name: 'ouhao', age: '22' }
  const obj2 = { id: 13, name: 'huimeng' }

  const ObjectAssign = useMemo(() => {
    return Object.assign(obj1, obj2)
  }, [obj1, obj2])

  console.log(ObjectAssign)

  return 123
}
