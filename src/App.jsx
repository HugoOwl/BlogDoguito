import React from 'react'
import './assets/css/base/base.css'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Home from './paginas/Home'
import Sobre from './paginas/Sobre'
import Pagina404 from './paginas/Pagina404'
import Cabecalho from './components/Cabecalho'
import Post from './paginas/Post'
import Categoria from './paginas/Categoria'
import Login from './paginas/Login/Login';
function App() {

  return (
    <Router>
      <Route path="/">
      <Redirect to="/login"/>
      </Route>
      <Cabecalho />
      <Switch>
      
      <Route path="/login">
        <Login/>
      </Route>
        <Route exact path='/home'>
        <Home/>    
        </Route>
        <Route path='/sobre'>
          <Sobre />
        </Route>
        <Route path='/categoria/:id'>
          <Categoria />
        </Route>
       
        <Route path='/posts/:id'>
          <Post />
        </Route>
        <Route>
          <Pagina404 />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
