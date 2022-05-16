import React from "react";
import {Navbar,Nav,Container,NavDropdown} from 'react-bootstrap'; //Importo lo necesario del menu de bootstrap y abajo agrego el menu
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
export default function NavBar(){
    return(
        <>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>Burguenator</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link>{<Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>Inicio</Link>}</Nav.Link>
                    <Nav.Link >{<Link to="/us" style={{ color: 'inherit', textDecoration: 'inherit'}}>Sobre nosotros</Link>}</Nav.Link>
                    <Nav.Link >{<Link to="/contact" style={{ color: 'inherit', textDecoration: 'inherit'}}>Contacto</Link>}</Nav.Link>
                    <NavDropdown title="Menú" id="basic-nav-dropdown">
                    <NavDropdown.Item >{<Link to="/category/Hamburguesas" style={{ color: 'inherit', textDecoration: 'inherit'}}  >Hamburguesas</Link>}</NavDropdown.Item> {/*paso el link en prop "component", de esta manera no tengo problemas con el estilo*/}
                    <NavDropdown.Item >{<Link to="/category/Bebidas" style={{ color: 'inherit', textDecoration: 'inherit'}} >Bebidas</Link>}</NavDropdown.Item>{/*Agrego style={{ color: 'inherit', textDecoration: 'inherit'} para quitar estilo Fuente: https://stackoverflow.com/questions/37669391/how-to-get-rid-of-underline-for-link-component-of-react-router*/}
                    </NavDropdown>
                </Nav>
                <CartWidget/>
                </Navbar.Collapse>   
            </Container>
        </Navbar>
        </>    
    )
}