import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, } from "firebase/auth";
import app from '../Firebase/firebase.config';

const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  
const [loading, setLoading] = useState(true);

  console.log(loading,user,  );

  const createUser =(email,password) =>{
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUser=(updatedData)=>{
    return updateProfile(auth.currentUser,updatedData);

  };

const logOut  = ( ) => {
  return signOut(auth);
};




const singIn =( email, password) =>{
  return signInWithEmailAndPassword(auth, email, password);
};


 useEffect(() =>{
  const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
    setUser(currentUser);
    setLoading(false);

  });
  return ()=>{
    unSubscribe(); 
  }
 },[])

  const authData = {
    user,
    setUser,
    createUser,
     logOut ,
      singIn ,
      loading,
      setLoading,
      updateUser,
  };

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;