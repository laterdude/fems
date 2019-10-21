import React from 'react'
import { createHashHistory } from 'history'
import { 
  Router, 
  Route, 
  IndexRoute, 
  IndexRedirect, 
  Redirect, 
  useRouterHistory 
} from 'react-router'

import App from './components/App'
import Home from './components/Home'
import Gallery from './components/Gallery'
import Page from './components/Page'

import { Pages } from './constants/pages'

const appHistory = useRouterHistory(createHashHistory)({/*queryKey: false*/})

const getDefaultPath = pages => {
  const path = []
  let page
  while (pages) {
    page = pages[0]
    pages = page.children
    path.push(page.path)
  }
  return path.join('/')
}

const renderRoute = (pageComponent = Page, page, i) => {
  const {children, path, content, component} = page
  if (!children) {
    return (
      <Route
        key={i}
        path={path}
        childComponent={component}
        component={pageComponent}
        content={content}
      />
    )
  }

  return (
    <Route key={i} path={path} >
      <IndexRedirect to={getDefaultPath(children)} />
      {children.map(renderRoute.bind(null, pageComponent))}
    </Route>
  )
}

const renderRouteGroup = (path, pages, pageComponent) => {
  const defaultPage = getDefaultPath(pages)
  return (
    <Route key={path} path={path} component={Gallery} pages={pages}>
      <IndexRedirect to={defaultPage} />
      {pages.map(renderRoute.bind(null, pageComponent))}
      <Redirect from="*" to={defaultPage} />
    </Route>
  )
}

// eslint-disable-next-line react/display-name
export default () => (
  <Router history={appHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      {
        Pages.map((page) =>
          renderRouteGroup(page.title, page.paths, page.pageComponent))
      }
      <Redirect from="*" to="/" />
    </Route>
  </Router>
)

// const routes = [
//   { path: '/zonegroup',
//     component: RequireAuth(ZoneGroup),
//     exact: true
//   },
//   { 
//     component: Home
//   },
// ]

// const RouteWithSubRoutes = route => (
//   <Route 
//     path={route.path}
//     render={props => (
//       <route.component {...props} routes={route.routes} />
//     )}
//   />
// )

// class App extends Component {
//   render() {
//     return (
//       <div className="h-100">
//         <Header />
//         <Switch>
//           {routes.map((route, i) => (
//             <RouteWithSubRoutes key={i} {...route} />
//           ))}
//         </Switch>
//       </div>
//     )
//   }
// }