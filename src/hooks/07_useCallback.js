import React, { useState, useCallback, useEffect } from 'react';

/**
 * useCallback 返回值是函数
 * 应用场景：耗时的计算，复杂的业务逻辑
 * @param {Function} 必选 callback
 * @param {Array} 可选 
 * 1.不传：commponentDidMount&componentDidUpdate的时候调用
 * 2.传[]：仅commponentDidMount会调用
 * 3.传[state|props]: commponentDidMount, state|props改变时调用
 */
function Child({ getCount }) {
	const [count, setCount] = useState(() => getCount())
	
	useEffect(() => {
		setCount(getCount())
	}, [getCount])

	return <div>
		child getCount: {count}
	</div>
}

const set = new Set()
const set2 = new Set()

/**
 * 使用场景：有一个父组件，其中包含子组件，子组件接收一个函数作为props；
 * 通常而言，如果父组件更新了，子组件也会执行更新；
 * 但是大多数场景下，更新是没有必要的；
 * 我们可以借助useCallback来返回函数，然后把这个函数作为props传递给子组件；
 * 这样，子组件就能避免不必要的更新。
 * 
 * 可以看到, 每次触发render set.size都会加1, 即创建了一个新的callback
 */
export function HookWithoutUseCallback() {
	const [count, setCount] = useState(1)
	const [val, setVal] = useState('')

	// 不使用useCallback, 每次有状态更改都是新的callback, set.size一直增加
	const getCount = () => {
		console.log(`%c HookWithUseCallback getCount: ${count}`, 'color: #0f0')
		return count
  }
  
  // 利用set天然去重的唯一性
  set.add(getCount)

	return <div>
    <h2>HookWithoutUseCallback: </h2>
		<h4>count: {count}</h4>
		<h4 style={{ color: '#0f0' }}>set.size: {set.size}</h4>
		<Child getCount={getCount} />
		<div>
			<button onClick={() => setCount(count + 1)}>count + 1</button>
			<input value={val} onChange={event => setVal(event.target.value)} />
		</div>
	</div>
}

/**
 * 我们可以看到，每次只有当修改count，set.size才会+1；
 * 这说明useCallback依赖变量count，count变更时会返回新的函数；
 * 而val变更时，set.size不会变，说明返回的是缓存的旧版本函数。
 */
export function HookWithUseCallback() {
	const [count, setCount] = useState(1)
	const [val, setVal] = useState('')

	// 使用useCallback, 只有当count改变才会, 才会产生新的 callback, set.size只有当count变化时候才会增加
	const getCount = useCallback(() => {
		console.log(`%c HookWithUseCallback getCount: ${count}`, 'color: #0ad6f0');
		return count
  }, [count])

  // 利用set天然去重的唯一性
	set2.add(getCount)

	return <div>
    <h2>HookWithUseCallback: </h2>
		<h4>count: {count}</h4>
		<h4 style={{ color: '#0ad6f0' }}>set2.size: {set2.size}</h4>
		<Child getCount={getCount} />
		<div>
			<button onClick={() => setCount(count + 1)}>count + 1</button>
			<input value={val} onChange={event => setVal(event.target.value)} />
		</div>
	</div>
}