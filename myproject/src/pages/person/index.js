import React, { Component } from 'react'
import './index.scss'

export default class Person extends Component {
  componentDidMount() {
    console.log(this.props.location.params)
  }
  componentDidUpdate() {
    console.log(this.dom, 'iii')
  }
  state = {
    isShow: false
  }
  toggle = () => {
    this.setState({ isShow: !this.state.isShow })
  }
  render() {
    return (
      <>
        <div
          className="person"
          onClick={() => {
            this.props.history.goBack()
          }}
        >
          我是Person
        </div>
        <button onClick={this.toggle}>点我切换显示</button>
        {this.state.isShow && (
          <div
            ref={dom => {
              this.dom = dom
            }}
            className="demo"
          >
            我是测试组件
          </div>
        )}
      </>
    )
  }
}
