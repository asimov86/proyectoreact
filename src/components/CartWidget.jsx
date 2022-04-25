import React, {useContext} from "react";
import {BsCart4} from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import { CartContext} from "../Context/CartContext";

export default function CartWidget(){
    let {cart} = useContext(CartContext);
    console.log("cartWidget");
    console.log(cart);
    return(
       <>
       <IconContext.Provider value={{ color: "black", className: "global-class-name", size:"2em"}}>
        <div>
            <BsCart4/> ({cart.length})
            {JSON.stringify(cart)}
        </div>
        </IconContext.Provider>
       </>
    )
}