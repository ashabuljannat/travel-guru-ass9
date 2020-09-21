import React, { useContext } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap'
import { UserContext } from '../../App';
import logo from '../Image/Logo.png';





const Header = () => {

    const [loggedInUser ,setLoggedInUser] = useContext(UserContext)

    return (
        <div>
           <Container>
         <Navbar bg="light">
            <Navbar.Brand href="/home">
            <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
            />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/home/details">Details</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
                </Nav> <h6>Name : {loggedInUser.name}</h6>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success" className='mr-3'>Search</Button>
                </Form>
            </Navbar.Collapse>
            <img src={loggedInUser.photoURL} alt="" height="45px" width="45px"/>
          </Navbar>
         </Container>
        
        </div>
    );
}; 

export default Header;