import React, {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import { getItem } from "../utils/products";
import { useParams } from "react-router-dom";
import { Row, Stack } from "react-bootstrap";
import Loading from "../utils/Loading";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../App.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const {id} = useParams();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getItem(id)
      .then((res) => {
        setProduct(res);

      })
      .catch((error) => {
      console.log(error);
      })
      .finally(()=>{
        setLoading(false);
      });
  }, [id]);

  return(
    <>
      <Stack gap={5}>
        <Row md={3} className="justify-content-md-center ">
        </Row>
        <Row md={3} className="justify-content-md-center ">
        {loading ? (<Loading/>) : (<ItemDetail product={product} />)}
        </Row>
        <Row md={3} className="justify-content-md-center ">
        </Row>
      </Stack>
      
           
    </>
  );
};

export default ItemDetailContainer;
