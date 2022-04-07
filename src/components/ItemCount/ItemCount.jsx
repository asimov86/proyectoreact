import React, {useState} from "react";
import {Button, ButtonGroup } from "react-bootstrap";
import s from "./ItemCount.module.css";


export default function ItemCount({stock}){

    const [quantity, setQuantity] = useState(0);
    
    function increase(){
        if(quantity>=stock){
            alert("No hay más stock disponible.") 
        }else{
            setQuantity(quantity + 1);
        }
        
    }

    function decrease(){
        if(quantity>0){
            setQuantity(quantity - 1);    
        }
        
    }

    function onAdd(){
        if(quantity===0){
            alert("Debes agregar un producto a tu carro.");
        }else{
            alert( "Has agregado " + quantity + " producto a tu carro.");
        }
    }

    return(
       <>
            <div>
                <ButtonGroup aria-label="Basic example">
                    <Button className={s.buttons} variant="outline-danger" onClick={decrease}>-</Button>
                        <p className={s.quantity}>{quantity}</p>
                    <Button className={s.buttons} variant="outline-primary" onClick={increase}>+</Button>
                </ButtonGroup>
                <br/>
                <br/>
                <Button onClick={onAdd} variant="outline-secondary" >Agregar al carro</Button>
            </div>
         
       </>
    )
}