react-router-dom

安装，cnpm install react-router-dom --save-dev
详细请参考 route/index.js （react-router-dom 里的 createHashHistory 已经分离出去，需要 cnpm i history）

跳转方式和传参：

1.
<a href='/main/12'>  
路由：
<Route path="/main/:id" component={Main} />
//这种方式需要在路由里定义一下，取值：this.props.match.params

2.js 跳转：
<button
onClick={() => {
return this.props.history.push({
pathname: '/person',
params: { skuid: 1038 }
})
}}

> 我是带返回的 js 跳转
> </button>
> //这种方式不需要修改路由，不带返回功能的是 this.props.history.replace
> 取值：this.props.history.replace

3.Link 跳转

<Link to='/setting'>
<Link
  to={{
    pathname: '/setting',
    search: '?sort=name',
    state: { id: 1212 }
  }}
>
  Link跳转
</Link>
//link跳转to属性可为string和obj，取值方法参考上文

React-Redux:
安装：cnpm install --save react-redux 或 yarn add react-redux , cnpm i --save redux
