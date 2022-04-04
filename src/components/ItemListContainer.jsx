import React from "react";
import ItemCount from "./ItemCount";

export default function ItemListContainer(){

    let from = 0;
    let stock = 10;
   

    function onAdd(quantity){
        if(quantity===0){
            alert("Debes agregar un producto a tu carro.");
        }else{
            alert( "Has agregado " + quantity + " producto a tu carro.");
        }
    }
    

    return(
       <>
            <br/>
            <div>
                <ItemCount onAdd={onAdd} from={from} stock={stock}/>
            </div>
            
            
       </>
    )
}