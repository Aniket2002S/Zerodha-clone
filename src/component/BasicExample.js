import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css'; // Ensure you import your CSS file
import { Link } from 'react-router-dom';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar-custom"> {/* Apply custom navbar class */}
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://zerodha.com/static/images/logo.svg"
            alt=""
            className="navbar-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> 
            <Link to="/signup" className="nav-link-custom">Signup</Link>
            <Link to="/about" className="nav-link-custom">About</Link>
            <Link to="/products" className="nav-link-custom">Products</Link>
            <Link to="/pricing" className="nav-link-custom">Pricing</Link>
            <Link to="/support" className="nav-link-custom">Support</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
