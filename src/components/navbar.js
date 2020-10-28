import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/images/logo.png'
import '../assets/styles/navbar.css'
import {UserContext} from '../global/context'

export default function Navbar(props)
{
    const {logged, rol} = useContext(UserContext)
    console.log(logged)
    let nav=[]; 
    if(logged===true)
    {
        switch(rol)
        {
            case "admin":
                nav=[['Inicio','/'],['Pedidos','/pedidos'],['Logout','/logout']]
                break;
            case "publico":
                nav=[['Inicio','/'],['Pedidos','/pedidos'],['Logout','/logout']]
                break;
            default:
                nav=[['Inicio','/'],['Pedidos','/pedidos'],['Logout','/logout']]
                break;
        }
    }
    else{nav=[['Inicio','/'],['Ingreso','/login'],['Sobre Nosotros','/about'],['Contacto','/about']]}
    return(
        <nav className="navbar nav d-flex navegacion">
            <div className='headerLogo'>
                <img src={logo} className='logoRot' alt='Logo Rotary Club de Neuquén'/>
                <h2 className='logoName'>Rotary Club de Neuquén</h2>
            </div>
            <ul className="navbarContainer d-flex">
                {nav.map(nav => (<li className="text-warning mx-2 font-weight-normal"><Link to={nav[1]}>{nav[0]}</Link></li>))}
            </ul>
        </nav>
    )
}