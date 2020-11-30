import React, { useContext }  from 'react'
import { Redirect } from 'react-router'
import {UserContext} from '../global/context'

export default function HomePage ()
{
    const {logged, setLogged} = useContext(UserContext)
    if(logged === true || localStorage.getItem("loggedIn")==="true") {
        setLogged(true)
        return(<Redirect to="/dashboard" />)
    }
    return(
        <div>
            Home Page
        </div>
    )
}