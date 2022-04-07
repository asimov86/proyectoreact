import React from "react";
import NavBar from "./components/NavBar";//Traigo el componente y abajo lo muestro
import Footer from "./components/Footer";
import ItemListContainer from "./Items/ItemListContainer";
//import TestContainer from "./components/test/TestContainer";

export default function App() {

  
  return (
    <>
      <NavBar/>
      <ItemListContainer/>
      <Footer/>
      {/*<TestContainer/>
      {/*
       <ItemListContainer nombre={"María"} apellido={"Gómez"} sexo="F"/>  Si quito el comentario, guardo y comento el de arriba, en ItemListContainer hay una lógica que realiza un saludo distinto para F o M*/}
    </>

  );
}

