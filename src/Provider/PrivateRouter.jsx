import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Page/Loading';

const PrivateRouter = ({children}) => {
     const { user,  loading , } = use(AuthContext);
    //  console.log(user);

    const location = useLocation;
    console.log(location);
    if (loading){
        return <Loading></Loading>

    }
    //  jodi user thake taile hobe
    if(user && user?. email){
         return children;
    }
    return <Navigate state={location.pathname} to="/auth/login" ></Navigate>

    // uswr nah thakle login 

  

   
};

export default PrivateRouter;


