import { useState } from "react";
import "./EmployeeForm.css";
//import {guardar} from "/src/routes/Admin.jsx";

export default function EmployeeForm() {
  const [email,setEmail]=useState('');
  const [password, setPassword]=useState('');
  const [role, setRole]=useState('');
  const token1=localStorage.getItem('token');
  

  const handleSubmit=(e)=>{
    console.log('presionaste en guardar '+e)
    e.preventDefault();
    const newUser={email, password, role}
    console.log(newUser)
    fetch("http://localhost:8080/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authorization": "Bearer "+ token1 ,
      },
      body: JSON.stringify(newUser)
    })
    .then((res)=>{
      console.log(res)
    })
  }

    return (
        <form onSubmit={handleSubmit}>
          <div className="header-form">
            <h5>Nuevo Trabajador</h5>
          </div>
          <div className="div-left">
            <div className="input">
              <label>Id:</label>
              <input
                type="text"
                name="id"
                placeholder="Id"
                disabled="true"
              />
            </div>
            <div className="input">
              <label>Nombre:</label>
              <input
                type="text"
                name="name"
                placeholder="Nombre"
              />
            </div>
            <div className="input">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="vacio"></div>
          <div className="div-rigth">
            <div className="input">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
            <div className="input">
              <label>Rol:</label>
              <select value={role} onChange={(e)=>setRole(e.target.value) }>
                <option value="waiter">Chef</option>
                <option value="chef">Cocinero</option>
                <option value="admin">Administrador</option>
              </select>
            </div>
            <div className="input">
              <button className="btnEliminar" disabled="true">Eliminar</button>
              <button className="btGuardar" >Guardar</button>
            </div>
          </div>
        </form>
    );
  }
  