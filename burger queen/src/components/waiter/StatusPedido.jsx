import { useEffect, useState } from "react"
import './StatusPedido.css'
import { OrderStatus } from "./OrderStatus";


export const StatusPedido = () => {
    const token=localStorage.getItem('token');
    const [db, setDb]=useState('');
    const [loaded, setLoaded]=useState(false)
    

    //Listar el detalle de las órdenes
    const [orderItems, setOrderItems] = useState([]);

    const handleAddToOrder = (order) => {
      setOrderItems(order);
    };


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
            <>
            <div className="status-pedido">
              <div className="list-orders">{
              db.map((d)=>{return(
                  <div key={d.id} className='order' onClick={()=>handleAddToOrder(d)}>
                    <div className="order-header"><span>{ d.id, d.client}</span><span>Hora del pedido: { d.dataEntry.slice(d.dataEntry.length-5)}</span></div>  
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
                  </div>)
              })
              }
              </div>
              <div className="details-order-chef">
                <OrderStatus orderItems={orderItems}/>
              </div>

            </div>
            </>

    }
    </>
  )
}
