import React, { lazy, Suspense, Component } from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import App from '../App'
import Main from '../pages/main/index'
import Setting from '../pages/setting/index'
import Person from '../pages/person/index'
import NotFound from '../pages/notFound/index'
import { createHashHistory } from 'history'
import Ex1 from '../pages/example1/ex1'
import Penny from '../pages/penny'
import MyTodoList from '../pages/myTodoList/index'
import SecondRoute from '../pages/secondRoute'
import { ContextValue, context } from '../content/index'
const LazyComponent = lazy(() => import('../pages/lazy'))
let SuspenseComponent = Component => props => {
  return (
    <Suspense fallback={<div>加载中</div>}>
      <Component {...props}></Component>
    </Suspense>
  )
}
const history = createHashHistory()
const BasicRoute = () => (
  <ContextValue.Provider value={context}>
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/main/:id' component={Main} />
        <Route path='/setting' component={Setting} />
        <Route path='/person' component={Person} />
        <Route path='/ex1' component={Ex1} />
        <Route path='/todolist' component={MyTodoList} />
        <Route path='/love' component={Penny} />
        <Route path='/second/' component={SecondRoute} />
        <Route path='/lazy/' component={SuspenseComponent(LazyComponent)} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Router>
  </ContextValue.Provider>
)
export default BasicRoute
