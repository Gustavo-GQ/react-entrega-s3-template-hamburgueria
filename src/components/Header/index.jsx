import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "./style.module.scss";

export const Header = ({ openModal }) => {
   const [value, setValue] = useState("");

   return (
      <header className={styles.header}>
         <div className={styles.headerContent}>
            <img src={Logo} alt="Logo Kenzie Burguer" />
            <div>
               <button className={styles.cartButton} onClick={openModal}>
                  <MdShoppingCart size={21} />
                  <span className={styles.cartCounter}>0</span>
               </button>
               <form className={styles.searchForm}>
                  <input
                     type="text"
                     value={value}
                     onChange={(e) => setValue(e.target.value)}
                  />
                  <button type="submit">
                     <MdSearch size={21} />
                  </button>
               </form>
            </div>
         </div>
      </header>
   );
};
