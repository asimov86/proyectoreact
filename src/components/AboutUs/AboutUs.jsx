import React from "react";
import {Container, Card} from "react-bootstrap";
import "../AboutUs/AboutUs.css";
function AboutUs() {
  
  return (
    <>
      <Container className="AboutUs-container">
      <row className="AboutUs-center">
        <Card className="text-justify">
            <Card.Header>Burguenator</Card.Header>
            <Card.Body>
                <Card.Title>¿Cómo surgió la idea?</Card.Title>
                <Card.Text>
                <br/>
                <p>Somos una empresa que se preocupa por ofrecer los mejores productos, recién hechos!. Nuestras hamburguesas se ensamblan con los mejores ingredientes, crujientes, frescos y deliciosos. A su vez nos preocupamos por la presentación, creemos y mantenemos que una hamburguesa no tiene porqué ser algo complicado. Con nosotros comeras las hamburguesas más sencillas pero con la mejor calidad, sabor y frescura. </p>
                <br/>
                <h5>Nuestro Local</h5>
                <p>Ambientamos nuestro local con un estilo tipo décadas de los 80 y 90, que te harán recordar lo que consideramos la mejor película de ciencia ficción, te invitamos a visitar Burguenator un lugar en el que disfrutarás de buena comida y el mejor ambiente.
                </p>
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted"></Card.Footer>
        </Card>
        
      </row> 
      </Container>
    </>

  );
}

export default AboutUs;