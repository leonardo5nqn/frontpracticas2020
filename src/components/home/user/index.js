import React from 'react'
import UserNavbar from '../../header/index'

function HomeUser(){
    console.log('variable')
    console.log(window.localStorage.getItem('usuario'));
    return(
        <div>
            <UserNavbar value="1"/>
            User home page
        </div>
    )
}

export default HomeUser