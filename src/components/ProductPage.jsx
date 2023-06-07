import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import "./Product.css";
import styles from "./Button.module.css";
import { CiShoppingTag } from "react-icons/ci";
import Reviews from "./Reviews";
import { CartContext } from "./CartProvider";

export default function SingleProduct() {
  const { addToCart } = useContext(CartContext);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    async function getData(url) {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(url);
        const json = await response.json();

        setData(json);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getData(`https://api.noroff.dev/api/v1/online-shop/${id}`);
  }, [id]);

  if (isLoading || !data) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  console.log(data);

  const diff = data.price - data.discountedPrice;

  const title = data.title;
  const discountedPrice = data.discountedPrice;

  return (
    <div id={id}>
      <h1 className="product-title">{data.title}</h1>
      <div className="single-product-card">
        <img src={data.imageUrl} alt={data.title} />
        <div>
          <p>{data.description}</p>
          <p className="price-text">
            <CiShoppingTag size={22} className="price-icon" />{" "}
            {data.discountedPrice} NOK
          </p>
          <p className="sale-text">
            {data.discountedPrice === data.price
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
          {data.reviews.length === 0
            ? "This item has no reviews yet!"
            : `Reviews`}
        </h2>
        <Reviews reviews={data.reviews} />
      </div>
    </div>
  );
}
