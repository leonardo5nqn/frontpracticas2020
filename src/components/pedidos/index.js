import React, {useState} from 'react'
import axios from 'axios'


const Pedidos = (props) => {


    // valores ocultos para el formulario de pedido: usuario
    
    const username = window.localStorage.getItem('usuario')
    const descripcionPedido = useFormInput('')
    var bodyFormData = new FormData()

    const ManejoNuevoPedido = e => {
        e.preventDefault()

        bodyFormData.append('username',username)
        bodyFormData.append('descripcionPedido',descripcionPedido)

        console.log(bodyFormData);

        axios({
            url:'http://localhost:5050/Controller/pedidoController.php', 
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

    return (
        <form className='loginForm' >
        <div className='input-group mb-3'>
            <div className='input-group-prepend'>
            <i className='material-icons input-group-text'>nombre</i>
            </div>
            <input {...descripcionPedido} className='form-control' type='text' placeholder='Describa el pedido en detalle. Ej: pido un auto' />
        </div>
        <input className='login btn' type='button' onClick={ManejoNuevoPedido} value='Realizar Pedido'/>
        </form>
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

export default Pedidos