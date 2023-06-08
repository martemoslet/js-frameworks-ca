export default function Review({ username, description, rating }) {
  return (
    <div className="review-container">
      <h3>{username}</h3>
      <p>{description}</p>
      <p className="rating">Rating: {rating}</p>
    </div>
  );
}
