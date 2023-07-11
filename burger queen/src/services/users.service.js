import { useState } from "react"


export const handleClickEditar=(id, email, role, password)=>{

    const userEdit={id,email,role,password}
     cargarDatos(userEdit)
}

// export const cargarDatos=(datos)=>{

// }

// export const updateUser=(userEdit)=>{
//     const [user, setUser]=useState('')

// }

