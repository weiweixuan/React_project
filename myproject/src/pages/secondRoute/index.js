import React, { Component } from 'react'
import Main from './main'
import Product from './product'
import Video from './video'
import { Route, Link } from 'react-router-dom'
import './index.scss'
export default class Index extends Component {
  render() {
    return (
      <div className="box_">
        <div className="left">
          <ul>
            <Link to="/second/">
              <li>个人主页</li>
            </Link>
            <Link to="/second/video/">
              <li>热门视频</li>
            </Link>
            <Link to="/second/product/">
              <li>商城首页</li>
            </Link>
          </ul>
        </div>
        <div className="right">
          <Route component={Main} exact path="/second/"></Route>
          <Route component={Video} path="/second/video/"></Route>
          <Route component={Product} path="/second/product/"></Route>
        </div>
      </div>
    )
  }
}
