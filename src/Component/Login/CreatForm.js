import { faAt, faKey, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import'./Login.css';


const CreatForm = () => {

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
        <div>
        <Container className='form'>
        <h2>Create New Account</h2><hr/>
        <Form>
          <Form.Row>
          <Col><Form.Label><FontAwesomeIcon icon={faPen} /> First Name</Form.Label>
            <Form.Control placeholder="First name" required/>
          </Col>
          <Col><Form.Label><FontAwesomeIcon icon={faPen} /> Last Name</Form.Label>
            <Form.Control placeholder="Last name" required/>
          </Col>
            </Form.Row>
          <Form.Group controlId="formGroupEmail">
            <Form.Label><FontAwesomeIcon icon={faAt} /> Email address</Form.Label>
           <Form.Control type="email" placeholder="Enter email" onBlur={handleBlur} required/>
           </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label><FontAwesomeIcon icon={faKey} /> Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onBlur={handleBlur} required/>
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
          <Form.Label><FontAwesomeIcon icon={faKey} /> Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onBlur={handleBlur} required/>
        </Form.Group>
          <Button variant="info" type="submit" onClick={handleSubmit}>
          Create New Account
        </Button><Link to='/login'> <Button variant="success" type="submit">
        Log In...
        </Button></Link>
        </Form>
        </Container>
        </div>
    );
};

export default CreatForm;