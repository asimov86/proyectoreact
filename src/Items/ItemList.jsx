import React from "react";
import Item from "./Item";
import { Col } from "react-bootstrap";
export default function ItemList({items}){
    return(
            items.map(p => (
                <Col sm key={p.id} className="g-5"> {/*Acá agregué "key={p.id} porque me salía un error" Al hacer click me llevó al siguiente enlace. https://reactjs.org/docs/lists-and-keys.html#keys. No sé si fué correcto agregarlo acá, pero al hacerlo se fué el error por consola.*/}
                    {/**Agregp acá Col para que me coloque cada producto en una columna */}
                    <Item 
                        key={p.id} 
                        item={p} />
                </Col> 
            ))
    )
}