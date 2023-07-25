import { AsideBar } from "../components/Aside";
import "./Admin.css";
//import { handleClickEditar } from "../services/users.service";
import { Products } from '../components/admin/Products'
import { Employees } from "../components/Employees";
import { MenuTab } from '../components/Menu-tab';
import { OrderDetails } from "../components/OrderDetails";
import { StatusPedido } from '../components/waiter/StatusPedido';
import { useState } from "react";

export const Admin = () => {
  const [navigate, setNavigate]=useState('Empleados')

  const email = localStorage.getItem('email');
  const role = localStorage.getItem('role');

  return (
    <>
      <div className="admin-container">
        <header>
          <nav className="nav-header">
            <div className="menu-left">
            <div className="btn-nav"><i className="fas fa-bars"></i></div>
            <img id="logoH" src="./src/assets/img/logo_header.png" alt="logo-burgerqueen" />
            </div>
          
            <div className="dataUser">
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
        {navigate === "Nueva orden" && (
          <>
            <section className="menu-tab">
              <MenuTab />
            </section>
            <section className="order-details">
              <OrderDetails />
            </section>
          </>
        )}
        {navigate==='Status pedido'&&  <StatusPedido />} 
      
        </section>
      </div>
    </>
  );
};