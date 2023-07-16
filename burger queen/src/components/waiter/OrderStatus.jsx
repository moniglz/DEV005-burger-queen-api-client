//import { useEffect, useState } from "react";

// const statusInitial={
//     id:'',
//     userId:'',
//     client:'',
//     products:[],
//     status:''
// }
export const OrderStatus = ({orderItems}) => {
        console.log(orderItems)
    const [id, userId, client, products, status]=Object.values(orderItems); 
//     const [orderDetails, setOrderDetails]=useState([])

//    useEffect(()=>{
//     setOrderDetails(statusInitial)
//     setOrderDetails(orderItems)
    
//    },[orderItems])
    // console.log(typeof(products))
    
  return (
    <>

    <div className='order-status'>
        <div className='order-status-header'>
            <p>Orden # <span>{id}</span><span>{client}</span></p>
        </div>
        <hr />
        <div className='order-status-body'>
        {products.map(p=>(
            <p key={id}><span>{p.qty}</span>{p.product.name}<span></span></p>
        ))}
            
        </div>
        <div className='order-status-footer'>

        </div>
    </div>

    </>
  )

}
