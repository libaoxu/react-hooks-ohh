import React from 'react'
import { ClassComponent, Hooks } from './hooks/01_classComponent_hooks'
import HookUseState from './hooks/02_useState'
import { HookUseEffect, HookUseEffectReturn } from './hooks/03_useEffect'
import HookUseEffectPropsChange from './hooks/03_useEffectPropsChange'
import HookUseReducer from './hooks/04_useReducer'
import HookUseContext from './hooks/05_useContext'
import { HookWithUseMemo, HookWithoutUseMemo } from './hooks/06_useMemo'
import { HookWithoutUseCallback, HookWithUseCallback } from './hooks/07_useCallback'
import HookUseRef from './hooks/08_useRef'
import { ForWardFancyInput } from './hooks/09_useImperativeHandle'
import HookUseLayoutEffect from './hooks/10_useLayoutEffect'
import { CommentListWithSubscription, BlogPostWithSubscription, UseHookCommentList, UseHookBlogPost } from './hooks/11_customHook'
import HookUseDebugValue from './hooks/11_useDebugValue'

export default function App () {
  const forwardInputRef = React.createRef()

  return <div className="App">
    {/* <ClassComponent inke='inke~' />
    <Hooks inke='inke~' /> */}

    {/* <HookUseEffectPropsChange /> */}
    
    {/* <HookUseState /> */}
    
    {/* <HookUseEffect />
    <HookUseEffectReturn /> */}
    
    {/* <HookUseReducer /> */}
    
    {/* <HookUseContext /> */}
    
    {/* <HookWithoutUseMemo />
    <HookWithUseMemo /> */}

    {/* <HookWithoutUseCallback />
    <HookWithUseCallback /> */}

    {/* <HookUseRef /> */}

    {/* <ForWardFancyInput ref={forwardInputRef} />
    <br/>
    <button onClick={() => {
      console.log('App forwardInputRef: ', forwardInputRef)
      forwardInputRef.current.setFocus()
    }}>setFocus</button> */}

    {/* <HookUseLayoutEffect /> */}

    <CommentListWithSubscription />
    <BlogPostWithSubscription />
    <UseHookCommentList />
    <UseHookBlogPost />
    
    {/* <HookUseDebugValue /> */}
  </div>
}
