import React, {useContext} from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import HomePage from './pages/home'
import LoginPage from './pages/login'
import DashboardPage from './pages/dashboard'
import PedidosPage from './pages/pedidos'
import LogoutPage from './pages/logout'

import Document from './components/document'
import Navbar from './components/navbar'
import PedidoForm from './components/pedidoForm'

import {UserContext} from './global/context'

import './assets/styles/global.css'


export default function App() {
  const {logged,rol} = useContext(UserContext)
  return (
      <Router>
        <Navbar />
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path="/login" component={LoginPage}/>
            { logged===true && <Route exact path="/dashboard" component={DashboardPage} />}
            { logged===true && <Route exact path="/pedidos" component={PedidosPage} />}
            { logged===true && (rol==="comision" || rol==="admin") && <Route exact path="/document/:docId" component={Document} />}
            { logged===true && <Route exact path="/document/new" component={PedidoForm}/>}
            { logged===true && <Route exact path="/logout" component={LogoutPage} />}
            <Route path='*' component={HomePage}/>
            
        </Switch>
      </Router>
  );
}
