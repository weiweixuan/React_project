import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import './video.scss'
function Vuejs() {
  return <div>vue视频</div>
}
function Angularjs() {
  return <div>angular视频</div>
}
function Reactjs() {
  return <div>react视频</div>
}
export default class Video extends Component {
  render() {
    return (
      <div>
        <span>video视频课程</span>
        <ul className="headers">
          <li>
            <Link to="/second/video/">vue视频</Link>
          </li>
          <li>
            <Link to="/second/video/reactjs">react视频</Link>
          </li>
          <li>
            <Link to="/second/video/angularjs">angular视频</Link>
          </li>
        </ul>
        <Route path="/second/video/" exact component={Vuejs}></Route>
        <Route path="/second/video/reactjs" component={Reactjs}></Route>
        <Route path="/second/video/angularjs" component={Angularjs}></Route>
      </div>
    )
  }
}
