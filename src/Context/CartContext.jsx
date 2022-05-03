import React, {useState, createContext} from 'react';

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
    /* const [cart, setCart]=useState([
        {id:1, name:"pepsi"},
        {id:2, name:"Hamburguesa simple"},
      ]); */
    
      const [cart, setCart]=useState([]);
      console.log("cart");
      console.log(cart);

      function dropCart(){
        setCart([]);
      }

      const [toPay, setToPay] = useState();

      function totalAmount(){
        setToPay(
          cart.reduce((prevItem, nextItem) => prevItem + (nextItem.price * nextItem.quantity), 0)
        );
        return toPay
      }


      function removeProduct(id){
          console.log("removeProductId")
          console.log(id);
          setCart(cart.filter((product) => product.id !== id));
      }
    
      function addProduct(product){
        if(isInCart(product.id)){
            const newCart = [ ...cart ]
            const duplicate = cart.find((item) => item.id === product.id)
            const { quantity } = duplicate
            duplicate.quantity = product.quantity + quantity
            setCart(newCart)

        } else {

            setCart ( [...cart, product ])
        }
      };

      function isInCart(id){
        return cart.some( producto => producto.id === id )
    }
    return (
        <CartContext.Provider value={{cart, setCart, dropCart, addProduct, removeProduct, totalAmount}}>{children}</CartContext.Provider>
    )
};
