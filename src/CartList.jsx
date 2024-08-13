import CartItem from "./CartItem";
import { useCart } from "./contexts/CartContext";

function CartList() {
  const { cartItems } = useCart();
  console.log(cartItems);
  const totalPrice = cartItems.reduce(
    (acc, cur) => (acc += cur.price * cur.quantity),
    0
  );

  const shippingPrice = totalPrice <= 500 ? (totalPrice * 0.1).toFixed(2) : 0;
  return (
    <div>
      CartList
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <hr />
      <div className="cart-description">
        <div className="subtotal">
          <h3>Sub Total</h3>
          <p>${totalPrice}</p>
        </div>
        <div className="subtotal">
          <h3>Shipping</h3>
          <p>{shippingPrice > 0 ? shippingPrice : "Free"}</p>
        </div>
      </div>
      <hr />
      <div className="total">
        <h3>Total</h3>
        <p>${totalPrice + shippingPrice}</p>
      </div>
    </div>
  );
}

export default CartList;
