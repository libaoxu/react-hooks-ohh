import React, { useState } from 'react'
import HookUseContextChild from './05_useContextChild'
export const MyContext = React.createContext()

export default function HookUseContext (props) {

  const [name, setName] = useState('inke')

  return <div>
    <MyContext.Provider value={name}>
      <HookUseContextChild />
    </MyContext.Provider>
  </div>
}
