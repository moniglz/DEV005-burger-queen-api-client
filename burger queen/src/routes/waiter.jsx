import "./waiter.css";
import { AsideBar } from '../assets/components/Aside.jsx';
import { MenuTab } from "../assets/components/Menu-tab";

export const Waiter = () => {
  return (
    <div className="waiter-container">
      <header>
        <nav>
          <image src="./src/assets/img/icono_menu.png">Menu</image>
          <image src="./src/assets/img/logo_header.png">Logo</image>
          <div className="dateUser">
            <p>Name</p>
            <p>Rol</p>
          </div>
        </nav>
      </header>

      <aside className="side-bar">
        <AsideBar />
      </aside>

      <section >
        <div className="menu-tab">
        <MenuTab />
        </div>
        <div className="detalle-pedido">
          <h3>Detalle Pedido</h3>
        </div>
      </section>
    </div>
  );
};
