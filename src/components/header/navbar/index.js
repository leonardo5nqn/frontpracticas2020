import React from "react"
import './index.css';
class navbarContainer extends React.Component {
  render() {
    return (
      <div className='navbarContainer'>
          <ul>
              <li>Ingreso</li>
              <li>Sobre Nosotros</li>
              <li>Contacto</li>
          </ul>
      </div>
    )
  }
}

export default navbarContainer