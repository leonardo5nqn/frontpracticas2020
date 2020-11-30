import React, {useContext} from 'react'
import { Redirect } from 'react-router'
import {UserContext} from '../global/context'

export default function LogoutPage()
{
    const {setLogged} = useContext(UserContext)
    setLogged(false)
    localStorage.clear()
    return(<Redirect to="/"/>)
}