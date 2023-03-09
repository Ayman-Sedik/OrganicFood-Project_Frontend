import jwtDecode from 'jwt-decode'
import React from 'react'
import { Navigate } from 'react-router-dom'

export default function Protectedroute(props) {


    if (localStorage.getItem('token')) {
        let userData = jwtDecode(localStorage.getItem('token'))
        if (userData.first_name === "Admin") {
            return props.children
        } else {
            localStorage.removeItem('token')
            return  <Navigate to={'/home'} />
        }
        
    } else {
        return <Navigate to={'/home'} />

    }





}
