import React from "react"
import './index.css'
import logo from './logo.png'
import Navbar from './navbar/index'
import UserNavbar from './usernavbar/index'

function Header(props) {

  console.log(props);

  function NavbarChooser()
  {
    if(props.value==="1") return <UserNavbar />
    else return <Navbar />
  }
  return (
    <nav className="navbar nav d-flex navegacion">
        <div className='headerLogo'>
          <img src={logo} className='logoRot' alt='Logo Rotary Club de Neuquén'/>
          <h2 className='logoName'>Rotary Club de Neuquén</h2>
        </div>
        {NavbarChooser()}
    </nav>
  )
}

export default Header