import { useEffect, useState } from "react";
import "./StatusPedido.css";
import { OrderStatus } from "./OrderStatus";

export const StatusPedido = () => {
  const token = localStorage.getItem("token");
  const [db, setDb] = useState([]);
  const [loaded, setLoaded] = useState(false);

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
        console.log(data);
        setLoaded(true);
        setDb(data);
      })
      .catch((error) => console.log(error));
  }, [token]);

  //actualizar status de la orden
  const updateStatus = (order) => {
    const isStatus = confirm(
      `¿Deseas actualizar el estado de la orden # ${order.id}?`
    );
    if (isStatus) {
      fetch(`http://localhost:8080/products/${order.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer " + token,
        },
        body: JSON.stringify(
          // order.status
          {
            status: "delivered",
            // ,
            // "dateProcessed": Date()
          }
        ),
      })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            return res.json();
          } else if (res.status >= 400) {
            throw new Error("Datos incorrectos");
          } else {
            throw new Error("Error inesperado");
          }
        })
        .then((dataJs) => {
          console.log(dataJs);
          const newDb = db.map((d) => (d.id === order.id ? order : d));
          setDb(newDb);
          // setDb(dataJs)
        })
        .catch((error) => console.log(error));
    } else {
      return;
    }
  };

  return (
    <>
      {db.length === 0 ? ( // Verifica la longitud del array 'db'
        <div>Sin datos</div>
      ) : (
        <>
          <div className="status-pedido">
            <div className="list-orders">
              {db.map((d) => {
                // Check if 'products' exists in the current 'd' object
                const hasProducts = d.products && d.products.length > 0;

                return (
                  <div
                    key={Math.random()}
                    className={"order " + d.status}
                    onClick={() => handleAddToOrder(d)}
                  >
                    <div className="order-header">
                      <span>{d.id} </span>
                      <span>{d.client}</span>
                      <span>
                        Hora: {d.dataEntry ? d.dataEntry.slice(d.dataEntry.length - 5) : ""}
                      </span>
                    </div>
                    <hr />
                    <div className="order-body">
                      {hasProducts ? (
                        d.products.map((ps) => (
                          <p key={Math.random()}>
                            <span>{ps.qty}</span>
                            <span>{ps.product.name}</span>
                          </p>
                        ))
                      ) : (
                        <p>No products available.</p>
                      )}
                    </div>
                    <hr />
                    <div className="order-footer">
                      <span className={d.status}>{d.status}</span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="details-order-chef">
              <OrderStatus
                orderItems={orderItems}
                updateStatus={updateStatus}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};