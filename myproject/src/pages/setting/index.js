import React, { Component } from 'react'
import './index.scss'

export default class Setting extends Component {
  componentDidMount() {
    console.log(this.props.location.state)
  }
  render() {
    return <div className="setting">我是setting</div>
  }
}
