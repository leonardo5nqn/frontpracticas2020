import React, { useState,useContext } from 'react'
import axios from 'axios'
import {UserContext} from '../global/context'
import { Redirect } from 'react-router'
import {_hostUrl} from '../global/strings'
import '../assets/styles/login.css'

export default function Form(props)
{
    const useFormInput = initialValue => {
        const [value, setValue] = useState(initialValue);
        const handleChange = e => {setValue(e.target.value);}
        return {value,onChange: handleChange}
    }

    const switcher = (a) => {(a===1 ? form=true : form=false);console.log(form)}

    const username = useFormInput('')
    const password = useFormInput('')
    const [error, setError] = useState(null)
    const {logged, setLogged, setRol, setId} = useContext(UserContext)
    let form = false;
    var bodyFormData = new FormData();
    if(logged === true) return(<Redirect to="/dashboard" />)
    const handleLogin = () => {
        bodyFormData.append('user', username.value);
        bodyFormData.append('password', password.value);
        bodyFormData.append('option', '1')
        setError(null);
        axios(
        {
            url:`${_hostUrl}Controller/loginController.php`, 
            data: bodyFormData, 
            crossDomain: true,
            method: 'post'}
        )
        .then(response => {
            if(response.data.status===true){
                setLogged(true)
                setRol(response.data.data[0].rol)
                setId(response.data.data[0].id)
                props.history.push("/")
            }else{
                setError(response.data.message)
            }
        }).catch(error => setError('error'))
    }

    if(form === false)
    {
        return(
            <div className='loginContainer'>
                <form className='loginForm' >
                    {(error!=null ? <p className="alert alert-danger text-center">{error}</p> : '')}
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
                <button className='register btn' onClick={switcher(1)}>Registrarse</button>
            </div>
        )
    }
    else
    {
        return(
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
                <button className='register btn' onClick={switcher(0)}>Ingresar</button>
            </div>
        )
    }
}