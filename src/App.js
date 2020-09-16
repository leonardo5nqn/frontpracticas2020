import React, {useState} from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './components/home/index'
import Login from './components/login/index'
import Page404 from './components/404/index'
import HomeUser from './components/home/index'
import NuevoPedido from './components/pedidos/index'

function App (){
    //onst [userLogin, setUserLogin] = useState(false);
    return(
        <Router>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/homeuser" component={HomeUser}/>
                <Route exact path="/nuevoPedido" component={NuevoPedido}/>
                <Route path='*' component={Page404}/>
            </Switch>
        </Router>
    )
}

export default App