import PurchaseCard from "@/components/Purchase/PurchaseCard";
import { supabase } from "@/supabase";
import Image from "next/image";

export async function generateStaticParams() {
  const { data: products } = await supabase.from("product").select("slug");
  return products;
}

async function getProduct(params) {
  const slug = params.slug;

  const { data: product } = await supabase
    .from("product")
    .select("*")
    .eq("slug", slug)
    .single();

  return product;
}

const ProductDetailsPage = async ({ params }: { params: { slug: string } }) => {
  const product = await getProduct(params);
  //   console.log(product);
  return (
    <section className="product-section">
      <article className="product">
        <div className="product-wrap">
          <Image
            src={`/assets/${product.slug}.jpg`}
            width={1000}
            height={300}
            alt={product.name}
          />
        </div>
        <section>
          <header>
            <h3>{product.name}</h3>
          </header>
          <section>
            <div>
              <p>{product.description}</p>
            </div>
          </section>
        </section>
        <PurchaseCard />
      </article>
    </section>
  );
};
export default ProductDetailsPage;
