//import React from 'react'
// import '../assets/icons/all.min.js'
// //import '../assets/icons/all.min.css'


export const EProductTableRow = ({user, setDataForm, deleteUser}) => {
    
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
            <button onClick={()=>setDataForm(user)}><i className="fa pen-to-square"></i></button>
            <button onClick={()=>deleteUser(id)}><i className="fa fa-trash-can"></i></button> 
            </td>
    </tr>
    
  )
}
