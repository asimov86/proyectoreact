import React from "react";
import Spinner from 'react-bootstrap/Spinner'
import "bootstrap/dist/css/bootstrap.min.css";
import "./Loading.module.css";//Luego le agrego algo de estilo
import { Container } from "react-bootstrap";
function Loading() {
  
  return (
    <>
    <Container className="m-0 text-center align-items-center ">
      <row>
        <Spinner animation="border" role="status" variant="secondary" >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </row>
      
    </Container>
      
    </>

  );
}

export default Loading;