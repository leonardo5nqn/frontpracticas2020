// utils
import React from 'react'
import {Link} from 'react-router-dom'
// components
import Header from '../header/index'
import NuevoPedido from '../pedidos/index'
import ListadoPedidos from '../pedidos/listado/index'


function Home ()
{
    console.log(window.localStorage.usuario)
    var user =  (window.localStorage.length > 0 ? window.localStorage.getItem('usuario') : '')
    console.log(user);
    user = JSON.parse(user);
    console.log(user);
    if(user)
    {
        switch(user.rol)
        {
            case "0":
                return (
                    <div>
                        <Header logged="true" rol="admin" />
                        <ListadoPedidos />
                    </div>
                )
            break;
            case "1":
                return (
                    <div>
                        <Header logged="true" rol="publico" />
                        <ListadoPedidos />
                    </div>
                )
            break;
            default:
                return (
                    <div>
                        <Header/>
                    </div>
                )
            break;
        }
    }
    else return (
        <div>
            <Header/>
        </div>
    )
    
    
}

export default Home