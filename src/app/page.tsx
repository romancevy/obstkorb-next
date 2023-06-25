import Image from "next/image";
import Link from "next/link";
import heroImg from "../../public/assets/obst.png";
import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.container}>
      <article className={styles.tealContainer}>
        <h1>
          The <br /> freshest <br />
          fruits.
        </h1>
        <p className="section-subtitle">
          Sow the Seeds of Wellness in Your Office with Vibrant Fruit Baskets!
        </p>
        <Link href="/products" className={styles.largeButton}>
          Explore Products
        </Link>
      </article>
      <div className={styles.salmonContainer}>
        <Image
          src={heroImg}
          alt="hero image"
          className={styles.heroImg}
        ></Image>
      </div>
    </section>
  );
}
