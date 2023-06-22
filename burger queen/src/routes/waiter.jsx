import "./waiter.css";

export const Waiter = () => {
  return (
    <>
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
        <select>
          <option>Nueva orden</option>
          <option>Estatus pedido</option>
        </select>
        <button>Cerrar Sesión</button>
      </aside>

      <section>
        <div className="tab">
          <button className="tablinks" onClick="openMenu(event, 'Desayuno')">
            Desayuno
          </button>
          <button className="tablinks" onClick="openMenu(event, 'Comida')">
            Comida
          </button>
        </div>

        <div id="Desayuno" className="tabcontent">
          <h3>Desayuno</h3>
        </div>

        <div id="Comida" className="tabcontent">
          <h3>Comida</h3>
        </div>
      </section>
    </>
  );
};
