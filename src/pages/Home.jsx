import { useEffect } from 'react';
import ProductList from '../components/ProductList';
import { useLocalStorage } from '../hooks/useLocalStorage';

const url = 'https://api.noroff.dev/api/v1/online-shop';

export default function Home() {
    const [products, setProducts] = useLocalStorage("products", []);

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