import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './config';
import { UserContext } from '../../../App';

const Form = () => {
 
 
    const handleBlur = (e) => {
        
        let formValid = true; 
           if(e.target.name === 'email'){
             formValid = /\S+@\S+\.\S+/.test(e.target.value);
           }
           if(e.target.name === 'password'){
             const passwordValid = e.target.value.length > 6;
             const passwordIsValid = /\d{1}/.test(e.target.value);
             formValid = passwordValid && passwordIsValid;
           }
       }; 
       

     

    return (
        <div>
              <h2>Registration  First</h2>
            <form onSubmit={handleSubmit}>
            <input type="email" name="email" onBlur={handleBlur} placeholder="enter email address" required/><br/>
            <input type="password" name="password" onBlur={handleBlur} placeholder="enter your password" required/><br/>
            <input type="submit" value="Submit"/> 
            </form><br/>
            <button onClick={handleGoogleSignIn}>Sign up</button>
       </div>
    );
};

export default Form;