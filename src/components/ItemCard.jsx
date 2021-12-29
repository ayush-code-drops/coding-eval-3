import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cart/action";
import styles from "./styles.module.css";
export function ItemCard({ data }) {
  const [qty, setQty] = useState(0);
  const dispatch = useDispatch();
  //console.log(list)

  const handleAdd = (item) => {
    const action = addItem(item);
    dispatch(action);
  };
  return (
    <div className={styles.card}>
      <div>
        <img
          className={styles.img}
          src={data.image}
          alt="food img"
          height="50px"
        />
        <h3>{data.name}</h3>
      </div>
      <div>
        <h4>Price: {data.price}</h4>
        <div>
          <button onClick={() => setQty(qty + 1)}>+</button>
          Quantity: {qty}
          <button onClick={() => (qty !== 0 ? setQty(qty - 1) : setQty(qty))}>
            -
          </button>
        </div>
        <button onClick={() => handleAdd(data)}>Add</button>
      </div>
    </div>
  );
}
