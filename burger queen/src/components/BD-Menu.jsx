import { useEffect, useState } from "react";
import "../components/Menu-tab.css";
import { getProducts } from "../services/products.service";
import PropTypes from 'prop-types';

const BD_Menu = ({ activeTab }) => {
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts(token);
        setProducts(response);
      } catch (error) {
        console.log(error);
      }
    };

    if (token) {
      fetchProducts();
    }
  }, [token]);

  //Se obtiene el tipo de producto correspondiente a la pestaña activa
  const tabType = activeTab === "Desayuno" ? "Desayuno" : "Almuerzo";

  // Filtrar según el tipo
  const filteredProducts = products.filter(
    (product) => product.type === tabType
  );

  return (
    <section className="card-products">
      {filteredProducts.map((product) => (
        <div className="card-product" key={product.id}>
          <div className="product-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="info-product">
            <p className="p-name">{product.name}</p>
            <div className="p-price-add">
            <p className="price">${product.price}</p>
            <i className="bi bi-plus-circle"></i>
            </div>
          </div>
        </div>
        ))}
    </section>
  );
  
};

BD_Menu.propTypes = {
  activeTab: PropTypes.string.isRequired,
};

export default BD_Menu;
