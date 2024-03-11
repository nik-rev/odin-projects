import PropTypes from "prop-types";

function Cart({ orderedItems }) {
  const totalPrice = Math.floor(
    orderedItems.reduce((acc, item) => {
      return (
        acc +
        item.props.children.filter((child) => child.type === "h2")[0].props
          .children
      );
    }, 0)
  );

  if (orderedItems.length === 0) return <h1>Your cart is empty</h1>;

  const handleClick = (e) => {
    const originalText = e.target.textContent;
    e.target.textContent = "This does nothing";
    setTimeout(() => {
      e.target.textContent = originalText;
    }, 3000);
  };

  return (
    <>
      <h1>Total Price: {totalPrice}</h1>
      <button type="button" onClick={handleClick}>
        Checkout
      </button>
      {orderedItems}
    </>
  );
}

Cart.propTypes = {
  orderedItems: PropTypes.array,
};

Cart.defaultProps = {
  orderedItems: [],
};

export default Cart;
