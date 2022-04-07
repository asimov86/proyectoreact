import React, {useEffect, useState} from "react";
import products from "../utils/products";
import customFetch from "../utils/CustomFetch";
import ItemList from "./ItemList";
import { Container, Row} from "react-bootstrap";
//import ItemCount from "../components/ItemCount/ItemCount";

export default function ItemListContainer(){

  const [items, setItems] = useState([]);

  useEffect(() => {
      customFetch(2000, products)
      .then(resultado => setItems(resultado))
      .catch(error => console.log(error));
  }, [items])

return (
  <>
    <Container>
      <Row md={3}>
        <ItemList products={items}/>
      </Row>
    </Container>
  </>
    )
}