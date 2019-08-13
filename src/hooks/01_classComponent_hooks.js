import React, { Component, useState, useEffect } from 'react'

// 有状态组件（有state&生命周期）
export class ClassComponent extends Component {
  constructor (props) {
    super (props)

    this.state = {
      name: 'inke'
    }
    this.helloInke = this.helloInke.bind(this)
  }

  componentDidMount () {}

  helloInke () {
    const { inke } = this.props

    console.log(`hello ${inke}`)
  }

  render () {
    const { name } = this.state
    const { helloInke } = this

    return <div>
      <h1>{`Hi ${name}`}</h1>
      <button onClick={helloInke}>hello inke</button>
    </div>
  }
}

// 无状态组件（没有state&生命周期）
export function Hooks (props) {
  const { inke } = props
  const [name, setName] = useState('inke')

  useEffect(() => {}, [])

  const helloInke = () => console.log(`hello ${inke}`)

  return <div>
    <h1>{`Hi ${name}`}</h1>
    <button onClick={helloInke}>hello inke</button>
  </div>
}
