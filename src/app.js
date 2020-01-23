import React from 'react'
import ReactDOM from 'react-dom'
import Main from './Components/main'
import Navbar from './Components/Navbar'
import SingleMovie from './Components/singleMovie'
import { BrowserRouter, Switch, Route, HashRouter } from 'react-router-dom'

import 'bulma'
import './styles/style.scss'

const App = () => (
  <HashRouter>
    <Navbar />
    <Switch>
      <Route path="/main/:id" component={SingleMovie} />
      <Route exact path="/" component={Main} />
      {/* <Route exact path="/EditMovie" component={EditMovie} /> */}
      {/* <Route path="/watchlater" component={Favourites} /> */}
      
    </Switch>
  </HashRouter>
)



ReactDOM.render(
  <App />,
  document.getElementById('root'),
)