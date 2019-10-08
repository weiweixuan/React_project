import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import App from '../App'
import Main from '../pages/main/index'
import Setting from '../pages/setting/index'
import Person from '../pages/person/index'
import NotFound from '../pages/notFound/index'
import { createHashHistory } from 'history'
import Ex1 from '../pages/example1/ex1'
import Penny from '../pages/penny'
import MyTodoList from '../pages/myTodoList/index'
const history = createHashHistory()
const BasicRoute = () => (
  <HashRouter history={history}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/main/:id" component={Main} />
      <Route path="/setting" component={Setting} />
      <Route path="/person" component={Person} />
      <Route path="/ex1" component={Ex1} />
      <Route path="/todolist" component={MyTodoList} />
      <Route path="/love" component={Penny} />
      <Route path="*" component={NotFound} />
    </Switch>
  </HashRouter>
)
export default BasicRoute
