
import React, { Component } from 'react';
import logo from '../logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar,Nav} from 'react-bootstrap';
class NavbarMenu extends Component{
    render(){

        return(
                <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home"><img src={logo} className="logo-adjust" alt="logo" ></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <Nav.Link href="#link">Companies Data</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
        );
    }
}

export default NavbarMenu;