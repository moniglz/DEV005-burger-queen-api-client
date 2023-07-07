export const OrderDetails = () => {

  return (
    <>
      <table className="new-order">
        <tr className="new-order-title">Nueva orden</tr>
        <tbody className="order-det">
          <div className="product-data">
            <td className="name-product">Café (ejemplo){/*Aquí va el producto*/}</td>
            <td className="price-product">$10.00{/*Aquí su precio*/}</td>
          </div>

          <div className="total-sendorder">
            <tr className="total-payment">
              <td>Total:</td>
              <td className="total"> ${/*Aquí va la cantiddd a pagar*/}</td>
            </tr>

            <tr className="btn-cont-so">
              <button className="btn-sendorder">Generar orden</button>
            </tr>
          </div>

        </tbody>
      </table>
    </>
  );
}
