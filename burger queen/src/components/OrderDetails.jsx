export const OrderDetails = () => {

  return (
    <>
      <table className="new-order">
        <thead className="new-order-title">Nueva orden</thead>
        <tbody>
          <tr className="product-data">
            <td className="name-product">Café {/*Aquí va el producto*/}</td>
            <td className="price-product">$10.00{/*Aquí su precio*/}</td>
          </tr>
        </tbody>
      </table>

      <table className="total-sendorder">
        <tbody>
          <tr>
            <td>Total:</td>
            <td className="total">${/*Aquí va la cantiddd a pagar*/}</td>
          </tr> 
          <button className="action-button">Cancel</button>
          
        </tbody>
      </table>
    </>
  );
}
