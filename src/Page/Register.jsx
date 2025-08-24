import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {

   const{createUser, setUser} = use(AuthContext);

  const handleRegister =(e)=>{
   
  e.preventDefault();
  console.log(e.target);
  const form  = e.target;
  const name = form.name.value;
  const photo = form.photo.value;
  const email = form.email.value;
  const password = form.password.value;
  console.log({name,email,photo,password});

  createUser(email,password)
  .then((result) =>{
    const user =result.user;
    // console.log(user);
    setUser(user);
  })
  .catch((error) => {
    const errorCode =error.code;
    const errorMessage = error.errorMessage;
    alert(errorMessage);
    
    

  });

 

  };

    return (
        <div className='flex justify-center min-h-screen items-center'>
               <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className='font-semibold text-2xl'>Register your account</h1>
      <form onSubmit={handleRegister} className="card-body">
        <fieldset className="fieldset">
            {/* name */}
          <label className="label">Name</label>
          <input name='name' 
          type="text" 
          className="input"
           placeholder="Name"
           required/>
          {/* photo */}
            <label className="label">Photo url</label>
          <input name='photo' 
          type="text" 
          className="input" 
          placeholder="Photo url" 
           required/>
          {/* email */}
            <label className="label">Email</label>
          <input name='email'
           type="email" 
           className="input" 
           placeholder="Email"
            required />
          {/* pass */}
          <label className="label">Password</label>
          <input 
          name='password'
           type="password"
            className="input" 
            placeholder="Password" 
             required/>

        
          <button className="btn btn-neutral mt-4 " type='submit'>Login</button>
          <p className='font-semibold text-center mt-5'>Already Have An Account ? <Link to="/auth/login"  className='text-secondary'>Log In</Link></p>
        </fieldset>
      </form>
    </div>
        </div>
    );
};

export default Register;