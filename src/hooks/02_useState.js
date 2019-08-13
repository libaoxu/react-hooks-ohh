import React, { useState } from 'react'

export default function HookUseState () {
  /**
   * useState（代替state&setState）
   * @param {Any} 设置默认值 不写默认值是undefined
   */
  const [name, setName] = useState('inke')

  return <div>
    <p>hello {name}</p>
    <button onClick={() => { setName(name + '哈') }}>哈</button>
  </div>
}
