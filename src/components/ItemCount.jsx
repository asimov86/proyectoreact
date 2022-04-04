import React, {useState} from "react";
import { Card, Button, ButtonGroup } from "react-bootstrap";
import s from "./ItemCount.module.css";


export default function ItemCount({onAdd, from, stock}){

    const [quantity, setQuantity] = useState(from);
    
    function increase(){
        if(quantity>=stock){
            alert("No hay más stock disponible.") 
        }else{
            setQuantity(quantity + 1);
        }
        
    }

    function decrease(){
        if(quantity>from){
            setQuantity(quantity - 1);    
        }
        
    }

 

    return(
       <>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <ButtonGroup aria-label="Basic example">
                    <Button className={s.buttons} variant="outline-danger" onClick={decrease}>-</Button>
                    <p className={s.quantity}>{quantity}</p>
                    <Button className={s.buttons} variant="outline-primary" onClick={increase}>+</Button>
                </ButtonGroup>
                <br/>
                <br/>
                <Button onClick={ () => onAdd(quantity)} variant="outline-secondary" >Agregar al carro</Button>
            </Card.Body>
            </Card>
       </>
    )
}