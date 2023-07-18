import '../index.css';
import "./waiter.css";
import { useState, useEffect } from 'react';
import { AsideBar } from "../components/Aside.jsx";
import { MenuTab } from "../components/Menu-tab";
import { OrderDetails } from "../components/OrderDetails";
import { getOrders } from '../services/orders.service';

export const Waiter = () => {  
  const [orderItems, setOrderItems] = useState([]);

  const handleAddToOrder = (productName, productPrice) => {
    const newOrderItem = {
      name: productName,
      price: productPrice,
    };
    setOrderItems([...orderItems, newOrderItem]);
  };

  const handleOrderSent = () => {
    setOrderItems([]);
  };

  const email = localStorage.getItem('email');
  const role = localStorage.getItem('role');

  const [navigate, setNavigate] = useState("MenuTab");

  useEffect(() => {
    fetchExistingOrders();
  }, []);

  const fetchExistingOrders = async () => {
    try {
      const token = localStorage.getItem('token');
      await getOrders(token); 
    } catch (error) {
      console.error(error);
    }
  };


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
                <OrderDetails orderItems={orderItems} handleOrderSent={handleOrderSent} />
              </section>
            </>
          ) : navigate === 'Estatus pedido' ? (
            <>
            <div className="existing-orders">
              <p>Aquí van las ordenes existentes</p>
            </div>
            </>
          ) : null}
        </div>
      </div>
    </>

  );
};

