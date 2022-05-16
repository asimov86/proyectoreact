import React from "react";
import Spinner from 'react-bootstrap/Spinner'
import "bootstrap/dist/css/bootstrap.min.css";
import "./Loading.css";
import { Container } from "react-bootstrap";
function Loading() {
  
  return (
    <>
    <Container className="loading-container text-center align-items-center content">
      <div className="loading-center">
        <Spinner animation="border" role="status" variant="secondary" >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    </Container>
      
    </>

  );
}

export default Loading;