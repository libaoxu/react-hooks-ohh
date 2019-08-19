import React, { useState, useEffect } from 'react'

const levels = ['青铜', '白银', '黄金', '铂金', '钻石', '星耀', '王者']
// 获取levels数组中 索引的随机数
const getLevelRandomId = () => Math.floor(Math.random() * Math.floor(levels.length))

/**
 * 模拟请求接口
 */
const fetchUserInfo = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ level: `${id} - ${levels[id]}` })
    })
  })
}

export default function UseEffectPropsChange () {
  const [id, setId] = useState(0)
  return <div>
    <button onClick={() => setId(getLevelRandomId())}>change id</button>
    <UseEffectChildClass id={id}/>
    <UseEffectChild id={id}/>
  </div>
}


// class 写法
class UseEffectChildClass extends React.Component {
  static defaultProps = {
    id: null
  }

  state = {
    level: ''
  }

  componentDidMount () {
    console.log('componentDidMount: ', this.props.id)
    fetchUserInfo(this.props.id).then(({ level }) => this.setState({ level }))
  }
  
  /**
   * props 或 state变化都会执行 componentDidUpdate
   */
  componentDidUpdate (preProps) {
    console.log('componentDidUpdate: ', this.props.id)
    // 判断 props 中 id的变化
    if (preProps.id !== this.props.id) {
      fetchUserInfo(this.props.id).then(({ level }) => this.setState({ level }))
    }
  }

  render () {
    return <div>level: { this.state.level }</div>
  }
}


// hook 写法（useEffect）
function UseEffectChild ({ id }) {
  const [level, setLevel] = useState('')

  /**
   * useEffect第二个参数传入: [id], 所以只有当props中的这个`id`发生变化时候, 才会执行里面 useEffect 内的逻辑
   * 
   * useEffect优势:
   * 1. 判断props中id的变化
   *    class 写法：需要在componentDidUpdate生命周期里写 if 判断逻辑
   *    hook 写法：只需要在 useEffect 传入第二个参数即可: [id] (减少判断逻辑)
   * 2. 请求接口的相关逻辑
   *    class 写法：需要在componentDidMount 和 componentDidUpdate两个生命周期都处理重复逻辑
   *    hook 写法：因为useEffect集成了不同生命周期执行的时机, 只需要关注一次写一遍即可
   * 
   * 综上: 相比 class 而言 hook 写法 `简化了不同生命周期中相同的代码逻辑` 更简洁, 更清晰
   */
  useEffect(() => {
    console.log('useEffect: ', id)
    fetchUserInfo(id).then(({ level }) => setLevel(level))
  }, [id])

  return <div>level: { level }</div>
}
