import React from "react";
import Spinner from 'react-bootstrap/Spinner'
import "bootstrap/dist/css/bootstrap.min.css";
import "./Loading.module.css";//Luego le agrego algo de estilo
function Loading() {
  
  return (
    <>
      <Spinner animation="border" role="status" variant="secondary" className="mt-5">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </>

  );
}

export default Loading;