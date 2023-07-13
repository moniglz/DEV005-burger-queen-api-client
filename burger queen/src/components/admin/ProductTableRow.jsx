//import React from 'react'
// import '../assets/icons/all.min.js'
// //import '../assets/icons/all.min.css'


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
}
