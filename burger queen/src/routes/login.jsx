import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setEmail(e.target.form[0].value);
    setPassword(e.target.form[1].value);

    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email, password}),
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("Is a valid login");
          return response.json();
        } else if (response.status >= 400) {
          throw new Error("Invalid email or password");
        } else {
          throw new Error("Unexpected error");
        }
      })
      .then((data) => {
        if (data.user.role === "admin") {
          navigate("/admin");
        }else if (data.user.role === "waiter") {
          navigate("/waiter");
        }
      })
      // .then((data) => {
        
      // });

    // useEffect(()=>{
    //   const option={
    //     method:'POST',
    //     headers:{

    //     }
    //   }
    //   fetch('',option)
    // })
  };
  console.log(email);
  console.log(password);

  return (
    <section>
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
              //onChange={e=>setEmail(e.target.value)}
            />
          </div>
          <div id="div-password">
            <label>Contraseña</label>
            <input
              type="password"
              className="password"
              placeholder="Escribe tu contraseña"
            />
          </div>
          <button type="submit" className="login-btn" onClick={handleClick}>
            Iniciar sesión
          </button>
        </form>
      </div>
    </section>
  );
};
