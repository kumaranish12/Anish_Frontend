// src/components/Login.js
import React from 'react';
import { auth, googleAuthProvider } from '../firebase'; // Adjust the path if necessary
import { signInWithPopup } from 'firebase/auth';

const Login = () => {
  const signInWithGoogle = () => {
    console.log("Sign in with Google clicked");
    signInWithPopup(auth, googleAuthProvider)
      .then((result) => {
        console.log("Sign in successful", result.user);
      })
      .catch((error) => {
        console.error("Error during sign in", error);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default Login;
