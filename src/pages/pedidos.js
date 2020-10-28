import React, {Suspense, useState} from 'react'
import axios from 'axios'
import {_hostUrl} from '../global/strings'


export default function PedidosPage()
{
    const bodyFormData = new FormData()
    bodyFormData.append('option','2')
    const [data, setData] = useState([])

    const getPedidos = async ()=>
    {
        axios({
            url:`${_hostUrl}Controller/pedidoController.php`, 
            data: bodyFormData, 
            crossDomain: true,
            method: 'post'
            }
        )
        .then(response => {
            if(response.data.status===true){
                var array = [];
                response.data.data.forEach(element => {
                    array.push(JSON.stringify(element))
                });
                setData(array)
            }
            else return response.data.message
        })
        .catch(error => {
            console.log(error)
        })
    }
    const Pedidos = () => 
    {
        getPedidos()
        return(
            (data.length>0 ? data.map(pedido => (
                <li>{pedido}</li>
            ))
            :
            "cargando pedidos"
            )
            
        )
    }
        
    return(
        <div>
            Pedidos
            <table>
                <Suspense fallback={<tr>"No hay pedidos cargados"</tr>}>
                    <Pedidos />
                </Suspense>
            </table>
        </div>
    )
}