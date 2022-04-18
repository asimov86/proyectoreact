import React, {useEffect, useState} from "react";
import { getItems } from "../utils/products";
import ItemList from "./ItemList";
import { Container, Row} from "react-bootstrap";
//import { Link } from "react-router-dom";
//import ItemCount from "../components/ItemCount/ItemCount";

export default function ItemListContainer(){

  const [items, setItems] = useState([]);

  useEffect(() => {
      getItems()
      .then(result => setItems(result))
      .catch(error => console.log(error));
  }, [])
return (
  <>
    <Container>
      <Row md={3}>
        <ItemList items={items}/>
      </Row>
    </Container>
  </>
    )
}