// import React from 'react'
// import '../assets/icons/all.min.js'
// import '../assets/icons/all.min.css'
import PropTypes from "prop-types";

export const ProductTableRow = ({product, setDataForm, deleteProduct}) => {
    
    const {id,name, price, image, type, dateEntry}=product;
    //console.log(user)
  return (
    <tr>
        <td>{id}</td>
        <td>{id}</td>
        <td>{name}</td>
        <td>{price}</td>
        <td>{image.slice(image.length-13)}</td>
        <td>{type}</td>
        <td>{dateEntry}</td>
        <td>
            <button onClick={()=>setDataForm(product)}><i className="fa fa-pen-to-square"></i></button>
            <button onClick={()=>deleteProduct(id)}><i className="fa fa-trash-can"></i></button> 
            </td>
    </tr> 
  )
};

ProductTableRow.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    dateEntry: PropTypes.string.isRequired,
  }).isRequired,
  setDataForm: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
};
