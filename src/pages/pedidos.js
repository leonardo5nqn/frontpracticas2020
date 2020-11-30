import React, {Suspense, useState, useEffect} from 'react'
import axios from 'axios'
import {_hostUrl} from '../global/strings'


 export default function Pedidos(props)   
{    
    const bodyFormData = new FormData()
    
    const [data, setData] = useState([])
    const [error, setError] = useState(null)

    const seeDocument = (id) => {
        props.history.push(`/document/${id}`)
    }

    const deleteDocument = (id) => {
        setError(null)
        bodyFormData.append('option','7')
        bodyFormData.append('id',id)
        axios({
            url:`${_hostUrl}Controller/pedidoController.php`, 
            data: bodyFormData, 
            crossDomain: true,
            method: 'post'  
        }).then(response => {
            console.log(response)
            if(response.data.status===true){
                props.history.push("/pedidos")
            }
            else {
                setError(response.data.message)
            }
        }).catch(error => {
            console.log(error)
        })
    }
    
    useEffect(() => {
        const getPedidos = ()=>
            {
                bodyFormData.append('option','2')
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
        setTimeout({},10000)
        getPedidos()
        return () => {
            
        }
    }, [])
    
    return(
        <div className="d-flex flex-column px-5 py-2">
            <div className="d-flex my-2 mx-1">
                <h2 className="display-6 ">Listado de Pedidos</h2>
                <button className="btn btn-success ml-4" onClick={()=>{props.history.push("/document/new")}}>
                    Nuevo pedido
                </button>
            </div>
            {(error!=null ? <p className="alert alert-danger text-center">{error}</p> : null)}
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
                                        <td>{pedi.usuario}</td>
                                        <td>{pedi.fechaPedido}</td>
                                        <td>
                                            <i className="material-icons text-info text-center btn" onClick={()=>{seeDocument(pedi.id)}}>visibility</i>
                                            <i className="material-icons text-danger text-center btn" onClick={()=>{deleteDocument(pedi.id)}}>delete</i>
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