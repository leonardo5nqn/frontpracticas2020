import React,{useState} from 'react'
import axios from 'axios'
import {_hostUrl} from '../global/strings'

export default function PedidoForm(props)
{
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
    const id = localStorage.getItem("userId")
    const descripcionPedido = useFormInput('')
    const [error,setError] = useState(null)
    var bodyFormData = new FormData()

    const ManejoNuevoPedido = e => {
        e.preventDefault()
        bodyFormData.append('username',id)
        bodyFormData.append('descripcionPedido',descripcionPedido.value)
        bodyFormData.append('option', '1')
        axios({
            url:`${_hostUrl}Controller/pedidoController.php`, 
            data: bodyFormData, 
            crossDomain: true,
            method: 'post'}
        )
        .then(response => {
            if(response.data.status===true){
                
                props.history.push("/pedidos")
            }
            else{
                setError(response.data.message)
            }
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    

    return(
        <div className='w-50 mx-auto'>
            <form className='loginForm d-flex flex-column my-auto mx-2 p-4' >
                <div className='input-group mb-3'>
                    {(error!=null ? <p className="alert alert-danger text-center">{error}</p> : null)}
                    <div className='input-group-prepend'>
                    <i className='material-icons input-group-text'>article</i>
                    </div>
                    <input {...descripcionPedido} className='form-control' type='text' placeholder='Describa el pedido en detalle. Ej: pido un auto' />
                </div>
                <input className='login btn btn-info' type='button' onClick={ManejoNuevoPedido} value='Realizar Pedido'/>
            </form>
        </div>
        
    )
}