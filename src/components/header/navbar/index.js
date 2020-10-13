import React from "react"
import './index.css';

function Navbar (props) {
  
  if(props.rol)
  {
    if(props.rol==="admin")
    {
      return (
        <div className='navbarContainer'>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/pedidos">Pedidos</a></li>
            <li><a href="">Logout</a></li>
          </ul>
        </div>
      )
    }
    else return(
      <div className='navbarContainer'>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/pedidos">Pedidos</a></li>
          <li><a href="">Logout</a></li>
        </ul>
      </div>
    )
  }
  else return (
    <div className='navbarContainer'>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/login">Ingreso</a></li>
          <li><a href="/about">Sobre Nosotros</a></li>
          <li><a href="/contact">Contacto</a></li>
        </ul>
    </div>
  )
}

export default Navbar