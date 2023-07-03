import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    const inputEmail = e.target.form[0].value;
    const inputPassword = e.target.form[1].value;

    if (!inputEmail || !inputPassword) {
      setError("Por favor, ingresa email y contraseña");
      return;
    }

    if (!isValidEmail(inputEmail)) {
      setError("Correo o contraseña inválido");
      return;
    }

    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email, password}),
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("¡Inicio de sesión correcto!");
          return response.json();
        } else if (response.status >= 400) {
          throw new Error("Email o contraseña incorrectos");
        } else {
          throw new Error("¡Uy! Error inesperado");
        }
      })
      .then((data) => {
        console.log(data.token);
        localStorage.setItem('token', data.token);

        if (data.user.role === "admin") {
          navigate("/admin");
        } else if (data.user.role === "waiter") {
          navigate("/waiter");
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <section className="section-division">
      <div className="logo">
        <img src="./src/assets/img/image_1.png" alt="logo-burgerqueen"></img>
      </div>

      <div className="form-login">
        <form id="cont-login">
          <div id="div-email">
            <label>Email</label>
            <input
              type="email"
              className="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div id="div-password">
            <label>Contraseña</label>
            <input
              type="password"
              className="password"
              placeholder="Escribe tu contraseña"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div id="error">
            {error && <p className="error-msg">{error}</p>}
          </div>
          <button type="submit" className="login-btn" onClick={handleClick}>
            Iniciar sesión
          </button>
        </form>
      </div>
    </section>
  );
};