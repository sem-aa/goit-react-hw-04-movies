import React from "react";
import { searchReviews } from "../Api/api-service";
import s from "./Reviews.module.css";
import PropTypes from "prop-types";

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
            <h3>Отзывы на этот фильм есть только на английском языке</h3>{" "}
            {this.state.reviews.map((review) => (
              <li key={review.id}>
                <h3>Автор: {review.author}</h3>
                <p className={s.text}> {review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <h1>На этот фильм нет отзывов</h1>
        )}
      </>
    );
  }
}

Reviews.propTypes = {
  reviews: PropTypes.array,
};

export default Reviews;
