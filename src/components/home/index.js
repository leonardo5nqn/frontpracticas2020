// utils
import React from 'react'
import {Link} from 'react-router-dom'
// components
import Header from '../header/index'
import NuevoPedido from '../pedidos/index'


function Home ()
{
    
    
    return (
        <div>
            <Header/>
            <NuevoPedido/>
            Home
        </div>
    )
}

export default Home