import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import { useLocalStorage } from "../hooks/useLocalStorage";
import SearchBar from "../components/Search";
import SearchList from "../components/SearchList";

const url = "https://api.noroff.dev/api/v1/online-shop";

export default function Home() {
  const [products] = useLocalStorage("products", []);

  useEffect(() => {
    async function getData() {
      const response = await fetch(url);
      const json = await response.json();
      //setProducts(json);
    }
    getData();
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
