import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Aside.css";
import { Logout } from "./logout";
import "../routes/Admin.css"

export const AsideBar = () => {
  const role=localStorage.getItem('role');

  // const handleClic=(e)=>{
  //   console.log(e.target.value)
  // }

  return (
    <>{role==='admin'?
        <nav className="nav-aside">
          <div className="menu-top">
              <ul className="navigation">
                <div><a href="">
                      <i className="fa fa-gears"></i>
                      <span>Mantenimiento</span>
                    </a>
                    <ul>
                      <li value='empleados' ><a href=""><i className="fa fa-user-pen"></i><span>Empleados</span></a></li>
                      <li><a href=""><i className="fa fa-utensils"></i><span>Productos</span></a></li>
                    </ul>
                </div>
              <li><a href="#">
                  <i className="fa fa-plus-circle"></i>
                  <span>Nueva orden</span></a>
              </li>
              <li>
                  <a href="#">
                  <i className="fa fa-list-ol"></i>
                  <span>Órdenes</span></a>
              </li>
              <li>
                <a href="#">
                <i className="fa fa-list-check"></i>
                <span>Status pedido</span></a>
              </li>
              </ul>
          </div>
          <div className="menu-bootom">
            <ul className="navigation">
              <li><a href=""><i className="fa fa-right-from-bracket"></i><span>Salir</span></a></li>   
            </ul>
          </div>
          
        </nav>
      
      :role==='waiter'?
        <div className="options-waiter">
        <ul className="list-unstyled ps-0">
          <li className="mb-1">
            <button
              className="btn align-items-center rounded collapsed"
              data-bs-target="#orders-collapse"
              aria-expanded="false"
            >
              <i className="bi bi-plus-circle-dotted"></i> Nueva orden
            </button>
          </li>
          <li className="mb-1">
            <button
              className="btn align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#account-collapse"
              aria-expanded="false"
            >
              <i className="bi bi-list-ul"></i> Estatus pedidos
            </button>
            {/* <div className="collapse" id="account-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li className="submenu">
                  <a href="#" className="link-dark rounded">
                    Processed
                  </a>
                </li>
                <li className="submenu">
                  <a href="#" className="link-dark rounded">
                    Shipped
                  </a>
                </li>
                <li className="submenu">
                  <a href="#" className="link-dark rounded">
                    Returned
                  </a>
                </li>
              </ul>
            </div> */}
          </li>
        </ul>
      
        <section className="logout side-bar">
          <Logout />
        </section>
      </div>
    :<p>Cocinero</p>}
    
    </>
    
  );
};