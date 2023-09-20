import { createContext } from "react";

const context = createContext({
  items: [],
  totalAmount: 0,
  totalPrice: 0,
  addItem: () => {},
  removeItem: (id) => {}
});

export default context;
