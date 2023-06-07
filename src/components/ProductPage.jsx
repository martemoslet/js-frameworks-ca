import { useContext } from "react";
import "./Product.css";
import styles from "./Button.module.css";
import { CiShoppingTag } from "react-icons/ci";
import Reviews from "./Reviews";
import { CartContext } from "./CartProvider";

export default function SingleProduct({ id, title, imageUrl, description, discountedPrice, price, reviews }) {
  const { addToCart } = useContext(CartContext);
  
  const diff = price - discountedPrice;

  return (
    <div id={id}>
      <h1 className="product-title">{title}</h1>
      <div className="single-product-card">
        <img src={imageUrl} alt={title} />
        <div>
          <p>{description}</p>
          <p className="price-text">
            <CiShoppingTag size={22} className="price-icon" />{" "}
            {discountedPrice} NOK
          </p>
          <p className="sale-text">
            {discountedPrice === price
              ? ""
              : `This item is no sale! Save ${diff} NOK`}
          </p>
          <button
            className={styles.secondary}
            onClick={() => addToCart({ id, title, discountedPrice })}
          >
            Add to bag
          </button>
        </div>
      </div>
      <div className="reviews">
        <h2>
          {reviews?.length === 0
            ? "This item has no reviews yet!"
            : `Reviews`}
        </h2>
        <Reviews reviews={reviews} />
      </div>
    </div>
  );
}
