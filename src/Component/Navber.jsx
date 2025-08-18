import React from 'react';
import { NavLink } from 'react-router';
import user from"../assets/user.png";

const Navber = () => {
    return (
        <div className='flex justify-between mt-4'>
            <div className=''></div>
            <div className='nav flex gap-2'>
                <NavLink to="/">Home</NavLink>
                 <NavLink to="/about">About</NavLink>
                  <NavLink to="/caree">Caree</NavLink>
            </div>
            <div className=' flex gap-5'>
                <img src={user} alt="" />
                <button className='btn btn-primary px-10'>Log in</button>
            </div>
        </div>
    );
};

export default Navber;