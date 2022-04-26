import React, {useContext} from 'react';
import { CartContext } from "../../Context/CartContext";
import { Link } from 'react-router-dom';
import { Container, Stack, Table } from 'react-bootstrap';
import { GoTrashcan } from "react-icons/go";
import { BiSad } from "react-icons/bi";

export default function Cart() {

    let {cart, dropCart, removeProduct, totalAmount} = useContext(CartContext);

    console.log("cart ItemDetail");
    console.log(cart);

  return (
      <Container>
        <div className='vh-100 row m-0 text-center align-items-center'>
            {
                (cart.length === 0)
                &&
                    <div>
                        <p>No hay items en tu carrito...</p>
                        <p><BiSad size="60px"/></p>
                        <Link to='/'>
                            <button className='btn btn-outline-primary btn-block'>Continuar comprando</button>
                        </Link>
                    </div>               
            }
            {
                (cart.length >= 1)
            
            &&
                <Table striped bordered hover responsive="sm" >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio por producto en pesos ($)</th>
                            <th>SubTotal en pesos ($)</th>
                            <th>Eliminar</th>
                        </tr>      
                    </thead>
                    
                    <tbody>
                    { cart.map(prod =>
                        <tr  key={prod.id}>
                        <td>{prod.id}</td>
                        <td>{prod.name}</td>
                        <td>{prod.quantity}</td>
                        <td>{prod.price}</td>
                        <td>{prod.price * prod.quantity} </td>
                        <td><GoTrashcan onClick={() => removeProduct(prod.id)}/></td>
                        </tr>
                    )}
                        <tr>
                        <td colSpan={4}>Total a pagar:</td>
                        <td >{totalAmount()}</td>
                        <td ></td>
                        </tr>
                    </tbody>
                </Table>
            }
            
            {
                (cart.length >= 1)
            
            &&
                <Stack direction='horizontal' gap={3} className='col-md-5 mx-auto'>                
                    <button className="btn btn-danger cartButton" onClick={dropCart}> Vaciar carrito</button>
                    <button className="btn btn-primary cartButton" > Terminar mi compra </button>
                </Stack>
            }
        </div>
    </Container>
    
  )
  
}
