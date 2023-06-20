//import React, { useState } from 'react';
import './login.css'

export const Login=()=>{

    return (
      <section>
        <div className='logo'>
          <img src='./src/assets/img/image_1.png'></img>
        </div>

        <div className="form-login">
        <form id='cont-login'>
          <input
            type="email"
            className="email"
            placeholder="Email"
          />

          <input
            type="password"
            className="password"
            placeholder="Escribe tu contraseña"
          />

          <button>Iniciar sesión</button>
        </form>
      </div>
    </section>
    );
}
