import { useState, useEffect } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import styles from "./style.module.scss";

export const HomePage = () => {
   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState([]);
   const [isModalOpen, setIsModalOpen] = useState(false);

   useEffect(() => {
      const loadProducts = async () => {
         try {
            const response = await fetch("./db.json");
            const data = await response.json();


            setProductList(data);

         } catch (error) {
            console.error("Erro ao buscar produtos:", error);
         }
      };


      loadProducts();

   }, []);

   const addToCart = (productToAdd) => {
      const productExists = cartList.find(
         (product) => product.id === productToAdd.id
      );

      if (productExists) {
         console.log("Este produto já foi adicionado.");
         alert("Este produto já foi adicionado ao carrinho.");
      } else {
         setCartList([...cartList, productToAdd]);
      }
   };
   const removeFromCart = (productIdToRemove) => {
      const newCartList = cartList.filter(
         (product) => product.id !== productIdToRemove
      );
      setCartList(newCartList);
   };

   const removeAllFromCart = () => {
      setCartList([]);
   };

   const openModal = () => {
      setIsModalOpen(true);
   };

   const closeModal = () => {
      setIsModalOpen(false);
   };

   return (
      <>
         <Header openModal={openModal} />
         <main className={styles.mainContainer}>
            <ProductList productList={productList} addToCart={addToCart} />

            {isModalOpen ? (
               <CartModal
                  cartList={cartList}
                  removeFromCart={removeFromCart}
                  removeAllFromCart={removeAllFromCart}
                  closeModal={closeModal}
               />
            ) : null}
         </main>
      </>
   );
};
