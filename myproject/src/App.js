import React from 'react'
import './App.scss'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Avatar, Button } from 'antd'
import { increaseAction, reduceFun, getInfoAction } from './actions/main'
class App extends React.Component {
  componentDidMount() {
    const { getInfoFun } = this.props
    getInfoFun()
  }
  render() {
    const {
      main: { count, avatar_url },
      increases,
      reduces
    } = this.props
    return (
      <div className='App'>
        <Button
          type='primary'
          onClick={() => {
            React.setLodding(true)
          }}
        >
          显示
        </Button>
        <Button
          type='primary'
          onClick={() => {
            console.log('444')
            React.setLodding(false)
          }}
        >
          关闭
        </Button>
        <Avatar size='large' icon='user' src={avatar_url} />
        <div>
          {count}人
          <button
            onClick={() => {
              increases({}, () => {
                console.log('我是callback')
              })
            }}
          >
            增加
          </button>
          <button
            onClick={() => {
              reduces()
            }}
          >
            减少
          </button>
        </div>
        <a href='#/main/15'>跳转主页</a>
        <button
          onClick={() => {
            return this.props.history.push({
              pathname: '/person',
              params: { skuid: 1038 }
            })
          }}
        >
          跳转个人页<i className={`iconfont icon-ossp-yun`}></i>
        </button>
        <button
          onClick={() => {
            this.props.history.replace({
              pathname: '/person',
              params: { skuid: 1039 }
            })
          }}
        >
          重定向到个人页
        </button>
        <Link
          to={{
            pathname: '/setting',
            search: '?sort=name',
            state: { id: 1212 }
          }}
        >
          跳转设置页
        </Link>
        <Link to={{ pathname: '/ex1' }}>跳转到案例1</Link>
        <br></br>
        <Link to='/todolist'>去TODOlist</Link>
        <br></br>
        <Link to='/love'>love</Link>
        <br></br>
        <Link to='/second/'>二级嵌套路由</Link> &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to='/lazy/'>懒加载</Link>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    main: state.main
  }
}

const mapDispatchToProps = dispatch => ({
  increases: (payload, callback) => dispatch(increaseAction(payload, callback)),
  reduces: payload => dispatch(reduceFun(payload)),
  getInfoFun: () => dispatch(getInfoAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
