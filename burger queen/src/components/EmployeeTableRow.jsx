//import React from '<react></react>'
// import '../assets/icons/all.min.js'
// //import '../assets/icons/all.min.css'
import PropTypes from "prop-types";


export const EmployeeTableRow = ({user, setDataForm, deleteUser}) => {
    
  const {id,email , role}=user;
  //console.log(user)
  return (
    <tr>
      <td>{id}</td>
      <td>{id}</td>
      {/* <td>Nombre</td> */}
      <td>{role}</td>
      <td>{email}</td>
      <td>********</td>
      <td>
        <button onClick={()=>setDataForm(user)}><i className="fa fa-pen-to-square"></i></button>
        <button onClick={()=>deleteUser(id)}><i className="fa fa-trash-can"></i></button> 
      </td>
    </tr>
  )
}

EmployeeTableRow.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
  setDataForm: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
};