import Link from "next/link";
import styles from "./PurchaseCard.module.css";

const PurchaseCard = () => {
  return (
    <section>
      <div>
        <div>
          <h4>Order Your Fruit Baskets Now</h4>
          <p style={{ fontSize: "1rem" }}>
            Get access to our delicious fruit baskets and enhance your workplace
            wellness.
          </p>
        </div>
      </div>
      <Link href="/pricing" className={styles.primaryButton}>
        Purchase
      </Link>
    </section>
  );
};
export default PurchaseCard;
