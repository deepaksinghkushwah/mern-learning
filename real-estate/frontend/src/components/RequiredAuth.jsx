import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useUserStore } from '../store/useStore'

function RequiredAuth({allowedRoles}) {
    const user = useUserStore(state => state.user);
    const token = useUserStore(state => state.token);
    const location = useLocation();
    return (
      allowedRoles.find(role => role === user?.role) 
      ? <Outlet/> 
      : user?._id ? <Navigate to="/unauthorized" state={{from: location}} replace />
      : <Navigate to="/login"  />
    )
}

export default RequiredAuth