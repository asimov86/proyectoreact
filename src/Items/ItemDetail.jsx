import React, { useState } from "react";
import ItemCount from "../components/ItemCount/ItemCount";
import { Card, Button} from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemDetail = ({product}) => {
    
    const[number, setNumber] = useState(0);

    const onAdd = (quantity) =>{
        if(quantity===0){
            alert("Debes agregar un producto a tu carro.");
        }else{
            alert( "Has agregado " + quantity + " producto a tu carro.");
            setNumber(quantity);
        }
    }
    console.log(number);
    return (
        <>
            <Card key={product.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                <p>Descripción: {product.description} </p>
                <p>Precio: {product.price} $</p>
                <p>Producto tipo: {product.category}</p>
                {
                    number >= 1 ? (<p>Cantidad: {number} de {product.stock} </p>) : (<p>Cantidad: 1 de {product.stock} </p>)
                }
                </Card.Text>
                {
                    number >= 1 ? (<Button variant="outline-primary"><Link to={`/cart/${number}`} style={{ textDecoration: 'none'} }>Comprar</Link></Button>) : (<ItemCount stock={product.stock} initial={1} onAdd={onAdd} />)
                }
                {/* Cómo pasarle a Cart.jsx el id, price, number, tipo de producto? */}      
                
                <br/> 
            </Card.Body>
            </Card>

        </>
    );
};

export default ItemDetail;