import "./waiter.css";
import { AsideBar } from "../components/Aside.jsx";
import { MenuTab } from "../components/Menu-tab";

export const Waiter = () => {

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
          <MenuTab />
        </section>
      </div>
    </>
  );
};
