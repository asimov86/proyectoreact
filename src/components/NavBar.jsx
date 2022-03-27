import React from "react";
import {Navbar,Nav,Container,NavDropdown} from 'react-bootstrap'; //Importo lo necesario del menu de bootstrap y abajo agrego el menu

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
                    <Nav.Link href="#link">Menú</Nav.Link>
                    <Nav.Link href="#link">Contacto</Nav.Link>
                    <NavDropdown title="Entrega" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Rappi</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Pedidos Ya</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Bueguenator</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Cliente</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}