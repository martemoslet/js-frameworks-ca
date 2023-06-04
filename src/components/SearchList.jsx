import SingleSearchResult from "./SearchResult";

const SearchList = ({ searchResults }) => {
    return <div className="search-list">
        {
            searchResults.map((searchResult, id) => {
                return <SingleSearchResult key={id} searchResult={searchResult} />
            })
        }
    </div>
}
export default SearchList;