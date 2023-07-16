import { ProductTableRow } from './ProductTableRow'
import './Products.css'
import PropTypes from "prop-types";

export const ProductsTable = ({loaded , data, setDataForm, deleteProduct}) => {

  return (
    <div className='table-products'>
        <table >
          <thead>
            <tr>
              <th className="n">N°</th>
              <th>Id</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Imagen</th>
              <th>Categoría</th>
              <th>Fecha Creación</th>
              <th className="editar">Editar</th>
            </tr>
          </thead>
          <tbody >
          
            { 
            loaded===false? <tr><td>Sin Datos</td></tr>: data.map((d)=> <ProductTableRow key={d.id} product={d} setDataForm={setDataForm} deleteProduct={deleteProduct}/>)   
            }            
        
          </tbody>
        </table>
    </div>
  );
}

ProductsTable.propTypes = {
  loaded: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired,
  setDataForm: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired
};