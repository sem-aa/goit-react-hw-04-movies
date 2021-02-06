import React from "react";
import { searchReviews } from "../Api/api-service";
import s from "./Reviews.module.css";

class Reviews extends React.Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const respone = await searchReviews(this.props.match.params.movieId);
    this.setState({ reviews: respone.data.results });
  }

  render() {
    return (
      <>
        {this.state.reviews.length > 0 ? (
          <ul className={s.list}>
            {" "}
            {this.state.reviews.map((review) => (
              <li key={review.id}>
                <h3>Author: {review.author}</h3>
                <p className={s.text}> {review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <h1> This film has not been reviewed</h1>
        )}
      </>
    );
  }
}

export default Reviews;
