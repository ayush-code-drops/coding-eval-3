import { Link } from "react-router-dom";
import styles from "./styles.module.css";
function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.links} to="/">
        Home
      </Link>
      <Link to="/checkout">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Shopping_cart_icon.svg/1200px-Shopping_cart_icon.svg.png"
          alt="cart"
          height="30px"
        />
      </Link>
    </nav>
  );
}

export { Navbar };
