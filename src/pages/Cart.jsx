import { useContext } from "react";
import context from "../context/context";

function Cart() {
  const ctrContext = useContext(context);
  const tP = ctrContext.totalPrice;

  const items = ctrContext.items;
  let cL = items.length;

  if (cL === 0) {
    return <h3>no cart items yet</h3>;
  }
  return (
    <div>
      {items.map((item) => (
        <>
          <h2>{item.name}</h2>,<h2>{item.price}</h2>
          <h1>${tP}</h1>
        </>
      ))}
    </div>
  );
}
export default Cart;
