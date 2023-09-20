import { useContext } from "react";
import context from "../context/context";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
const Navbar = () => {
  const ctrContext = useContext(context);
  const totalCart = ctrContext.items.length;
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
          <NavLink
            exact
            to="/"
            className={styles.navbarLink}
            activeClassName={styles.active}
          >
            Home
          </NavLink>
        </li>
        <li className={styles.navbarItem}>
          <NavLink
            to="/products"
            className={styles.navbarLink}
            activeClassName={styles.active}
          >
            Products
          </NavLink>
        </li>
        <li className={styles.navbarItem}>
          <NavLink
            to="/cart"
            className={styles.navbarLink}
            activeClassName={styles.active}
          >
            Cart ({totalCart})
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
