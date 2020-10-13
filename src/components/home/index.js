import React,{useState} from 'react'
import Header from '../header/index'
import ListadoPedidos from '../pedidos/listado/index'


function Home ()
{
    var user =  (window.localStorage.length > 0 ? JSON.parse(window.localStorage.getItem('usuario')) : '')
    const [logged,setLogged] = useState(false)
    const [rol,setRol] = useState('')
    if(user)
    {
        switch(user.rol)
        {
            case "0":
                setLogged(true)
                setRol("admin")
            break;
            case "1":
                setLogged(true)
                setRol("publico")
            break;
        }
    }
    return(
        <div>
            <Header logged={logged} rol={rol} />
        </div>
        
    );
}

export default Home