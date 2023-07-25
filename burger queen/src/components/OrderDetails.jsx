import PropTypes from 'prop-types';
import { useState } from 'react';
import { sendOrder } from '../services/orders.service';

export const OrderDetails = ({ orderItems, handleOrderSent, userId }) => {
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
    const products = orderItems.map((item) => ({
      qty: item.quantity > 0 ? item.quantity : 1,
      product: {
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        type: item.type,
        dateEntry: item.dateEntry,
      },
    }));

    const order = {
      userId: userId, 
      client: clientName,
      products: products,
      status: "pending",
    };

    order.dateEntry = new Date().toLocaleString();

    //Enviar la orden a la API utilizando la función sendOrder
    sendOrder(localStorage.getItem("token"), order)
      .then(() => {
        setIsOrderSent(true);
        setTimeout(() => {
          setClientName("");
          setIsOrderSent(false);
          handleOrderSent();
        }, 7000);
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
  handleOrderSent: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
};