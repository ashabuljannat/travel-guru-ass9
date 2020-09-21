
import React from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Details.css'




const Details = () => {

 
    
      return (
       
        <div className='detail'>
          <Container>
             <Form>
                <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Origin</Form.Label>
                    <Form.Control type="text" placeholder="From>>" />
                </Form.Group>
            
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Destination</Form.Label>
                    <Form.Control type="text" placeholder=">>To" />
                </Form.Group>
                </Form.Row>
            
                <Form.Group controlId="formGridAddress1">
                <Form.Label>Your Address</Form.Label>
                <Form.Control placeholder="Address" />
                </Form.Group>
            
                <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Start Date</Form.Label>
                    <input type="date" name="" id=""/>
                </Form.Group>
            
                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>End Date</Form.Label>
                    <input type="date" name="" id=""/>
                </Form.Group>
                </Form.Row>

                <Link to='/booking'> <Button variant="primary" type="submit">
                Submit Now...
                </Button></Link>
             
            </Form>
          </Container> 
        </div>

          
      );
};

export default Details;