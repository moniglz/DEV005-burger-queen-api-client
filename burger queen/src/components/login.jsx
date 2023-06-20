//import React, { useState } from 'react';
import './login.css'

export const Login = () => {

    return (
      <section>
        <div className='logo'>
          <img src='./src/assets/img/image_1.png' alt='logo-burgerqueen'></img>
        </div>

        <div className="form-login">
        <form id='cont-login'>
          <div id='div-email'>
            <label>Email</label>
            <input
              type="email"
              className="email"
              placeholder="Email"
            />
        </div>
        <div id= 'div-password'>
          <label>Contraseña</label>
          <input
            type="password"
            className="password"
            placeholder="Escribe tu contraseña"
          />
        </div>
          <button type='submit' className='login-btn'>Iniciar sesión</button>

        </form>
      </div>
    </section>
    );
}
