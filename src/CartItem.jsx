import { useState } from "react";
import { useCart } from "./contexts/CartContext";

function CartItem({ cartItem }) {
  const [quantity, setQuantity] = useState(1);
  const { handleUpdateQuantity, handleRemoveItem } = useCart();

  function handleChangeQuantity(e) {
    setQuantity(e.target.value);
    handleUpdateQuantity(cartItem.id, e.target.value);
  }
  return (
    <>
      <div className="cartitem">
        <div className="img-block">
          <img src={cartItem.image} alt={cartItem.title} />
        </div>
        <div className="cartitem__details">
          <h3>{cartItem.title}</h3>
          <p>{cartItem.description}</p>
        </div>
        <div className="quantity">
          <label htmlFor={`cart-${cartItem.id}`}>Qty:</label>
          <select
            name="cart-quantity"
            id={`cart-${cartItem.id}`}
            value={quantity}
            onChange={handleChangeQuantity}>
            {Array.from({ length: cartItem.quantityAvailable }).map((el, i) => {
              return (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>
        </div>

        <div className="price">
          <p>${(cartItem.price * cartItem.quantity).toFixed(2)}</p>
          <button onClick={() => handleRemoveItem(cartItem.id)}>
            Remove From Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default CartItem;
