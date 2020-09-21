import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../Form/config';
import { Button, Form } from 'react-bootstrap';
import {UserContext} from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import './Login.css'
import { faAt, faKey} from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory, useLocation } from 'react-router-dom';



const Login = () => {
    const [loggedInUser ,setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
  
    const  { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0){
      firebase.initializeApp(firebaseConfig)
    }
       const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
          firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email,photoURL} = result.user;
          setLoggedInUser({name : displayName,email,photoURL})
          history.replace(from);
          }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            console.log(errorCode,errorMessage,email);
          });
       }  
       const handleFbSignIn = () => {
        var provider = new firebase.auth.FacebookAuthProvider();
          firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email,photoURL} = result.user;
          setLoggedInUser({name : displayName,email,photoURL})
          }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            console.log(errorCode,errorMessage,email);
          });
       }  
       const handleGithubSignIn = () => {
        var provider = new firebase.auth.GithubAuthProvider();
          firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email,photoURL} = result.user;
          setLoggedInUser({name : displayName,email,photoURL})
          }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            console.log(errorCode,errorMessage,email);
          });
       }  


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
       const handleSubmit = () => {
      };
    return (
        <div className='login'>
        <h2>Log In...</h2><hr/>
        <Form>
        <Form.Group controlId="formGroupEmail">
        <Form.Label><FontAwesomeIcon icon={faAt} /> Email address</Form.Label>
       <Form.Control type="email" placeholder="Enter email" onBlur={handleBlur} required/>
       </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label><FontAwesomeIcon icon={faKey} /> Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onBlur={handleBlur} required/>
          </Form.Group>
          <Button variant="success" type="submit" onClick={handleSubmit}>
          Log In
        </Button>
        </Form>
                <p>Don't have account<Link to='/creat'> <Button variant="info" type="submit">
                Create New Account...
                </Button></Link></p>
            <hr/>
          <Button variant='outline-danger' onClick={handleGoogleSignIn}>
          <FontAwesomeIcon icon={faGoogle} />  Google Sign In</Button><br/>
           <Button  variant="outline-primary" onClick={handleFbSignIn}>
           <FontAwesomeIcon icon={faFacebook} /> Facebook Sign In </Button><br/>
            <Button  variant="outline-dark" onClick={handleGithubSignIn}>
            <FontAwesomeIcon icon={faGithub} /> Github Sign In</Button>   
            </div> 
    );
};

export default Login;