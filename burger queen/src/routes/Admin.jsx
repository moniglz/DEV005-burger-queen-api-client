import { AsideBar } from "../assets/components/Aside"
import "./Admin.css";
import EmployeeForm from "../assets/components/EmployeeForm";
import { useState, useEffect } from "react";


export const Admin = () => {
  const [columns, setColumns] = useState([]);
 // const [records, setRecords] = useState([]);

  const [loaded, setLoaded]=useState(false);
  const token1=localStorage.getItem('token');
  console.log('este es el toke: '+token1)
  
  //Eliminar usuario
  const handleClickEliminar=(id)=>{
    //e.preventDefault();
    const res=confirm('Esta seguro que desea eliminar al usuario')

    if (res){
      fetch(`http://localhost:8080/users/${id}` ,{
        method:"DELETE",
        headers:{
          "Content-Type": "application/json",
          "authorization": "Bearer "+ token1 ,
        }
      })
      .then(res=>console.log(res))
      .catch(err=>console.log(err))
    }
    //console.log(`http://localhost:8080/users/${id}`)
    
  
  }
  
  //Listar usuarios
   useEffect(()=>{
  fetch("http://localhost:8080/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authorization": "Bearer "+ token1 ,
      }
    })
    .then(response=>{
      if (response.status === 200) {
        return response.json();
      } else if (response.status >= 400) {
        throw new Error("Datos incorrectos");
      } else {
        throw new Error("Error inesperado");
      }
    })
    .then(data=>{
      //setColumns(Object.values(data))
      console.log(data)
        setColumns(data)
      //console.log(columns[0].email)
      })
      .catch(error=>console.log(error))
      .finally(()=>{
        setLoaded(true);
      //console.log(columns[0])
    })
    },[]);


  return (
    <>
      <div className="admin-container">
        <header>
          <nav>
            <image src="../src/assets/img/icono_menu.png">Menu</image>
            <image src="../src/assets/img/logo_header.png">Logo</image>
            <div className="dateUser">
              <p>Name</p>
              <p>Rol</p>
            </div>
          </nav>
        </header>

        <aside className="side-bar">
          <AsideBar />
        </aside>

        <section className="employees">
        <EmployeeForm  />

        <table>
          <thead>
            <tr>
              <th className="n">N°</th>
              <th>Id</th>
              <th>Nombre</th>
              <th>Rol</th>
              <th>Email</th>
              <th>Password</th>
              <th className="editar">Editar</th>
            </tr>
          </thead>
          <tbody>
            { loaded &&
             columns.map((d,i)=>(
                <tr key={i}>
                  <td>{d.id}</td>
                  <td>{d.id}</td>
                  <td>Nombre</td>
                  <td>{d.role}</td>
                  <td>{d.email}</td>
                  <td>********</td>
                  
                  <td><button onClick={()=>handleClickEliminar(d.id)}>Eliminar</button> <button>Editar</button></td>
                </tr>
             ))
            }
           
          </tbody>
        </table>
        </section>
      </div>
    </>
    )
}