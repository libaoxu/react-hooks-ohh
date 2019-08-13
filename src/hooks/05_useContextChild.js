import React, { useContext } from 'react'
import { MyContext } from './05_useContext'

export default function HookUseContextChild () {

  return <div>
    <HookUseContextChildChild />
  </div>
}

function HookUseContextChildChild () {
  /**
   * useContext 
   * 应用场景：如果页面组件层级深并且需要子组件触发state的变化
   */
  const contextValue = useContext(MyContext)

  return <div>
    <p>useContext ChildChild Value: {contextValue}</p>
    {/* 两种写法都差不多, 还是上面的更简单一些 */}
    <MyContext.Consumer>{value => <p>MyContext.Consumer ChildChild Value: {value}</p>}</MyContext.Consumer>
  </div>
}
