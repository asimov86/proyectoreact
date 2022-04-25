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

      function removeProduct(id){
          console.log("removeProductId")
          console.log(id);
        return cart.some( product => product.id === id )//Acá tengo problemas. No elimina producto por id
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
        <CartContext.Provider value={{cart, setCart, dropCart, addProduct, removeProduct}}>{children}</CartContext.Provider>
    )
};
