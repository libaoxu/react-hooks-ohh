import React, { useContext } from 'react'
import { MyContext } from './05_useContext'

export default function HookUseContextChi () {

  return <div>
    <HookUseContextChild />
  </div>
}

function HookUseContextChild () {
  /**
   * useContext 
   * 应用场景：如果页面组件层级深并且需要子组件触发state的变化
   */
  const contextValue = useContext(MyContext)

  return <div>
    <p>{contextValue}</p>
  </div>
}
