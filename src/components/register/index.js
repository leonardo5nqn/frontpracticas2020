import React,{ useState } from 'react'
import axios from 'axios'
import Navbar from "../header/index"
import '../login/index.css'

function Register(){

    const username = useFormInput('')
    const password = useFormInput('')
    const password2 = useFormInput('')
    const mail = useFormInput('')
    const [error, setError] = useState(null)
    var bodyFormData = new FormData();
    import {_url} from '../../global/strings'

    const handleRegister = (props) => {
        console.log(username, password);
        bodyFormData.append('user', username.value);
        bodyFormData.append('password', password.value);
        setError(null);
        axios({url:`${_url}Controller/loginController.php`, data: bodyFormData, method: 'post'})
        .then(response => {
            if(response.data.status===true)
            props.history.push('/Homeuser')
            console.log(response);
        })
        .catch(error => {
            console.log(error)
        })
    }

    return(
        <div>
            <Navbar />
            <div className='loginContainer'>
                <form className='loginForm' >
                    <div className='input-group mb-3'>
                        <div className='input-group-prepend'>
                            <i className='material-icons input-group-text'>person</i>
                        </div>
                        <input {...username} className='form-control' type='text' placeholder='Ingrese el usuario' />
                    </div>
                    <div className='input-group mb-3'>
                        <div className='input-group-prepend'>
                            <i className='material-icons input-group-text'>lock</i>
                        </div>
                        <input {...password} className='form-control' type='password' placeholder='Ingrese la contraseña' />
                    </div>
                    <div className='input-group mb-3'>
                        <div className='input-group-prepend'>
                            <i className='material-icons input-group-text'>lock</i>
                        </div>
                        <input {...password2} className='form-control' type='password' placeholder='Ingrese la contraseña nuevamente' />
                    </div>
                    <div className='input-group mb-3'>
                        <div className='input-group-prepend'>
                            <i className='material-icons input-group-text'>mail</i>
                        </div>
                        <input {...mail} className='form-control' type='text' placeholder='Ingrese el email' />
                    </div>
                    <input className='register btn' type='button' onClick={handleRegister} value='Registrarse'/>
                </form>
                <a href="/login" className='login btn'>Login</a>
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
  

export default Register