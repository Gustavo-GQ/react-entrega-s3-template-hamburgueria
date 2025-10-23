import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styles from "./style.module.scss";

export const CartModal = ({ cartList, removeFromCart, removeAllFromCart, closeModal }) => {
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   return (
      <div role="dialog" className={styles.modalOverlay}>
         <div className={styles.cartBox}>
            <div className={styles.header}>
               <h2>Carrinho de compras</h2>
               <button className={styles.closeButton} aria-label="close" title="Fechar" onClick={closeModal}>
                  <MdClose size={21} />
               </button>
            </div>
            <div className={styles.body}>
               <ul>
                  {cartList.map((product) => (
                     <CartItemCard key={product.id} product={product} removeFromCart={removeFromCart} />
                  ))}
               </ul>
            </div>
            <div className={styles.footer}>
               <div className={styles.totalBox}>
                  <span className={styles.totalLabel}>Total</span>
                  <span className={styles.totalPrice}>{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
               </div>
               <button className={`btn btn-secondary ${styles.btnFullWidth}`} onClick={removeAllFromCart}>Remover todos</button>
            </div>
         </div>
      </div>
   );
};
