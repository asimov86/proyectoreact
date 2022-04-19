import React from "react";
import NavBar from "./components/NavBar";//Traigo el componente y abajo lo muestro
import Footer from "./components/Footer";
import ItemListContainer from "./Items/ItemListContainer";
import ItemDetailContainer from "./Items/ItemDetailContainer";
//Ruta
import { BrowserRouter, Routes, Route } from "react-router-dom";


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
    
     {</BrowserRouter>*/}
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        <Route exact path="/category/:categoryId" element={<ItemListContainer />} />
      </Routes>
      <Footer/>
    </BrowserRouter>

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

