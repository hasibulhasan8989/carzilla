import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const AuthProviders = ({ children }) => {
  const axiosPublic=useAxiosPublic()
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const signOutUser = () => {
    return signOut(auth);
  };

  const updateUser=(name,photo)=>{
    updateProfile(auth.currentUser,{
        displayName: name,
        photoURL:photo,
    })
  }

  useEffect (() => {
    const unSubscribe = onAuthStateChanged(auth,async (currentUser) => {
      console.log('Current User ->',  currentUser)
      setUser(currentUser);
      setLoading(false);
      if(currentUser){
        const email=currentUser.email
        const role="user"
        const name=currentUser.displayName || 'Anonymous'
        const user={email,role,name}
        const {data}=await axiosPublic.post('/user',user)
        console.log(data)
      }
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    signUp,
    login,
    googleLogin,
    signOutUser,
    updateUser,
    setUser
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProviders;
