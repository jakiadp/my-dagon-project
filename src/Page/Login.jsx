import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';


const Login = () => {
  const { singIn } = use(AuthContext)
  const handlelogIn = (e) =>{
     e.preventDefault();
      console.log(e.target);
       const form  = e.target;
     const email = form.email.value;
     const password = form.password.value;
     console.log({email,password});
      singIn(email, password)
      .then(result =>{
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode, errorMessage);
  });
  }


    return (
        <div className='flex justify-center min-h-screen items-center'>
               <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className='font-semibold text-2xl'>Login your account</h1>
      <form onSubmit={handlelogIn} className="card-body">
        <fieldset className="fieldset">
          {/* email */}
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
            {/* password */}
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>

          <button type='submit' className="btn btn-neutral mt-4">Login</button>

          <p className='font-semibold text-center mt-5'>Dont’t Have An Account ? <Link to="/auth/register"  className='text-secondary'>Register</Link></p>
        </fieldset>
      </form >
    </div>
        </div>

    );
};

export default Login;