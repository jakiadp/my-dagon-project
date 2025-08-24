import React from 'react';
import Navber from '../Component/Navber';
import Login from '../Page/Login';
import { Outlet } from 'react-router';
import Register from '../Page/Register';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
         <header className='w-11/12 mx-auto  py-4'>
             <Navber></Navber>
         </header>

         <main className='w-11/12 mx-auto py-5'>
            <Outlet>
                <Login></Login>
                <Register></Register>
            </Outlet>
         </main>
        </div>
    );
};

export default AuthLayout;