import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../../organims/header/navbar/Header'

import './SesionPageNavbar.css'

export const LoginPageNavbar = () => {
  return (
    <>
    <Header/>
      <div className='container'>
          <form action="" className='background'>
            
              <h2  className='title_Form' ><span>¡Bienvenido al</span> <span>Recorrido de la fé!</span> </h2>
            
            <div className="form_box">
            <input id="email" name="email" type="text" required placeholder=' ' className='form_input'/>
              <label for="email" className='form_label'>
                Usuario 
              </label>
            </div>
              
            <div className="form_box">
              <input id="password" name="password" type="password" required  
              placeholder=' '
              className='form_input'/>
              <label for="password" className='form_label'>
                Contraseña 
              </label>
              </div>
             <Link className='olvide'>Olvidé mi contraseña</Link>
             
              <Link className='ingresar-form' to='/homeview'> <span  className='ingresar_span'>INGRESAR</span> </Link>
          </form>
      </div>
    </>
    
  )
}
