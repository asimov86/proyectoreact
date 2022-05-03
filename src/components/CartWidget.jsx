import React, {useContext} from "react";
import {BsCart4} from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import { CartContext} from "../Context/CartContext";

export default function CartWidget(){
    let {cart} = useContext(CartContext);
    function totalProducts(){
        const totalProducts = cart.reduce((prevItem, nextItem) => prevItem + (nextItem.quantity), 0);
        console.log(totalProducts);
        return totalProducts;
      }
    console.log("cartWidget");
    console.log(cart);
    return(
       <>
       <IconContext.Provider value={{ color: "black", className: "global-class-name", size:"2em"}}>
        <div>
            <Link to="/cart/" style={{ color: 'inherit', textDecoration: 'inherit'}}><BsCart4/> {(cart.length>=1) && (totalProducts())}</Link>
        </div>
        </IconContext.Provider>
       </>
    )
}