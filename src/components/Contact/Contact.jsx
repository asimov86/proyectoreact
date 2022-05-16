import React, {useState} from 'react';
import { Container, Stack, Row, Figure, Col } from 'react-bootstrap';
import { serverTimestamp } from 'firebase/firestore';
import { useForm } from 'react-hook-form';
import { addDoc, getFirestore, collection} from 'firebase/firestore';
import "../Contact/Contact.css";
function Contact() {
  
  const {register, formState: { errors }, handleSubmit} = useForm();

  const [name, setName] = useState('');

  const [surname, setSurname] = useState('');

  const [email, setEmail] = useState('');

  const [text, setText] = useState('');

  let formContact = {};

    const onSubmit = (data, e) => {
        e.preventDefault();
        formContact.client = {name: name, surname: surname, email: email, text: text};
        formContact.date = serverTimestamp();
    
        const db = getFirestore()
        const queryCollection = collection(db, 'formContact')
        addDoc(queryCollection, formContact)
        .then(({id}) => 
            alert('Se ha guardado su comentario con el id: '+ id));


        } 
    

  return (
    <>
      <Container className='mt-5'>
        <Row>
          <Col xs={6} md={4} className='text-center' >
            <Figure className='p-4  bg-light'>
              <Figure.Image
                width={342}
                height={360}
                alt="342x360"
                src="https://cdn.sincroguia.tv/uploads/programs/t/e/r/terminator-2-el-juicio-final-poster-7190_SPA-80_V.jpg"
              />
              <Figure.Caption className='mt-3'>
                <h4>Volverás!</h4>
              </Figure.Caption>
            </Figure>
          </Col>
          <Col xs={12} md={8} className='p-1'>
          <div className="bg-light" style={{ display: 'block', 
                    width: 'auto',
                    height: 'auto', 
                    padding: 30 }}>
                  <h5>Tu opinión vale mucho para nosotros.</h5>
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
                          <label>Descripción</label>
                          <textarea
                              type='text'
                              name='text'
                              className='form-control my-2'
                              placeholder='Ingresa tu comentario'
                              {...register('text', {
                                  required: { value: true, message: 'Tu opinión es requeria' },
                                  minLength: { value: 20, message: 'Tu opinión debe ser más larga' },
                                  maxLength: {value: 180, message: 'Has superado el límite de carácteres.'}
                              })}
                              value={text}
                              onChange={ (e)=>{
                                  setText(e.currentTarget.value);
                              }}
                          />
                          {errors.text &&
                              <div className="alert alert-danger mt-1 p-1" >
                                  {errors.text && errors.text.message}
                              </div>
                          }
                          <div className='text-center mt-4'>                
                              <button className="btn btn-primary" type='submit'>Enviar opinión</button>
                          </div>
                  </form>    
            </div>
          </Col>
            
        </Row>
        <Row  >
          <Col className="bg-light m-2 p-4 mb-0">
            <h4>Dirección:</h4>
            <p>Costa Rica 5544. Capital Federal - Buenos Aires - Argentina.</p>
            <p>Tel: (54-11) xxxxyyyy</p>
            <p>E-mail: burguenator@gmail.com</p>            
          </Col> 
        </Row>

      </Container>
    </>

  )
}

export default Contact;