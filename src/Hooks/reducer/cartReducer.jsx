import { addToCart } from "./Helper";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        items: addToCart(state.items, action.payload),
      };
    default:
      return state;
  }
};
