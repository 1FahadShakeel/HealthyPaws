import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

function Navbar() {
  return (
    <div>
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Butternet Box</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#howitworks">How it Works</Nav.Link>
            <Nav.Link href="#ourproducts">Our Products</Nav.Link>
            <Nav.Link href="#makingourmeals">Making Our Meals</Nav.Link>
            <Nav.Link href="#help">Help</Nav.Link>
            <Nav.Link href="#login">Login</Nav.Link>
            <Nav.Link href="#buildyourbox">Build Your Box</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbar