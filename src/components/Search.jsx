import { useState } from "react";

const SearchBar = ({setSearchResults}) => {
    const [searchInput, setSearchInput] = useState("");

    const fetchData = (value) => {
        fetch("https://api.noroff.dev/api/v1/online-shop").then((response) => response.json()).then((json) => {
            const searchResults = json.filter((products) => {
                return (
                    value &&
                    products && 
                    products.title &&
                    products.title.toLowerCase().includes(value)
                    );
            });
            setSearchResults(searchResults);
        });
    }

    const handleChange = (value) => {
        setSearchInput(value);
        fetchData(value);
      };

      return (
        <div className="search-bar">
            <form>
                <input type="search" placeholder="Search the page" onChange={(e) => handleChange(e.target.value)}
                value={searchInput} />
            </form>
        </div>
      )
}
export default SearchBar;