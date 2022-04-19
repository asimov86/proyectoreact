import React from "react";
import ItemCount from "../components/ItemCount/ItemCount";
import { Card} from "react-bootstrap";

const ItemDetail = ({product}) => {
    
    return (
        <>
            <Card key={product.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                <p>Descripción: {product.description} </p>
                <p>Precio: {product.price} $</p>
                <p>Tipo: {product.type}</p>
                </Card.Text>
                <ItemCount stock={product.stock} />         
                <br/>    
            </Card.Body>
            </Card>

        </>
    );
};

export default ItemDetail;