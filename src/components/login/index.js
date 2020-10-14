import React, { useState } from "react"
import './index.css';
import axios from 'axios'
import Navbar from "../header/index"
import {_url} from '../../global/strings'

function LoginContainer(props)
{
  const username = useFormInput('')
  const password = useFormInput('')
  const [error, setError] = useState(null)
  var bodyFormData = new FormData();

  const handleLogin = () => {
    console.log(username, password);
    bodyFormData.append('user', username.value);
    bodyFormData.append('password', password.value);
    bodyFormData.append('option', '1')
    setError(null);
    axios(
      {
      url:`${_url}Controller/loginController.php`, 
      data: bodyFormData, 
      crossDomain: true,
      method: 'post'}
      )
    .then(response => {
      if(response.data.status===true){
        console.log(response.data);
        const usuario = {
          usuario: response.data.data[0]['nombreDeUsuario'],
          rol: response.data.data[0]['rol'],
          id: response.data.data[0]['id']
        }
        window.localStorage.setItem('usuario', JSON.stringify(usuario))
        props.history.push('/')
      }
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <div>
      <Navbar />
      <div className='loginContainer'>
          <form className='loginForm' >
            <div className='input-group mb-3'>
              <div className='input-group-prepend'>
                <i className='material-icons input-group-text'>person</i>
              </div>
              <input {...username} className='form-control' type='text' placeholder='Usuario' />
            </div>
            <div className='input-group mb-3'>
              <div className='input-group-prepend'>
                <i className='material-icons input-group-text'>lock</i>
              </div>
              <input {...password} className='form-control' type='password' placeholder='Contraseña' />
            </div>
            <input className='login btn' type='button' onClick={handleLogin} value='Ingresar'/>
          </form>
          <button className='register btn'>Registrarse</button>
      </div>
    </div>
  )
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
 
  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default LoginContainer