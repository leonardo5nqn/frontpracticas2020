import React from "react"
import './index.css'
import logo from './logo.png'
import Navbar from './navbar/index'

function Header(props) {

  if(props.logged=="true")
  {
    if(props.rol == "admin")
    {
      return (
      <nav className="navbar nav d-flex navegacion">
        <div className='headerLogo'>
          <img src={logo} className='logoRot' alt='Logo Rotary Club de Neuquén'/>
          <h2 className='logoName'>Rotary Club de Neuquén</h2>
        </div>
        <Navbar rol="admin"/>
      </nav>)
    }
    else return (
      <nav className="navbar nav d-flex navegacion">
        <div className='headerLogo'>
          <img src={logo} className='logoRot' alt='Logo Rotary Club de Neuquén'/>
          <h2 className='logoName'>Rotary Club de Neuquén</h2>
        </div>
        <Navbar rol="publico"/>
      </nav>)
  }
  else return(
    <nav className="navbar nav d-flex navegacion">
      <div className='headerLogo'>
        <img src={logo} className='logoRot' alt='Logo Rotary Club de Neuquén'/>
        <h2 className='logoName'>Rotary Club de Neuquén</h2>
      </div>
      <Navbar />
    </nav>
  )
}

export default Header