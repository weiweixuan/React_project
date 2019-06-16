import React, { Component } from 'react'
import './index.scss'

export default class Person extends Component {
  componentDidMount() {
    console.log(this.props.location.params)
  }
  render() {
    return (
      <div
        className="person"
        onClick={() => {
          this.props.history.goBack()
        }}
      >
        我是Person
      </div>
    )
  }
}
