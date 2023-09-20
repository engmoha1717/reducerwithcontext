import { useReducer } from "react";
import context from "./context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
  totalPrice: 0
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    //const updatedTotalPrice = action.item.price + action.item.price;
    const updatedTotalPrice = state.totalPrice + action.item.price;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      totalPrice: updatedTotalPrice
    };
  }

  return defaultCartState;
};
const ContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    totalPrice: cartState.totalPrice,
    addItem: addItemToCartHandler,
    removeItem: (id) => {}
  };

  return (
    <context.Provider value={cartContext}>{props.children}</context.Provider>
  );
};

export default ContextProvider;
