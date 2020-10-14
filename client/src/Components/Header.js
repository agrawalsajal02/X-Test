import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'; 
const Header = () => {
    return (
      <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect className="px-5">
        <Container fluid>
        <LinkContainer to="/">
        <Navbar.Brand><img src={require("./logo.jpg")} className="ml-5"/></Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
           
           <LinkContainer to="/about" >
           <Nav.Link className="mx-2"><div style={{fontSize:"1.5rem",color:"#FFF5EE"}}>aboutus </div></Nav.Link>
           </LinkContainer>

           <LinkContainer to="/contact">
           <Nav.Link className="mx-2"><div style={{fontSize:"1.5rem",color:"#FFF5EE"}}>Contact Us</div></Nav.Link>
           </LinkContainer>

          <LinkContainer to="/faculties">
            <Nav.Link className="mx-2"><div style={{fontSize:"1.5rem",color:"#FFF5EE"}}>Login</div></Nav.Link>
            </LinkContainer>
           
           
            </Nav>
         </Navbar.Collapse>
         </Container>
      </Navbar>
      </header>
    )
}

export default Header
