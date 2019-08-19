import React, { useEffect } from 'react'

// hook 写法
export default function HookUseEffectReturnChild () {
  // 传入的第一个参数是函数，可以 return 一个函数，在组件被销毁时，会自动执行这个函数。
  // 这是 effect 可选的清除机制。每个 effect 都可以返回一个清除函数。如此可以将添加和移除订阅的逻辑放在一起。它们都属于 effect 的一部分。
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


// class 写法（需要把相关逻辑划分到不同生命周期了, 降低了逻辑之间的紧密型）
export class HookUseEffectReturnChildClass extends React.Component {
  componentDidMount () {
    // 给window绑定点击事件
    window.addEventListener('click', this.handleClick)
  }

  componentWillUnmount () {
    // 给window移除点击事件
    window.removeEventListener('click', this.handleClick)
  }

  handleClick = () => {
    console.log('inke')
  }

  render () {
    return <div style={{width: '30px', height: '30px', background: 'red'}}></div>
  }
}
