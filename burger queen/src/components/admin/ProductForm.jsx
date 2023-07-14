import { useEffect, useState } from "react";
import "../EmployeeForm.css";
import PropTypes from "prop-types";

//import {guardar} from "/src/routes/Admin.jsx";

const initialForm = {
  id: null,
  name: "",
  price: "",
  image: "",
  type: "",
  dateEntry: "",
};

const ProductForm = ({
  createProduct,
  updateProduct,
  dataForm,
  setDataForm,
}) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    console.log(dataForm);
    if (dataForm) {
      setForm(dataForm);
    } else {
      setForm(initialForm);
    }
  }, [dataForm]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleReset = () => {
    setForm(initialForm);
    setDataForm(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.id === null) {
      createProduct(form);
    } else {
      updateProduct(form);
    }

    handleReset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="header-form">
        <h5>{dataForm ? "Editar Producto" : "Agregar Nuevo Producto"}</h5>
      </div>
      <div className="div-left">
        <div className="input">
          <label>Id:</label>
          <input
            type="text"
            name="id"
            placeholder="Id"
            value={form.id}
            onChange={handleChange}
            // disabled="false"
          />
        </div>
        <div className="input">
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div className="input">
          <label>Precio:</label>
          <input
            type="number"
            name="precio"
            placeholder="Precio"
            value={form.price}
            onChange={handleChange}
          />
        </div>
      </div>
      {/* <div className="vacio"></div> */}
      <div className="div-rigth">
        <div className="input">
          <label>Imagen:</label>
          <input
            type="text"
            name="image"
            placeholder="Imagen"
            value={form.image}
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <label>Categoría:</label>
          <select name="role" value={form.type} onChange={handleChange}>
            <option value=""></option>
            <option value="Desayuno">Desayuno</option>
            <option value="Almuerzo">Almuerzo</option>
          </select>
        </div>
        <div className="input">
          <button className="btnCancelar" onClick={handleReset}>
            Cancelar
          </button>
          <button className="btGuardar">Guardar</button>
        </div>
      </div>
    </form>
  );
};

export default ProductForm;

ProductForm.propTypes = {
  createProduct: PropTypes.func.isRequired,
  updateProduct: PropTypes.func.isRequired,
  dataForm: PropTypes.object,
  setDataForm: PropTypes.func.isRequired,
};