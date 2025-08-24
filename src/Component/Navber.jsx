import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userImage from"../assets/user.png";
import { AuthContext } from '../Provider/AuthProvider';

const Navber = () => {
    const {user,  logOut  } = use(AuthContext); 
    const handleLogOut = () =>{
        console.log('laog out');
        logOut().then(() => {
  alert("your logged out successfully")
}).catch((error) => {
console.log(error);
});
    }
    return (
        <div className='flex justify-between mt-4'>
            <div className=''>{user && user.email}</div>
            <div className='nav flex gap-2'>
                <NavLink to="/">Home</NavLink>
                 <NavLink to="/about">About</NavLink>
                  <NavLink to="/caree">Caree</NavLink>
            </div>
            <div className=' flex gap-5'>
                <img src={userImage} alt="" />
               {user ? (
                <button onClick={handleLogOut}  className='btn btn-primary px-10'>Log Out</button>
               ) : (
                <Link to="/auth/login"  className='btn btn-primary px-10'>Log In</Link>
               )}
               
         
            </div>
        </div>
    );
};

export default Navber;