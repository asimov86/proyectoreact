import React, {useContext, useState} from 'react';
import { CartContext } from "../../Context/CartContext";
import { Link } from 'react-router-dom';
import { Container, Stack, Table } from 'react-bootstrap';
import { GoTrashcan } from "react-icons/go";
import { BiSad, BiHappyAlt } from "react-icons/bi";
import { serverTimestamp } from 'firebase/firestore';
import { useForm } from 'react-hook-form';
import { addDoc, getFirestore, collection, doc, updateDoc } from 'firebase/firestore';
import "./Cart.css";

export default function Cart() {

    let {cart, dropCart, removeProduct, totalAmount} = useContext(CartContext);

    const {register, formState: { errors }, handleSubmit} = useForm();

    const [orderFinished, setOrderFinished] = useState(0);

    const [name, setName] = useState('');

    const [surname, setSurname] = useState('');

    const [email, setEmail] = useState('');

    const [phone, setPhone] = useState('');

    let order = {};

    const onSubmit = (data, e) => {
        e.preventDefault();
        order.buyer = {name: name, surname: surname, email: email, phone: phone};
        order.items = cart.map( prod => {
            const id = prod.id
            const nombre = prod.name
            const precio = prod.price * prod.quantity
            return {id, nombre, precio}
          } );
        order.date = serverTimestamp();
        order.total = totalAmount();
    
        const db = getFirestore()
        const queryCollection = collection(db, 'orders')
        addDoc(queryCollection, order)
        .then(({id}) => 
            alert('Se ha generado la orden de compra con ID: '+ id));
        
        cart.map( prod => {
        const queryUpdate = doc(db, 'products', prod.id)
        let newStock = 0
    
        if (prod.stock > 0) {
            newStock = prod.stock - prod.quantity
        } 
        updateDoc(queryUpdate, {
            stock: newStock
        })
        } )
        setOrderFinished(1);
        dropCart();
    }


  return (
      <Container className='cart-container'>
        
            {
                (cart.length === 0 && orderFinished === 0)
                &&
                <div className='cart-center row m-0 text-center align-items-center'>
                    <div>
                        <p>No hay items en tu carrito...</p>
                        <p><BiSad size="60px"/></p>
                        <Link to='/'>
                            <button className='btn btn-outline-primary btn-block'>Continuar comprando</button>
                        </Link>
                    </div>
                </div>              
            }

{
            (cart.length === 0 && orderFinished === 1)
                &&
                <div className='cart-center row m-0 text-center align-items-center'>
                    <div>
                        <p>Excelente compra, que la disfrutes!</p>
                        <p><BiHappyAlt size="60px"/></p>
                        <Link to='/'>
                            <button className='btn btn-outline-primary btn-block'>Continuar comprando</button>
                        </Link>
                    </div>  
                </div>             
            }

            {
                (cart.length >= 1)
            
            &&
            <div className='cart-center row m-0 align-items-center'>
            <div>
                <h5>Su orden es:</h5>
                <Table striped bordered hover responsive="sm" className='mt-5'>
                    <thead>
                        <tr>
                            {/* <th>ID</th> */}
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
                        {/* <td>{prod.id}</td> */}
                        <td>{prod.name}</td>
                        <td>{prod.quantity}</td>
                        <td>{prod.price}</td>
                        <td>{prod.price * prod.quantity} </td>
                        <td><GoTrashcan onClick={() => removeProduct(prod.id)}/></td>
                        </tr>
                    )}
                        <tr>
                        <td colSpan={3}><b>Total a pagar:</b></td>
                        <td ><b>{totalAmount()}</b></td>
                        </tr>
                    </tbody>
                </Table>
                <h5  className='mt-5'>Por favor, ingrese sus datos para continuar con la compra.</h5>
                <form  className='mt-3' onSubmit={handleSubmit(onSubmit)}>
                        <label>Nombre</label>
                        <input
                            type='text'
                            name='name'
                            className='form-control my-2'
                            placeholder='Ingresa tu nombre'
                            {...register('name', {
                                required: { value: true, message: 'El nombre es requerido' },
                                minLength: { value: 2, message: 'El nombre tiene que ser mas largo' },
                                maxLength: 30,
                                pattern: {value: /^[A-Za-z]+$/i, message:'El nombre debe tener sólo letras'} 
        
                            })}
                           value={name}
                            onChange={ (e)=>{
                                setName(e.currentTarget.value); 
                            }}
                        />
                        {errors.name &&
                            <div className="alert alert-danger mt-1 p-1" >
                                {errors.name && errors.name.message}
                            </div>
                        }
                        <label>Apellido</label>
                        <input
                            type='text'
                            name='surname'
                            className='form-control my-2'
                            placeholder='Ingresa tu apellido'
                            {...register('surname', {
                                required: { value: true, message: 'El apellido es requerido' },
                                minLength: { value: 2, message: 'El apellido tiene que ser mas largo' },
                                maxLength: 30,
                                pattern: {value: /^[A-Za-z]+$/i, message:'El apellido debe tener sólo letras'} 
        
                            })}
                            value={surname}
                            onChange={ (e)=>{
                                setSurname(e.currentTarget.value); 
                            }}
                        />
                        {errors.surname &&
                            <div className="alert alert-danger mt-1 p-1" >
                                {errors.surname && errors.surname.message}
                            </div>
                        }
                        <label>Correo electrónico</label>
                        <input
                            type='text'
                            name='email'
                            className='form-control my-2'
                            placeholder='Ingresa tu email'
                            {...register('Email', {
                                required: { value: true, message: 'El email es requerido' },
                                minLength: { value: 2, message: 'El email tiene que ser mas largo' },
                                maxLength: {value: 60, message: 'El email es muy largo.'},
                                pattern: {value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i, message: 'Email'} 
                            })}
                           value={email}
                            onChange={ (e)=>{
                                setEmail(e.currentTarget.value); 
                            }}
                        />
                        {errors.email &&
                            <div className="alert alert-danger mt-1 p-1" >
                                {errors.email && errors.email.message}
                            </div>
                        }
                        <label>Teléfono celular</label>
                        <input
                            type='tel'
                            name='phone'
                            className='form-control my-2'
                            placeholder='Ingresa tu número de teléfono'
                            {...register('phone', {
                                required: { value: true, message: 'El teléfono es requerido' },
                                minLength: { value: 8, message: 'El teléfono tiene que ser mas largo' },
                                maxLength: {value: 14, message: 'El número de teléfono es muy largo.'},
                                pattern: {value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im, message:'Puede ingresar sólo números y el símbolo +' } 

                            })}
                            value={phone}
                            onChange={ (e)=>{
                                setPhone(e.currentTarget.value);
                            }}
                        />
                        {errors.phone &&
                            <div className="alert alert-danger mt-1 p-1" >
                                {errors.phone && errors.phone.message}
                            </div>
                        }
                        <Stack direction='horizontal' gap={3} className='col-md-5 mx-auto mt-4'>                
                            <button className="btn btn-danger cartButton" onClick={()=>{dropCart()}}> Vaciar carrito</button>
                            <button className="btn btn-primary cartButton" type='submit'>Terminar mi compra</button>
                        </Stack>
                </form>    
            </div>
            </div>
            }
        
    </Container>
    
  )
  
}
