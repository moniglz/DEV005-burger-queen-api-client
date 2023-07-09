import PropTypes from 'prop-types';

export const OrderDetails = ({ orderItems }) => {

  return (
    <>
      <table className="new-order">
        <thead className="new-order-title">
          <tr>
            <th id="title-h"> Nueva orden </th>
          </tr>
        </thead>

        <tbody className="order-det">
          {orderItems.map((item, index) => (
            <tr className="product-data" key={index}>
              <td className="name-product">{item.name}</td>
              <td className="price-product">${item.price}</td>
            </tr>
          ))}
        </tbody>

        <tfoot className="total-sendorder">
          <tr className="total-payment">
            <td>Total:</td>
            <td className="total"> ${/*Aquí va la cantidad a pagar*/}</td>
          </tr>

          <tr className="btn-cont-so">
            <td id="td-button">
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