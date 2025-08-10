import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation} from 'react-router-dom';
import Loading from '../Pages/Loading/Loading';

const ProtectedRoute = ({children}) => {
    const {user ,loading}=useAuth()
    const location=useLocation()

    if(user){
      return children
    }

    if(loading){
    return <Loading></Loading>
    }

    return <Navigate state={location.pathname} to={'/login'} ></Navigate>
};

export default ProtectedRoute;