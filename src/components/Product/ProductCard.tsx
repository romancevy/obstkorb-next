import Link from "next/link";
import styles from "./Product.module.css";
import { Product } from "@/types";

type ProductProps = {
  product: Product;
};

//! TODO: fix image size

const ProductCard = ({ product }: ProductProps) => {
  return (
    <article className={styles.productCard}>
      <Link href={`/products/${product.slug}`} passHref>
        <img src={`/assets/${product.slug}.jpg`} alt={product.name} />
      </Link>
      <header>
        <p>{product.name}</p>
      </header>
      <footer>
        <Link href={`/products/${product.slug}`} className={styles.more}>
          See More
        </Link>
        <div>
          <span className={styles.pill}>{product.label}</span>
        </div>
      </footer>
    </article>
  );
};
export default ProductCard;
