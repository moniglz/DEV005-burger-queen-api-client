import { useEffect, useState } from "react";
import "./EmployeeForm.css";
import PropTypes from 'prop-types';

//import {guardar} from "/src/routes/Admin.jsx";

const initialForm={ 
  id:null,
  email:'',
  password: '',
  role:''};


const EmployeeForm=({createUser, updateUser, dataForm, setDataForm})=> {

  
  const [form, setForm]=useState(initialForm)
  
  useEffect(()=>{
    console.log(dataForm)
    if(dataForm){
      setForm(dataForm)
    }else{
      setForm(initialForm)
    }
  },[dataForm])


  const handleChange=(e)=>{
    setForm({
      ...form, 
      [e.target.name]:e.target.value,
    })
  }

  const handleReset=()=>{
    setForm(initialForm);
    setDataForm(null);
  }

  const handleSubmit=(e)=>{
    e.preventDefault();

    if (form.id===null){
      createUser(form);
    }else{
      updateUser(form)
    }

    handleReset();

  }

    return (
        <form onSubmit={handleSubmit}>
          <div className="header-form">
            <h5>{dataForm?'Editar Trabajador':'Agregar Nuevo Trabajador'}</h5>
          </div>
          <div className="div-left">
            <div className="input">
              <label>Id:</label>
              <input
                type="text"
                name="id"
                placeholder="Id"
                // disabled="false"
              />
            </div>
            {/* <div className="input">
              <label>Nombre:</label>
              <input
                type="text"
                name="name"
                placeholder="Nombre"
              />
            </div> */}
            
            <div className="input">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                
                onChange={handleChange}
              />
            </div>
          </div>
          {/* <div className="vacio"></div> */}
          <div className="div-rigth">
            <div className="input">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
              />
            </div>
            <div className="input">
              <label>Rol:</label>
              <select  name="role" value={form.role} onChange={handleChange}>
                <option value=""></option>
                <option value="waiter">Mesero</option>
                <option value="chef">Cocinero</option>
                <option value="admin">Administrador</option>
              </select>
            </div>
            <div className="input">
              <button className="btnCancelar" onClick={handleReset} >Cancelar</button>
              <button className="btGuardar" >Guardar</button>
            </div>
          </div>
        </form>
    );
  };

export default EmployeeForm;

EmployeeForm.propTypes = {
  createUser: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
  dataForm: PropTypes.object,
  setDataForm: PropTypes.func.isRequired,
};