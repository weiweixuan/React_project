import React from 'react'
import './App.scss'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { increaseFun, reduceFun } from './actions/main'
class App extends React.Component {
  render() {
    const {
      main: { count },
      increases,
      reduces
    } = this.props
    return (
      <div className="App">
        <div>
          {count}人
          <button
            onClick={() => {
              increases()
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
        <a href="#/main/15">我是A标签跳转</a>
        <button
          onClick={() => {
            return this.props.history.push({
              pathname: '/person',
              params: { skuid: 1038 }
            })
          }}
        >
          我是带返回的js跳转
        </button>
        <button
          onClick={() => {
            this.props.history.replace({
              pathname: '/person',
              params: { skuid: 1039 }
            })
          }}
        >
          我是不带返回的js跳转
        </button>
        <Link
          to={{
            pathname: '/setting',
            search: '?sort=name',
            state: { id: 1212 }
          }}
        >
          Link跳转
        </Link>
        <NavLink to="/setting">NavLink跳转</NavLink>
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
  increases: payload => dispatch(increaseFun(payload)),
  reduces: payload => dispatch(reduceFun(payload))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
