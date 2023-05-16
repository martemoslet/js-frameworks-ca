// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { Product } from './Product';

export default function ProductList({ products }) {
    return (
        <div>
            {products && products.length && products.map((productData) =>
            ((<Product key={productData.id} productData={productData} />)))}
        </div>
        );
}