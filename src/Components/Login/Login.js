import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './Firebase.config';
import { UserContext } from '../../App';
import { FcGoogle } from 'react-icons/fc';
import { useHistory, useLocation } from 'react-router';
import './Login.css'
if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [user, setUser] = useState({});
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    const handleGoogleLogin = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
  .signInWithPopup(googleProvider)
  .then((result) => {
      const {displayName, email} = result.user;
      const user = {
          name:displayName,
          email:email
      }
      setUser(user);
      setLoggedInUser(result.user);
      history.replace(from)
  })
  .catch((error) => {
      console.log(error)
  })
    }

    return (
        <div className="container mt-5 text-center">
                <button onClick={handleGoogleLogin} id="googleLogin"> <FcGoogle/> Continue with google</button>
        </div>
    );
};

export default Login;