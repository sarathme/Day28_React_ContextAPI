import { useReducer } from "react";
import { CartContext, cartReducer } from "./CartContext";

const initialValue = {
  cartItems: [],
};

export default function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialValue);
  const totalPrice = state.cartItems.reduce(
    (acc, cur) => (acc += cur.price * cur.quantity),
    0
  );

  function handleUpdateQuantity(id, quantity) {
    const updatedItems = state.cartItems.map((product) => {
      if (product.id === id) {
        product.quantity = Number(quantity);
      }
    });

    dispatch({ type: "updateQuantity", payload: updatedItems });
  }

  return (
    <CartContext.Provider
      value={{
        cartItems: state.products,
        totalPrice,
        handleUpdateQuantity,
      }}>
      {children}
    </CartContext.Provider>
  );
}
