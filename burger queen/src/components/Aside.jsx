import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Aside.css";

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
        <a href="#" className="link-dark rounded">
          <i className="bi bi-box-arrow-right"></i>Salir
        </a>
      </section>
    </div>
  );
};