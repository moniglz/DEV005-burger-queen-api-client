import { useState } from 'react';

export const Login = () => {
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const handleClick=(e)=>{
        setEmail(e.target.form[0].value);
        setPassword(e.target.form[1].value)
    }

    console.log(email);
    console.log(password);

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
              //onChange={e=>setEmail(e.target.value)}
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
          <button type='submit' className='login-btn' onClick={handleClick}>Iniciar sesión</button>

        </form>
      </div>
    </section>
    );
}
