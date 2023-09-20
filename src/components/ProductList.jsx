import { useContext, useState } from "react";
//import { useNavigate } from "react-router-dom";
import styles from "./productlist.module.css";
import context from "../context/context";
function ProductList({ id, name, price, description, quantity }) {
  // const [cart, setCart] = useState([]);

  const ctrContex = useContext(context);
  const addToCart = (product) => {
    const newItems = ctrContex.addItem({
      id: id,
      name: name,
      price: price
    });
    // const cartItem = {
    //   id,
    //   name,
    //   price
    // };

    console.log(newItems);
    //setCart(cartItem)
  };
  return (
    <div className={styles.productList}>
      <div key={id} className={styles.productItem}>
        <h3 className={styles.productName}>{name}</h3>
        <p className={styles.productPrice}>Price: ${price}</p>
        <p className={styles.productDescription}>{description}</p>
        <button className={styles.addButton} onClick={() => addToCart()}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
export default ProductList;
