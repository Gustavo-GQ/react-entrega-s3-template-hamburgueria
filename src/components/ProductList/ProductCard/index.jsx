import styles from "./style.module.scss";


export const ProductCard = ({ product, addToCart }) => {
    return(
        <li className={styles.productCard}>
            <img src={product.img} alt={product.name} />
            <div className={styles.content}>
                <h3>{product.name}</h3>
                <span className={styles.category}>{product.category}</span>
                <span className={styles.price}>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                <button className="btn btn-secondary" onClick={() => addToCart(product)}>Adicionar</button>
            </div>
        </li>
    )
}