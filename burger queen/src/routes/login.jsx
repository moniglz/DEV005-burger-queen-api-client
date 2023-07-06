import "./Login.css";
import { useState, useEffect } from "react";
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
      setError("Ingresa email y contraseña");
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
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("¡Inicio de sesión exitoso!");
          return response.json();
        } else if (response.status >= 400) {
          throw new Error("Email o contraseña incorrectos");
        } else {
          throw new Error("¡Uy! Error inesperado");
        }
      })
      .then((data) => {
        localStorage.setItem("token", data.accessToken);
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

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const userRole = localStorage.getItem("userRole");
      if (userRole === "admin") {
        navigate("/admin");
      } else if (userRole === "waiter") {
        navigate("/waiter");
      }
    }
  }, [navigate]);

  return (
    <section className="section-division">
      <div className="logo">
        <img src="./src/assets/img/image_1.png" alt="logo-burgerqueen"></img>
      </div>

      <div className="form-login">
        <form id="cont-login">
          <div id="div-email">
            <label className="mail">Email</label>
            <input
              type="email"
              className="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div id="div-password">
            <label className="pass">Contraseña</label>
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