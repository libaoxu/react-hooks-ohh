import React, { useMemo, useState } from 'react'

// useMemo
// 我们来看一个反例：
export function HookWithoutUseMemo () {
	const [count, setCount] = useState(1)
	const [val, setValue] = useState('')
  
  /**
   * expensive 代表一个复杂的计算
   * 通过查看打印结果可知, 只要触发render, expensive这个复杂计算就会执行, 但是count并没有变化, 那么执行该逻辑就浪费性能
   */
	function expensive() {
		console.log('%c HookWithoutUseMemo computing', 'color: #0ad6f0')
		let sum = 0
		for (let i = 0; i < count * 100; i++) {
			sum += i
		}
		return sum
	}

	return <div>
		<h2>HookWithoutUseMemo: </h2>
		<h4>{count} - {val} - {expensive()}</h4>
		<div>
			<button onClick={() => setCount(count + 1)}>count + 1</button>
			<input value={val} onChange={event => setValue(event.target.value)} />
		</div>
	</div>
}

export function HookWithUseMemo () {
	const [count, setCount] = useState(1)
	const [val, setValue] = useState('')
	/**
   * useMemo 返回值是函数的返回值
	 * 应用场景：适用于耗时的计算，复杂的业务逻辑
   * @param {Function} 必选 callback
   * @param {Array} 可选 
   * 1.不传：commponentDidMount&componentDidUpdate的时候调用
   * 2.传[]：仅commponentDidMount会调用
   * 3.传[state|props]: commponentDidMount, state|props改变时调用
   */
	const expensive = useMemo(() => {
    /**
     * 通过查看打印结果可知, 只有当count发生变化时候, 复杂计算才会执行, 当val发生变化时候, 并不会执行count这个复杂逻辑
     * 思路有点像vue的computed, class组件并没有该功能, 如果使用 get sum () {} 每次都会执行, 除非使用第三方的 _.memory方案, 使用起来也没有useMemo简洁
     */
		console.log('%c HookWithUseMemo computing', 'color: #0f0;')
		let sum = 0
		for (let i = 0; i < count * 100; i++) {
			sum += i
		}
		return sum
	}, [count])

	return <div>
		<h2>HookWithUseMemo: </h2>
		<h4>{count} - {val} - {expensive}</h4>
		
		<div>
			<button onClick={() => setCount(count + 1)}>count + 1</button>
			<input value={val} onChange={event => setValue(event.target.value)} />
		</div>
	</div>
}