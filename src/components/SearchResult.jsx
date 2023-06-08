import { Link } from "react-router-dom";

const SingleSearchResult = ({ searchResult }) => {
  return (
    <div className="search-result">
      <Link to={`/productPage/${searchResult.id}`}>{searchResult.title}</Link>
    </div>
  );
};
export default SingleSearchResult;
