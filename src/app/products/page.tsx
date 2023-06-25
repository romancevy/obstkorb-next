import ProductCard from "@/components/Product/ProductCard";
import { supabase } from "@/supabase";

const getData = async () => {
  const { data, error } = await supabase.from("product").select("*");
  if (error) {
    throw new Error("Failed to fetch data from database");
  }
  return data;
};

const ProductsPage = async () => {
  const data = await getData();

  return (
    <>
      <div className="section bg-blue">
        <div className="container">
          <div className="section-intro">
            <h1>The latest products</h1>
          </div>
        </div>
      </div>

      <div className="section small">
        <div className="container">
          <ul className="product-card-grid">
            {data.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default ProductsPage;
