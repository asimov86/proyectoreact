import React from "react";
import { Card} from "react-bootstrap";
import ItemCount from "../components/ItemCount/ItemCount";

export default function Item({id, name, type, price, stock, image}){

    //let from = 1;
    //let stock = 12;

    return(
       <>
            <Card key={id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                <p>Precio: {price} $</p>
                <p>Tipo: {type}</p>
                </Card.Text>
                <ItemCount stock={stock}/>
                <br/>
                <br/>
                
            </Card.Body>
            </Card>
       </>
    )
}