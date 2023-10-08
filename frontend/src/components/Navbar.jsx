import React from 'react';
import {useState} from 'react'
import { Navbar, Nav, Button, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import './styles/main.css'; // Импорт CSS-файла

const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>  
        <Navbar.Brand> Wev </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link as={Link} to='/home'>Home</Nav.Link>
            <Nav.Link as={Link} to='/users'>Users</Nav.Link>
            <Nav.Link as={Link} to='/about'>About</Nav.Link>
          </Nav>
          <div className="login-signup-container">
            <Button variant="primary" className='me-2' onClick={handleShow}> Log In </Button>
            <Button variant="primary" onClick={handleShow}> Sign Up </Button>
          </div>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}> 
      <Modal.Header closeButton>  </Modal.Header>
      <Modal.Title> Log In</Modal.Title>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
             <Form.Label>Email address</Form.Label>
             <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className='text-muted'> We'll never share your email with anyone else. </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
             <Form.Label>Password</Form.Label>
             <Form.Control type="password" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" className='auto-'>
            Submit
          </Button>
        </Form>
      </Modal.Body>

      </Modal>
    </>
  );
};

export default NavBar;
