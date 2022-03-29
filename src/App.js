import React from "react";
import NavBar from "./components/NavBar";//Traigo el componente y abajo lo muestro
import ItemListContainer from "./components/ItemListContainer";

export default function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer nombre={"Kenny"} apellido={"Velandia"} sexo="M"/>
      {/* <ItemListContainer nombre={"María"} apellido={"Gómez"} sexo="F"/>  Si quito el comentario, guardo y comento el de arriba, en ItemListContainer hay una lógica que realiza un saludo distinto para F o M*/}
    </>

  );
}

