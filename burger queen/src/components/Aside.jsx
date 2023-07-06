import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Aside.css";
import { Logout } from "./logout";

export const AsideBar = () => {
  return (
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
            className="btn"
            data-bs-toggle="collapse"
            data-bs-target="#account-collapse"
            aria-expanded="false"
          >
            <i className="bi bi-list-ul"></i> Estatus pedidos
          </button>
        </li>

        <li className="">
          <section className="logout side-bar">
            <Logout />
          </section>
        </li>

      </ul>

      
    </div>
  );
};