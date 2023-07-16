import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Aside.css";
import { Logout } from "./logout";
import "../routes/Admin.css";
import PropTypes from "prop-types";

export const AsideBar = ({ setNavigate }) => {
  const role = localStorage.getItem("role");
  // const navigate = useNavigate();

  const handleNavigate = (e) => {
    e.preventDefault();
    setNavigate(e.target.innerText);

    //console.log(e.target.innerText)
    // navigate("/");
  };

  return (
    <>
      {role === "admin" ? (
        <nav className="nav-aside">
          <div className="menu-top">
            <ul className="navigation">
              <li name="empleados" onClick={handleNavigate}>
                <a href="" name="empleados">
                  <i className="fa fa-user-pen" name="empleados"></i>
                  <span name="empleados">Empleados</span>
                </a>
              </li>
              <li name="productos" onClick={handleNavigate}>
                <a href="" name="productos">
                  <i className="fa fa-utensils" name="productos"></i>
                  <span name="productos">Productos</span>
                </a>
              </li>
              {/* </ul>
                </div> */}
              <li onClick={handleNavigate}>
                <a href="">
                  <i className="fa fa-plus-circle"></i>
                  <span>Nueva orden</span>
                </a>
              </li>
              <li onClick={handleNavigate}>
                <a href="#">
                  <i className="fa fa-list-check"></i>
                  <span>Estatus pedido</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="menu-bootom">
            <ul className="navigation">
              <li>
                <Logout />
              </li>
            </ul>
          </div>
        </nav>
      ) : role === "waiter" ? (
        <div className="options-waiter">
          <ul className="list-unstyled ps-0">
          <li className="mb-1" onClick={handleNavigate}>
                <a href="#">
                  <i className="fa fa-plus-circle"></i>
                  <span>Nueva orden</span>
                </a>
              </li>

            <li className="mb-1" onClick={handleNavigate}>
                <a href="#">
                  <i className="fa fa-list-check"></i>
                  <span>Estatus pedido</span>
                </a>
              </li>
          </ul>

          <section className="logout side-bar">
            <Logout />
          </section>
        </div>
      ) : role === "chef"(
        <p>Cocinero</p>
      )}
    </>
  );
};

AsideBar.propTypes = {
  setNavigate: PropTypes.func.isRequired,
};