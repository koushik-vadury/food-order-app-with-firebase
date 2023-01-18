import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartDocuments = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartDocuments.map((item) => (
        <CartItem
          id={item.id}
          key={item.id}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          description={item.description}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`$ ${totalPrice.toFixed(2)}`}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {cartDocuments.length > 0 && (
          <button className={classes.button}>Order</button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
