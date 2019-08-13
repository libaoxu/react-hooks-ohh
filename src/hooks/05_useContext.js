import React, { useState } from 'react'
import HookUseContextChi from './05_useContextChild'
export const MyContext = React.createContext()

const Provider = MyContext.Provider

export default function HookUseContext (props) {

  const [name, setName] = useState('inke')

  return <div>
    <Provider value={name}>
      <HookUseContextChi />
    </Provider>
  </div>
}
