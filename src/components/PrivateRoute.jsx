import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';
import React from 'react'

const PrivateRoute = ({ publicPage = false}) => {
    const { user } = useSelector((state) => state.auth);
    if (publicPage) {
        return user? <Navigate to="/"/> : <Outlet/>
    }
  return user ? <Outlet/> : <Navigate to="/login"/>
}

export default PrivateRoute