import Image from "next/image";
import Link from "next/link";
import heroImg from "../../public/assets/hero.svg";

export default function Home() {
  return (
    <section className="grid-half h-screen-navbar">
      <article className="bg-teal border-right">
        <div className="column-padding">
          <div className="tablet-centered">
            <div className="content-grid home-hero">
              <h1>
                The <br /> freshest <br />
                fruits.
              </h1>
              <p className="section-subtitle">
                Sow the Seeds of Wellness in Your Office with Vibrant Fruit
                Baskets!
              </p>
              <Link href="/products" className="large-button">
                <div className="large-button-text">Explore Products</div>
              </Link>
            </div>
          </div>
        </div>
      </article>
      <div className="bg-salmon">
        <div className="column-padding centered">
          <div className="callout-wrap">
            <Image
              src={heroImg}
              alt="hero image"
              className="fancy-image"
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
}
