import React, {useState} from "react";
import {Button, ButtonGroup, Stack} from "react-bootstrap";
import s from "./ItemCount.module.css";
import { Link } from "react-router-dom";


export default function ItemCount({stock, initial, onAdd}){

    const [quantity, setQuantity] = useState(initial);
    
    function increase(){
        if(quantity>=stock){
            //alert("No hay más stock disponible.") 
            //Agregué la deshabilitación del botón que incrementa el contador de productos seleccionados.
        }else{
            setQuantity(quantity + 1);
        }
        
    }

    function decrease(){
        if(quantity>0){
            setQuantity(quantity - 1);    
        }
        
    }
    console.log(quantity);
    return(
       <>
            <div>
                <ButtonGroup aria-label="Basic example">
                    <Button className={s.buttons} variant="outline-danger"  onClick={decrease}>-</Button>
                        <p className={s.quantity}>{quantity}</p>
                    <Button className={s.buttons} variant="outline-primary" disabled={quantity===stock} onClick={increase}>+</Button>
                </ButtonGroup>
                <br/>
                <br/>
                <Stack gap={3}>



                    <Button variant="primary" onClick={() => onAdd(quantity)}>Agregar al carro</Button>
                    <Button variant="outline-secondary"><Link to="/" style={{ textDecoration: 'none', color: 'Black' }}>Volver</Link></Button>
                </Stack>
            </div>
         
       </>
    )
}