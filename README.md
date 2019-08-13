# React Hooks

## [Hooks 简介](https://zh-hans.reactjs.org/docs/hooks-intro.html)

> Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。

`Hook 是可以在函数组件里“钩入” props，state，context，refs和生命周期的函数。`（React没有计划移除 class ，因此不必把已有的组件全部重写，可以在新组件里开始使用 Hook。Hook 和现有代码可以同时工作，你可以渐进式地使用他们。）

### 😍Hooks 优点：

- <p>拥抱函数</p>
Hook 在非 class 的情况下可以使用更多的 React 特性，比如不需要像 class 组件 render 中对每个变量进行解构，需要不停的使用 this，不需要考虑bind等。如：[有状态组件 & 无状态组件](./src/hooks/01_classComponent_hooks.js)

- <p>组件之间复用状态逻辑</p>
Hook 使你在无需修改组件结构的情况下复用状态逻辑。如：[自定义hook](./src/hooks/11_useDebugValue_customHook.js)

- <p>可将组件拆分更小粒度</p>
Hook 将组件中`相互关联的部分`拆分成更小的函数，而并非强制按照生命周期划分。如: [useEffect](./src/hooks/03_useEffectChild.js)

- <p id="effectUpdate">简化了不同生命周期中相同的代码逻辑</p> 
详见: [useEffectPropsChange](./src/hooks/03_useEffectPropsChange.js)


## [Hook API](https://react.docschina.org/docs/hooks-reference.html)

1. ### [useState](./src/hooks/02_useState.js)

2. ### [useEffect](./src/hooks/03_useEffect.js)

#### 为什么每次更新的时候都要运行 Effect, 详见: [useEffectPropsChange](./src/hooks/03_useEffectPropsChange.js), 从案例中可以看出`之前class组件不同生命周期中相同的逻辑被复用了`, 与优点中[简化了不同生命周期中相同的代码逻辑](#effectUpdate)相对应

3. ### [useReducer](./src/hooks/04_useReducer.js)

4. ### [useContext](./src/hooks/05_useContext.js)
> [Context](https://zh-hans.reactjs.org/docs/context.html#___gatsby) 作用：对它所包含的组件树提供全局共享数据的一种技术。

5. ### [useCallback](./src/hooks/06_useCallback.js)

6. ### [useMemo](./src/hooks/07_useMemo.js)

7. ### [useRef](./src/hooks/08_useRef.js)

8. ### [useImperativeHandle](./src/hooks/09_useImperativeHandle.js)

9. ### [useLayoutEffect](./src/hooks/10_useLayoutEffect.js)

10. ### [useDebugValue](./src/hooks/11_useDebugValue_customHook.js)

11. ### [自定义hooks](./src/hooks/11_useDebugValue_customHook.js)
> 自定义hooks：利用react hooks封装成一个具有特定逻辑的，或可重用的函数。`必须以use开头。`

---

## [使用规则](https://react.docschina.org/docs/hooks-rules.html)

- 多个 useState 相互独立，必须把 hooks 写在`最顶层`。
```js
import React, { useState, useEffect } from 'react'

export default function Index () {
  const { name, setName } = useState('')
  // 在条件语句中使用Hook违反第一条规则
  if (name !== '') {
    useEffect(() => {
      console.log('错误写法')
    })
  }

  // 应将条件判断放置在effect中
  useEffect(() => {
    if (name !== '') {
      console.log('正确写法')
    }
  })

  return 123
}
```

- 只能在 React 的`函数`组件中使用。