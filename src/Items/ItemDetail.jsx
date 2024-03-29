import React, { useState, useContext } from "react";
import ItemCount from "../components/ItemCount/ItemCount";
import { Card, Button, Stack} from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../../src/Context/CartContext";

const ItemDetail = ({product}) => {
let {addProduct} = useContext(CartContext);

    const[number, setNumber] = useState(0);

    const onAdd = (quantity) =>{
        if(quantity===0){
            alert("Debes agregar un producto a tu carro.");
        }else{
            // alert( "Has agregado " + quantity + " producto a tu carro.");
            setNumber(quantity);
            addProduct({...product, quantity: quantity});//Le agrego la cantidad al producto que compré y lo guardo en el carrito.
        }
    }
    return (
        <>
            <Card key={product.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                <p>Descripción: {product.description}</p>
                <p>Precio: {product.price} $</p>
                <p>Producto tipo: {product.category}</p>
                {
                    number >= 1 ? (<p>Cantidad: {number} de {product.stock} </p>) : (<p>Cantidad: 1 de {product.stock} </p>)
                }
                </Card.Text>
                {
                    number >= 1 ? 

                    ( 
                        <div className="text-center align-items-center">
                            <Stack gap={3}>
                                <Link to={`/cart`}>
                                    <Button variant="primary">Ver carro de compras</Button>
                                </Link>
                                <Link to='/'>
                                    <Button variant="outline-secondary">Continuar la compra</Button>
                                </Link>
                            </Stack>
                        </div>
                    )
                    :
                    (<ItemCount stock={product.stock} initial={1} onAdd={onAdd} product={product} /> )
                }  
                
                <br/> 
            </Card.Body>
            </Card>

        </>
    );
};

export default ItemDetail;