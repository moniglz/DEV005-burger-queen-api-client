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

  // Filtrar según el tipo
  const filteredProducts = products.filter(
    (product) => product.type === activeTab
  );

  return (
    <section className="menu-container">
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <p>{product.name}</p>
            <p>Precio: ${product.price}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

BD_Menu.propTypes = {
  activeTab: PropTypes.string.isRequired,
};

export default BD_Menu;
