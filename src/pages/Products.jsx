import ProductList from "../components/ProductList";
import styles from "./prod.module.css";
function Products({ products }) {
  return (
    <div className={styles.prod}>
      {products.map((product) => (
        <ProductList
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          description={product.description}
        />
      ))}
    </div>
  );
}
export default Products;
