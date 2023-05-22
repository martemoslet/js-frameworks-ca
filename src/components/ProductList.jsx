import { Product } from './Product';

export default function ProductList({ products }) {
    return (
            <div className='product-container'>
            {products && products.length && products.map((productData) =>
            ((<Product key={productData.id} productData={productData} />)))}
            </div>
            
        );
}