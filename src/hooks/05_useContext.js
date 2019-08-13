import React, { useState } from 'react'
import HookUseContextChild from './05_useContextChild'
export const MyContext = React.createContext()

const Provider = MyContext.Provider

export default function HookUseContext (props) {

  const [name, setName] = useState('inke')

  return <div>
    <Provider value={name}>
      <HookUseContextChild />
    </Provider>
  </div>
}
