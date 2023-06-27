// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// Bootstrap Bundle JS
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/js/dist/dropdown';
// import './AsideBar.js'
import './Aside.css'

export const AsideBar=()=>{
    return(
      <>
      <div className="flex-shrink-0 p-3 bg-white">
      {/*   <a
          href="/"
          className="d-flex align-items-center pb-3 mb-3 link-while text-decoration-none border-bottom"
        >
          <svg className="bi me-2" width="30" height="24"></svg> 
          <span className="fs-5 fw-semibold">Burger Queen</span>
        </a>*/}
        <ul className="list-unstyled ps-0">
          <li className="mb-1">
            <button
              className="btn btn-toggle align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#orders-collapse"
              aria-expanded="false"
            >
              Nueva orden
            </button>
          </li>
          <li className="border-top my-3"></li>
          <li className="mb-1">
            <button
              className="btn btn-toggle align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#account-collapse"
              aria-expanded="false"
            >
              Estatus pedidos
            </button>
            <div className="collapse" id="account-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a href="#" className="link-dark rounded">
                    Processed
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded">
                    Shipped
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded">
                    Returned
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      
        <section className='logout side-bar'>
          <hr/>
            <a href="#" className="link-dark rounded">
              Cerrar sesión
            </a>
        </section>
      </div>
    </>
    )
}