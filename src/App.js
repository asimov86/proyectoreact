import React from "react";
import NavBar from "./components/NavBar";//Traigo el componente y abajo lo muestro
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./Items/ItemListContainer";
import ItemDetailContainer from "./Items/ItemDetailContainer";
//Ruta
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./Context/CartContext";
import Cart from "./components/Cart/Cart";

function App() {

  
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route exact path="/" element={<ItemListContainer />} />
              <Route exact path="/item/:id" element={<ItemDetailContainer />} />
              <Route exact path="/category/:categoryId" element={<ItemListContainer />} />
              <Route exact path="/cart/" element={<Cart />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
      </CartContextProvider>
    </>

  );
};
export default App;

