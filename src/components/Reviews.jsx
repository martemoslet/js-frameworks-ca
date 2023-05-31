import Review from "./Review"

export default function Reviews({ reviews }) {
    return reviews && reviews.map((review) =>((<Review key={review.id} {...review} />)))}