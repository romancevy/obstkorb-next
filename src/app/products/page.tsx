import styles from "./page.module.css";
import ProductCard from "@/components/Product/ProductCard";
import { supabase } from "@/supabase";
import { Product } from "@/types";

const getData = async () => {
  const { data: products, error } = await supabase.from("product").select("*");
  if (error) {
    throw new Error("Failed to fetch data from database");
  }
  return products;
};

const ProductsPage = async () => {
  const products: Product[] = await getData();

  return (
    <>
      <div className={styles.section}>
        <h1>Our Assortment</h1>
      </div>
      <div className={styles.sectionSmall}>
        <ul className={styles.productCardGrid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </>
  );
};
export default ProductsPage;
