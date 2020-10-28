import React,{useState, createContext} from 'react'
// contextos
export const UserContext = createContext()
export const DocumentContext = createContext()

// proveedores
export const UserProvider = (props) => {
    const [logged,setLogged] = useState(false)
    const [rol,setRol] = useState('publico')
    const [id, setId] = useState(null)

    return(
        <UserContext.Provider value={
            {
                logged,setLogged,
                rol,setRol,
                id, setId
            }}>
            {props.children}
        </UserContext.Provider>
    )
}