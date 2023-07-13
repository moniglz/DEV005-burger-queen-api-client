import { useEffect, useState } from "react"
import './StatusPedido.css'
import { StatusPedidoDetails } from "./StatusPedidoDetails";


export const StatusPedido = () => {
    const token=localStorage.getItem('token');
    const [db, setDb]=useState('');
    const [loaded, setLoaded]=useState(false)

      //Listar órdenes
  useEffect(() => {
    fetch("http://localhost:8080/orders", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: "Bearer " + token,
          },
        })
        .then((response) => {
        
          if (response.status === 200) {
            return response.json();
          } else if (response.status >= 400) {
            throw new Error("Datos incorrectos");
          } else {
            throw new Error("Error inesperado");
          }
        })
        .then((data) => {
            console.log(data)
          setLoaded(true)
          setDb(data);
        })
        .catch((error) =>
        console.log(error)
        )
      } , []);

  return (
    <>
    { 
            loaded===false? 
            <div>Sin datos</div>
            :
            <div className="list-orders">{
            db.map((d)=>{return(
                <div key={d.id} className='order'>
                <div className="order-header">{ d.client}</div>  
                <hr />
                <div className="order-body">
                {d.products.map((ps)=>{return(
                // <p key={d.id}>{ps.qty}</p>,
                <p><span>{ps.qty}  </span><span>{ps.product.name}</span></p>,
                // <StatusPedidoDetails ps={ps} />
                )}
                    
                )}
                </div>
                <hr />
                <div className="order-footer">
                    {d.status}

                </div>
                

                    {/* <StatusPedidoDetails details={d}/> */}
                    
                </div>)
            })
            }</div>
    }
    </>
  )
}
