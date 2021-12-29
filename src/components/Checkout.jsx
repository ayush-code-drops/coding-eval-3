import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./styles.module.css";
function Checkout() {
  const items = useSelector((state) => state.items);
  const [qty, setQty] = useState(1);
  return (
    <div>
      {items?.map((item) => {
        return (
          <div className={styles.check}>
            <img className={styles.img} src={item.image} alt="img" />

            <h6>{item.name}</h6>
            <div>
              <button onClick={() => setQty(qty + 1)}>+</button>
              Quantity: {qty}
              <button
                onClick={() => (qty !== 0 ? setQty(qty - 1) : setQty(qty))}
              >
                -
              </button>
            </div>
            <h5> Unit Price:{item.price}</h5>
            <h5> Total:{Number(item.price) * qty}</h5>
          </div>
        );
      })}
    </div>
  );
}
export default Checkout;
