import React, {useEffect, useState} from "react";
import { getItems } from "../utils/products";
import ItemList from "./ItemList";
import { Container, Row} from "react-bootstrap";
import { useParams } from 'react-router-dom';
import Loading from "../utils/Loading";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../App.css";
export default function ItemListContainer(){

  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();
  //console.log('Hamburguesa o bebida: ', categoryId);
  useEffect(() => {
      setLoading(true);
      getItems(categoryId)
      .then(result => setItems(result))
      .catch(error => console.log(error))
      .finally(()=>{
        setLoading(false);
      });
  }, [categoryId]);
//console.log(items);
return (
  <>
    <Container>
      <Row md={3} className="justify-content-md-center">
        {loading ? (<Loading/> ) : (<ItemList items={items}/>)}
      </Row>
    </Container>
  </>
    )
}