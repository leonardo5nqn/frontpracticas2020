import React from "react"
import './index.css';

function Navbar () {
  if(window.localStorage)
  {
    if(window.localStorage.getItem('logeado')===true)
    {
      if(window.localStorage.getItem('admin')===true)
      {

      }

    }
  }
  else{
    
  }

  
  return (
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