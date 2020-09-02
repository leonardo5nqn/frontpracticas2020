import React from "react"
import './index.css';
import logo from './logo.png';
import Navbar from './navbar/index';

class headerContainer extends React.Component {
  render() {
    return (
      <nav className="navbar nav d-flex navegacion">
          <div className='headerLogo'>
            <img src={logo} className='logoRot' alt='Logo Rotary Club de Neuquén'/>
            <h2 className='logoName'>Rotary Club de Neuquén</h2>
          </div>
          <Navbar />
      </nav>
    )
  }
}
export default headerContainer