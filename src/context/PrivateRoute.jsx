import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuthValue } from './AuthProvider'

const PrivateRoute = ({children}) => {
    const {userinfo} = useAuthValue();
    if(!userinfo){
        return <Navigate to='/notlogin' replace/>
    }
    return children;
}

export default PrivateRoute