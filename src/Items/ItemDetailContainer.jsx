import React, {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import { getItem } from "../utils/products";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    getItem().then((res) => {
      setProduct(res);
    });
  }, []);
  console.log(product);
  return(
    <>
      <ItemDetail product={product} />
           
    </>
  );
};

export default ItemDetailContainer;
