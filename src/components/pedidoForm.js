import React,{useState} from 'react'
import axios from 'axios'
import {_hostUrl} from '../global/strings'

export default function PedidoForm()
{
    const username = window.localStorage.getItem('usuario')
    const descripcionPedido = useFormInput('')
    const [error,setError] = useState('')
    var bodyFormData = new FormData()

    const ManejoNuevoPedido = e => {
        e.preventDefault()

        bodyFormData.append('username',username)
        bodyFormData.append('descripcionPedido',descripcionPedido)

        axios({
            url:`${_hostUrl}Controller/pedidoController.php`, 
            data: bodyFormData, 
            crossDomain: true,
            method: 'post'}
        )
        .then(response => {
            if(response.data.status===true){
                
                //props.history.push('/homeuser')
            }
            console.log(response);
        })
        .catch(error => {
            console.log(error)
        })
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

    return(
        <form className='loginForm' >
            <div className='input-group mb-3'>
                <p className="alert alert-danger"></p>
                <div className='input-group-prepend'>
                <i className='material-icons input-group-text'>nombre</i>
                </div>
                <input {...descripcionPedido} className='form-control' type='text' placeholder='Describa el pedido en detalle. Ej: pido un auto' />
            </div>
            <input className='login btn' type='button' onClick={ManejoNuevoPedido} value='Realizar Pedido'/>
        </form>
    )
}