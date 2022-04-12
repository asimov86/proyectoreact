import React, {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import { getItem } from "../utils/products";

const ItemDetailContainer = () =>{

  const [item, setItem] = useState({});

  useEffect(() => {
    getItem().then((res) => setItem(res));
}, []);
console.log(item);
return (
  <>
    <ItemDetail product={item} />
  </>
    );
};

export default ItemDetailContainer;