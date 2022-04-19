import React from "react";
import {Navbar,Nav,Container,NavDropdown} from 'react-bootstrap'; //Importo lo necesario del menu de bootstrap y abajo agrego el menu
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
export default function NavBar(){
    return(
        <>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Burguenator</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    {/* <Nav.Link component={Link} to={"/"}>Inicio</Nav.Link> */}
                    <Nav.Link>{<Link to="/" style={{ textDecoration: 'none'}}  bg="light">Inicio</Link>}</Nav.Link>
                    <Nav.Link href="#link">Nosotros</Nav.Link>
                    <Nav.Link href="#link">Contacto</Nav.Link>
                    <NavDropdown title="Menú" id="basic-nav-dropdown">
                    <NavDropdown.Item >{<Link to="/category/Hamburguesas" style={{ textDecoration: 'none'}}  >Hamburguesas</Link>}</NavDropdown.Item> {/*paso el link en prop "component", de esta manera no tengo problemas con el estilo*/}
                    <NavDropdown.Item >{<Link to="/category/Bebidas" style={{ textDecoration: 'none'}}  bg="light">Bebidas</Link>}</NavDropdown.Item>
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