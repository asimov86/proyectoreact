import React from "react";
//import Carrito from "./shopping-cart.png"; Eliminé el carrito del archivo .png y utilicé https://github.com/react-icons/react-icons. Muy interesante...
import {BsCart4} from "react-icons/bs";
import { IconContext } from "react-icons/lib";
//import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';  Intenté con mui y no pude, así que lo hice a la antigüita jaja
export default function CartWidget(){
    return(
       <>
        <IconContext.Provider value={{ color: "black", className: "global-class-name", size:"2em"}}>
        <div>
            <BsCart4/>
        </div>
        </IconContext.Provider>
       </>
    )
}