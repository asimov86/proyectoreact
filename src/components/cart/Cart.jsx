import React, {useState} from "react";
import { useParams } from "react-router-dom";

const Cart = () => {

    {/* Cómo pasarle a Cart.jsx el id, price, number, tipo de producto? */}  
    {/* Acá estuve jugando para ver cómo pasarle esos datos, pero no pude. Logré pasar por el link la cantidad comprada del producto, puedo pasar algo más por este? O hay otra manera?*/}
    {/* Conseguí esta info: https://es.stackoverflow.com/questions/510489/react-router-pasar-propiedades-de-un-componente-por-medio-del-componente-link*/}    
    const {quantity} = useParams();
    const[purchase, setPurchase] = useState(quantity);

    function savePurchase(){
        setPurchase(quantity);
    }
    
  
    console.log(typeof(quantity)); 
    console.log(quantity);
    console.log(purchase);
  return(
    <>

    </>
  );
};

export default Cart;
