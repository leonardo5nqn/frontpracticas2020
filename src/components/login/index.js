import React, { useState } from "react"
import './index.css';
import axios from 'axios'
import Navbar from "../header/index"

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
    setError(null);
    axios({url:'http://localhost:5050/Controller/loginController.php', data: bodyFormData, method: 'post'})
    .then(response => {
      if(response.data.status===true)
      props.history.push('/Homeuser')
      console.log(response);
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