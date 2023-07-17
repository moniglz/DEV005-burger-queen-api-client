import PropTypes from 'prop-types';

export const OrderDetails = ({ orderItems }) => {
  const totalPayment = () => {
    let total = 0;
    for (let i = 0; i < orderItems.length; i++) {
      total += orderItems[i].price;
    }
    return total;
  };

  const handleAddingProduct = () => {
    console.log('Agregará producto')
  }

  return (
    <>
      <table className="new-order">
        <thead className="new-order-title">
          <tr>
            <th id="title-h"> Nueva orden </th>
            <td id="client-name"><input type="text" className="client-name" maxLength={30} placeholder="Nombre del cliente"/></td>
          </tr>
        </thead>

        <tbody className="order-det">
          {orderItems.map((item, index) => (
            <tr className="product-data" key={index}>
              <td className="product-qty">
                <button className="btn-qty add" onClick={handleAddingProduct}>+</button>
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
              {" "}
              ${totalPayment() /*Aquí va la cantidad a pagar*/}
            </td>
          </tr>

          <tr className="btn-cont-so">
            <td id="td-btn-so">
              <button className="btn-sendorder">Generar orden</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}

OrderDetails.propTypes = {
  orderItems: PropTypes.array.isRequired,
};