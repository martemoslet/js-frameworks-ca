import { Link } from "react-router-dom";
import "./Product.css";
import styles from "./Button.module.css";

export function Product({ productData }) {
  return (
    <div className="card">
      <img src={productData.imageUrl} alt={productData.title} />
      <p>{productData.title}</p>
      <Link to={`/productPage/${productData.id}`}>
        <button className={styles.primary}>View product</button>
      </Link>
    </div>
  );
}
