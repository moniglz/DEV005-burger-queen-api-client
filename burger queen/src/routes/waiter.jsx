import '../index.css';
import "./waiter.css";
import { useState } from 'react';
import { AsideBar } from "../components/Aside.jsx";
import { MenuTab } from "../components/Menu-tab";
import { OrderDetails } from "../components/OrderDetails";

export const Waiter = () => {  
  const [orderItems, setOrderItems] = useState([]);

  const handleAddToOrder = (productName, productPrice) => {
    const newOrderItem = {
      name: productName,
      price: productPrice,
    };
    setOrderItems([...orderItems, newOrderItem]);
  };

  const email = localStorage.getItem('email');
  const role = localStorage.getItem('role');

  const [navigate, setNavigate] = useState("MenuTab");

  return (
    <>
      <div className="waiter-container">
        <header>
          <nav className="nav-header">
            <div className="menu-left">
            <label htmlFor="btn-nav" className="btn-nav"><i className="fas fa-bars"></i></label>
            <input type="checkbox" id="btn-nav"></input>
              <img id="logoH" src="./src/assets/img/logo_header.png" alt="logo-burgerqueen" />
            </div>
          
            <div className="dataUser">
              <p>{email}</p>
              <p>{role==='admin'?'Administrador':role==='waiter'?'Mesero':'Cocinero'}</p>
            </div>
          </nav>
        </header>

        <aside className="side-bar">
          <AsideBar setNavigate={setNavigate} />
        </aside>

        <div className="menuorder-container">
          {navigate === 'Nueva orden' || navigate === 'MenuTab' ? (
            <>
              <section className="menu-tab">
                <MenuTab handleAddToOrder={handleAddToOrder} />
              </section>
              <section className="o-container">
                <OrderDetails orderItems={orderItems} setOrderItems={setOrderItems} />
              </section>
            </>
          ) : navigate === 'Estatus pedido' ? (
            <p>Aquí irán las ordenes generadas</p>
          ) : null}
        </div>
      </div>
    </>
  );
};
