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

  return (
    <>
      <div className="waiter-container">
        <header>
          <nav>
            <img id="iconM" src="./src/assets/img/icono_menu.png" alt="icono-menu" />
            <img id="logoH" src="./src/assets/img/logo_header.png" alt="logo-burgerqueen" />
            <div className="dataUser">
              <p>Name</p>
              <p>Rol</p>
            </div>
          </nav>
        </header>

        <aside className="side-bar">
          <AsideBar />
        </aside>

        <section className="menu-tab">
          <MenuTab handleAddToOrder={handleAddToOrder} />
        </section>

        <section className='o-container'>
          <OrderDetails orderItems={orderItems} />
        </section>
      </div>
    </>
  );
};
