import React, { Component } from 'react'
import './index.scss'

class Child extends Component {
  constructor(props) {
    super(props)
    this.state = { title: '' }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(
      nextProps,
      prevState,
      '我是子组件--->getDerivedStateFromProps方法'
    )
    if (nextProps.age >= 18) {
      return {
        title: `我${nextProps.age}岁了，我成年啦！！！`
      }
    }
    return {
      ...prevState,
      title: `我${nextProps.age}岁了，我还是小孩子！！！`
    }
  }

  render() {
    return <div>我是child组件,{this.state.title}</div>
  }
}

export default class NotFond extends Component {
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log(
  //     nextProps,
  //     prevState,
  //     '我是父组件--->getDerivedStateFromProps方法'
  //   )
  //   return null
  // }
  state = { age: 10 }
  render() {
    return (
      <div className="notfond">
        我是404页面
        <div>我今年{this.state.age}岁了</div>
        <button
          onClick={() => {
            this.setState((prevState, props) => {
              return { age: ++prevState.age }
            })
          }}
        >
          增加
        </button>
        <Child age={this.state.age}></Child>
      </div>
    )
  }
}
