import PropTypes from 'prop-types';
import { useState } from 'react';

export const OrderDetails = ({ orderItems, handleOrderSent }) => {
  const [clientName, setClientName] = useState('');
  const [isOrderSent, setIsOrderSent] = useState(false);

  const totalPayment = () => {
    let total = 0;
    for (let i = 0; i < orderItems.length; i++) {
      total += orderItems[i].price;
    }
    return total;
  };

  const handleSendOrder = () => {
    const order = {
      clientName: clientName,
      orderItems: orderItems,
      orderDate: new Date().toLocaleString()
    };

    //Enviar la orden a La API
    fetch("http://localhost:8080/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify(order)
    })
      .then((response) => {
        if (response.status === 201) {
          console.log("¡Orden enviada con éxito!");
          setIsOrderSent(true);
          setTimeout(() => {
            setClientName("");
            setIsOrderSent(false);
            handleOrderSent();
          }, 8000);
        } else if (response.status >= 400) {
          throw new Error("Error al enviar la orden");
        }
      })
      .catch((error) => {
        console.error("Error al enviar la orden:", error);
      });
  };

  return (
    <>
      <table className="new-order">
        <thead className="new-order-title">
          <tr>
            <th id="title-h"> Nueva orden </th>
            <td id="client-name">
              <input
                type="text"
                className="client-name"
                maxLength={30}
                placeholder="Nombre del cliente"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
              />
            </td>
          </tr>
        </thead>

        <tbody className="order-det">
          {orderItems.map((item, index) => (
            <tr className="product-data" key={index}>
              <td className="product-qty">
                <button className="btn-qty add">+</button>
                <span className="quantity">{item.quantity > 0 ? item.quantity : 1}</span>
                <button className="btn-qty minus">-</button>
              </td>
              <td className="product-info">
                <div className="product-name">{item.name}</div>
                <div className="product-price">${item.price}</div>
              </td>
            </tr>
          ))}
        </tbody>

        <tfoot className="total-sendorder">
          <tr className="total-payment">
            <td id="td-total">Total:</td>
            <td className="total">
              ${totalPayment() /* Aquí va la cantidad a pagar */}
            </td>
          </tr>

          <tr className="btn-cont-so">
            <td id="td-btn-so">
              {isOrderSent ? (
                <p className="order-sent-success">¡Orden enviada exitosamente!</p>
              ) : (
                <button
                  className="btn-sendorder"
                  onClick={handleSendOrder}
                  disabled={!clientName || orderItems.length === 0}
                >
                  Generar orden
                </button>
              )}
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

OrderDetails.propTypes = {
  orderItems: PropTypes.array.isRequired,
  handleOrderSent: PropTypes.func.isRequired
};
