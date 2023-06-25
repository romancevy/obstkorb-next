import Link from "next/link";
import styles from "./Product.module.css";

const ProductCard = ({ product }) => {
  return (
    <article className={styles.productCard}>
      <Link href={`/products/${product.slug}`}>
        <img src={`/assets/${product.slug}.png`} alt={product.name} />
      </Link>
      <header>
        <p>{product.name}</p>
      </header>
      <footer>
        <Link href={`/products/${product.slug}`} className="more">
          See More
        </Link>
        <div>
          <span className="pill">{product.category}</span>
        </div>
      </footer>
    </article>
  );
};
export default ProductCard;
