import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
//import { useLocalStorage } from "../hooks/useLocalStorage";
import SearchBar from "../components/Search";
import SearchList from "../components/SearchList";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.noroff.dev/api/v1/online-shop")
    .then(res => res.json())
    .then(products => setProducts(products))
  }, []);

  const [searchResults, setSearchResults] = useState([]);

  return (
    <>
      <div className="search">
        <SearchBar setSearchResults={setSearchResults} />
        <SearchList searchResults={searchResults} />
      </div>
      <ProductList products={products} />
    </>
  );
}
