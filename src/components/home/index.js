import React,{useState} from 'react'
import Header from '../header/index'
import ListadoPedidos from '../pedidos/listado/index'


function Home ()
{
    var user =  (window.localStorage.length > 0 ? JSON.parse(window.localStorage.getItem('usuario')) : '')
    const [logged,setLogged] = useState(false)
    const [rol,setRol] = useState('')
    const changeNav = (user) =>{
        if(user.rol==0)
        {
            setLogged(true)
                setRol("admin")
        }
        else if (user.rol==1)
        {
            setLogged(true)
                setRol("publico")
        }
        else{
            setLogged(false)
            setRol("publico")
        }
    }
    return(
        <div>
            <Header logged={logged} rol={rol} />
        </div>
        
    );
}

export default Home