import React from 'react'
import { ClassComponent, Hooks } from './hooks/01_classComponent_hooks'
import HookUseState from './hooks/02_useState'
import { HookUseEffect, HookUseEffectReturn } from './hooks/03_useEffect'
import HookUseEffectPropsChange from './hooks/03_useEffectPropsChange'
import HookUseReducer from './hooks/04_useReducer'
import HookUseContext from './hooks/05_useContext'
import HookUseCallback from './hooks/06_useCallback'
import HookUseMemo from './hooks/07_useMemo'
import HookUseRef from './hooks/08_useRef'
import { ForWardFancyInput } from './hooks/09_useImperativeHandle'
import HookUseLayoutEffect from './hooks/10_useLayoutEffect'
import HookUseDebugValue from './hooks/11_useDebugValue_customHook'

export default function App () {
  const forwardInputRef = React.createRef()

  return <div className="App">
    {/* <ClassComponent inke='inke~' /> */}
    {/* <Hooks inke='inke~' /> */}
    {/* <HookUseState /> */}
    {/* <HookUseEffect /> */}
    {/* <HookUseEffectReturn /> */}
    <HookUseEffectPropsChange />
    {/* <HookUseReducer /> */}
    {/* <HookUseContext /> */}
    {/* <HookUseCallback /> */}
    {/* <HookUseMemo /> */}
    {/* <HookUseRef /> */}
    {/* <ForWardFancyInput ref={forwardInputRef} />
    <br/>
    <button onClick={() => {
      console.log('App forwardInputRef: ', forwardInputRef)
      forwardInputRef.current.setFocus()
    }}>setFocus</button> */}
    {/* <HookUseLayoutEffect /> */}
    {/* <HookUseDebugValue /> */}
  </div>
}
