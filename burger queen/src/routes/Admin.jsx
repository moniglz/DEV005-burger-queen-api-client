import { AsideBar } from "../components/Aside";
import "./Admin.css";
//import { useState, useEffect } from "react";
//import { handleClickEditar } from "../services/users.service";
import {Products} from '../components/admin/Products'
import { Employees } from "../components/Employees";
import {MenuTab} from '../components/Menu-tab'
import {StatusPedido} from '../components/waiter/StatusPedido'
import { useState } from "react";

export const Admin = () => {
  const [navigate, setNavigate]=useState('Empleados')

  const email=localStorage.getItem('email');
  const role=localStorage.getItem('role');
  return (
    <>
      <div className="admin-container">
        <header>
          <nav className="nav-header">
            <div className="menu-left">
            <label htmlFor="btn-nav" className="btn-nav"><i className="fas fa-bars"></i></label>
            <input type="checkbox" id="btn-nav"></input>
              {/* <img id="iconM" src="./src/assets/img/icono_menu.png" alt="icono-menu" /> */}
              <img id="logoH" src="./src/assets/img/logo_header.png" alt="logo-burgerqueen" />
            </div>
          
            <div className="dateUser">
              <p>{email}</p>
              <p>{role==='admin'?'Administrador':role==='waiter'?'Mesero':'Cocinero'}</p>
            </div>
          </nav>
        </header>

        <aside className="side-bar">
          <AsideBar setNavigate={setNavigate}/>
        </aside>

        <section className="employees">
        {navigate==='Empleados'&&  <Employees />}
        {navigate==='Productos'&&  <Products />} 
        {navigate==='Nueva orden'&&  <MenuTab />} 
        {navigate==='Status pedido'&&  <StatusPedido />} 
      
        </section>
      </div>
    </>
  );
};
