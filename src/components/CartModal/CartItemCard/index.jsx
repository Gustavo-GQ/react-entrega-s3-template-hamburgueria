import { MdDelete } from "react-icons/md";
import styles from "./style.module.scss";

export const CartItemCard = ({ product, removeFromCart,  }) => {
   return (
      <li className={styles.cartItem}>
         <div className={styles.itemInfo}>
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
         </div>
         <button className={styles.deleteButton} aria-label="delete" title="Remover item" onClick={() => removeFromCart(product.id)}>
            <MdDelete size={21} />
         </button>
      </li>
   );
};
