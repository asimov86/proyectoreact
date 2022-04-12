import React from "react";
import {Navbar,Nav,Container,NavDropdown} from 'react-bootstrap'; //Importo lo necesario del menu de bootstrap y abajo agrego el menu
import CartWidget from "./CartWidget";
//import { Link } from "react-router-dom";
export default function NavBar(){
    return(
        <>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Burguenator</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Inicio</Nav.Link>
                    <Nav.Link href="#link">Nosotros</Nav.Link>
                    <Nav.Link href="#link">Contacto</Nav.Link>
                    <NavDropdown title="Menú" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">{/*<Link to="/">Hamburguesas</Link>*/}Hamburguesas</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Bebidas</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Cliente</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <CartWidget/>
                </Navbar.Collapse>   
            </Container>
        </Navbar>
        </>    
    )
}