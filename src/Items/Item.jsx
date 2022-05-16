import React from "react";
import { Card, Button} from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function Item({item}){

    return(
       <>
            <Card key={item.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                    <p>Precio: $ {item.price}</p>
                    <p>Descripción: {item.description}</p>
                </Card.Text>
                {
                    item.stock > 0 ? (<Button variant="primary"><Link to={`/item/${item.id}`} style={{ textDecoration: 'none', color: 'White' }}>Ver detalle</Link></Button>) : (<b>Este producto no tiene stock. Disculpe las molestias ocasionadas.</b>)
                }
                
            </Card.Body>
            </Card>
       </>
    )
}