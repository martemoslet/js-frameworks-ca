import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./Product.css"
import styles from "./Button.module.css";

export default function SingleProduct() {
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

    const diff = data.price - data.discountedPrice

    return (
      <div className='product-container'>
        <div className='card'>
        <h1>{data.title}</h1>
        <img src={data.imageUrl} alt={data.title} />
        <p>{data.description}</p>
        <p>Price: {data.discountedPrice} NOK</p>
        <p>{data.discountedPrice === data.price ? "" : `Save ${diff} NOK`}</p>
        <button className={styles.primary}>Add to bag</button>
      </div>
      </div>

    );
  }