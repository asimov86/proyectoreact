import React, {useEffect, useState} from "react";
import ItemList from "./ItemList";
import { Container, Row} from "react-bootstrap";
import { useParams } from 'react-router-dom';
import Loading from "../utils/Loading";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../App.css";
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore';
import "./ItemListContainer.css";

export default function ItemListContainer(){

  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();


  useEffect(() => {
    const db = getFirestore()
    const queryCollection =  collection(db, 'products')
    const filterQuery = categoryId ? query(queryCollection, where('category', '==', categoryId)) : queryCollection
    getDocs(filterQuery)
    .then(response => setItems(response.docs.map( item => ({ id: item.id, ...item.data() }) )))
    .catch(error => console.log(error))
    .finally(() => setLoading(false))
  
  },[categoryId]) 

return (
  <>
    <Container className="ItemListContainer-container">
      <div>
        <Row md={3} className="justify-content-md-center">
          {loading ? (<Loading/> ) : (<ItemList items={items}/>)}
        </Row>
      </div>  
    </Container>
  </>
    )
}