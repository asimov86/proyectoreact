import React from "react";
import {Container,Row, Col} from 'react-bootstrap';

export default function ItemListContainer({nombre, apellido, sexo}){

    let nombreCompleto = nombre + " " + apellido;
    let saludoF = "¡Bienvenida";
    let saludo = "¡Bienvenido";
    if(sexo==="F"){saludo=saludoF}
    return(
       <>
            <Container>
                <Row>
                    <Col></Col>
                    <Col xs={6}></Col>
                    <Col><p>{saludo} {nombreCompleto}!</p></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col xs={5}></Col>
                    <Col></Col>
                </Row>
            </Container>
            
       </>
    )
}