import React from "react";
import ItemCount from "../components/ItemCount/ItemCount";
import { Card} from "react-bootstrap";

export default function ItemDetail({product}){
    //let from = 1;
    //let stock = 12;

    //Acá coloqué un console.log para ver el "product", y me aparecía undefined. Al ser array y para resolver tuve que colocarlo como product[0]. Y cumplir así con el desafío.
    return(
       <>
            <Card key={product[0].id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product[0].image} />
            <Card.Body>
                <Card.Title>{product[0].name}</Card.Title>
                <Card.Text>
                <br/>
                <p>Description: {product[0].description} </p>
                <br/>
                <p>Precio: {product[0].price} $</p>
                <p>Tipo: {product[0].type}</p>
                </Card.Text>
                <ItemCount stock={product[0].stock}/>
                
                <br/>
                <br/>
                
            </Card.Body>
            </Card>
       </>
    )
}