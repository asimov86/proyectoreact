import React from "react";
import NavBar from "./components/NavBar";//Traigo el componente y abajo lo muestro
import Footer from "./components/Footer";
import ItemListContainer from "./Items/ItemListContainer";
import ItemDetailContainer from "./Items/ItemDetailContainer";
//import TestContainer from "./components/test/TestContainer";
//import ItemDetailContainer from "./Items/ItemDetailContainer";
//Ruta
//import { BrowserRouter, Routes, Route } from "react-router-dom";



//import TestContainer from "./components/test/TestContainer";

export default function App() {

  
  return (
    <>
    {/*<BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route exact path="/category/:type" element={<TestContainer />} />
        <Route exact path="/item/:type" element={<ItemListContainer/>}/>
      </Routes>
     */}
    
    <NavBar/>
    <ItemDetailContainer/>
    <ItemListContainer/>
    <Footer/>
    
    
    {/*</BrowserRouter>*/}



      {/*
      <NavBar/>
      <ItemListContainer/>
      <Footer/>
      <TestContainer/>
      {/*
       <ItemListContainer nombre={"María"} apellido={"Gómez"} sexo="F"/>  Si quito el comentario, guardo y comento el de arriba, en ItemListContainer hay una lógica que realiza un saludo distinto para F o M*/}
    </>

  );
}

