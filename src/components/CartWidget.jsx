import React from "react";
import Carrito from "./shopping-cart.png";
//import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';  Intenté con mui y no pude, así que lo hice a la antigüita jaja
export default function CartWidget(){
    return(
       <>
            <img src={Carrito} alt="carrito"></img>
       </>
    )
}