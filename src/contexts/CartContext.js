import { createContext, useContext } from "react";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "updateQuantity":
      return {
        ...state,
        cartItems: action.payload,
      };

    default:
      throw new Error("Unknown action type");
  }
};

export const CartContext = createContext();

export const useCart = () => {
  const cartCtx = useContext(CartContext);

  if (cartCtx === undefined)
    throw new Error("Cart Context is used outside the Cart Provider");

  return cartCtx;
};
