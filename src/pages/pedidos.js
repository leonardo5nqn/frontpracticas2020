import React, {Suspense, useState} from 'react'
import axios from 'axios'
import {_hostUrl} from '../global/strings'


export default function PedidosPage()
{
    const bodyFormData = new FormData()
    bodyFormData.append('option','2')
    const [data, setData] = useState([])

    const getPedidos = ()=>
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
    if(!data.length>0) getPedidos()
        
    return(
        <div className="d-flex flex-column px-5 py-2">
            <h2 className="display-6 ">Listado de Pedidos</h2>
            <table className="table table-sm table-striped table-responsive-md">
                <thead className="bg-primary">
                    <tr>
                        <th className="text-warning" scope="col">Descripción</th>
                        <th className="text-warning" scope="col">Estado</th>
                        <th className="text-warning" scope="col">Validación</th>
                    </tr>
                </thead>
                <tbody>
                    <Suspense fallback={<tr><td>No hay pedidos cargados</td></tr>}>
                        {
                            (data.length>0 ? data.map (pedido => {
                                
                                let pedi = JSON.parse(pedido)
                                return (<tr>
                                        <td>{pedi.descripcion}</td>
                                        <td>{pedi.estado}</td>
                                        <td>{pedi.validacion}</td>
                                        <td>
                                            <i className="material-icons text-info text-center btn">visibility</i>
                                            <i className="material-icons text-danger text-center btn">delete</i>
                                        </td>
                                    </tr>)
                            })
                            :
                            <tr><td>Cargando Pedidos...</td></tr>)
                        }
                    </Suspense>
                </tbody>
            </table>
        </div>
    )
}
/*
        let Listado = (datas.length>0 ? data.map(pedido => 
            {
                let pedi = JSON.parse(pedido)
                    console.log(pedi)
                return(<div></div>)
            })
            : "cargando pedidos"
            )*/