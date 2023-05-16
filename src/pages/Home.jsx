// import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../components/ProductList';

const url = 'https://api.noroff.dev/api/v1/online-shop';

export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch(url);
            const json = await response.json();
            setProducts(json);
        }
        getData();
    }, []);

    return (
       <ProductList products={products} />
        );
}