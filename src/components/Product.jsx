import { Link } from 'react-router-dom';

export function Product({ productData }) {
    return (
        <div className="product">
            <h2>{productData.title}</h2>
                   <img src={productData.imageUrl} />
                   <p>{productData.description}</p>
                   <Link to="../pages/productPage">
                       <button>View product</button>
                   </Link>

        </div>
    )
}