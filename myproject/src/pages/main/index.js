import React, { Component } from 'react'
import Button from 'antd/es/button'
import './index.scss'

export default class Main extends Component {
  componentDidMount() {
    console.log(this.props.match.params)
  }
  render() {
    return (
      <div className="main">
        我是main<Button>我是button</Button>
      </div>
    )
  }
}
