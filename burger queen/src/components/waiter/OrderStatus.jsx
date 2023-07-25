import PropTypes from "prop-types";

export const OrderStatus = ({ orderItems, updateStatus }) => {
  console.log(orderItems);
  const { id, userId, client, products, status } = orderItems;

  const handleclick = () => {
    console.log("userId:", userId);

    orderItems.status = "delivered";
    console.log(orderItems.status);
    updateStatus(
      orderItems
      //   {
      //   ...orderItems,
      //   [status]:'delivered',
      // }
    );
    console.log(orderItems);
  };

  return (
    <>
      <div className="order-status">
        <div className="order-status-header">
          <p>
            Orden # <span>{id} - </span> <span>{client}</span>
          </p>
        </div>
        <hr />
        <div className="order-status-body">
          {products !== undefined &&
            products.map((p) => (
              <p key={Math.random()}>
                <span>{p.qty} </span>
                {p.product.name}
                <span></span>
              </p>
            ))}
        </div>
        <div className="order-status-footer">
          <button
            className={"btn-sendorder " + status}
            disabled={status !== "pending" && "false"}
            onClick={handleclick}
          >
            {status ? status : "Pending"}
          </button>
        </div>
      </div>
    </>
  );
};

OrderStatus.propTypes = {
  orderItems: PropTypes.shape({
    id: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
    client: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        qty: PropTypes.number.isRequired,
        product: PropTypes.shape({
          name: PropTypes.string.isRequired,
          // Add other properties of the product object if needed
        }).isRequired,
      })
    ).isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  updateStatus: PropTypes.func.isRequired,
};
