import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./Items/ItemListContainer";
import ItemDetailContainer from "./Items/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./Context/CartContext";
import Cart from "./components/Cart/Cart";
import Contact from "./components/Contact/Contact";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {

  
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route exact path="/" element={<ItemListContainer />} />
              <Route exact path="/contact/" element={<Contact />} />
              <Route exact path="/us/" element={<AboutUs />} />
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

