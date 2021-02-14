import React from "react";
import { searchMovieInfo } from "../Api/api-service";
import s from "./MovieDetailsPage.module.css";
import routes from "../routes";
import PropTypes from "prop-types";
import InfoCastReview from "../component/InfoCastReviews/InfoCastReview";
import Button from "../component/Button/Button";
import MovieInfo from "../component/MovieInfo/MovieInfo";

class MovieDetailsPage extends React.Component {
  state = {
    title: "",
    poster_path: "",
    overview: "",
    genres: [],
    vote_average: null,
    id: null,
  };

  componentDidMount() {
    const respone = searchMovieInfo(this.props.match.params.movieId);
    this.setState({ ...respone.data });
  }

  handleGoBack = () => {
    const { location, history } = this.props;

    history.push(location?.state?.from || routes.home);
  };

  render() {
    const { poster_path, title, vote_average, overview, genres } = this.state;
    const { url, path } = this.props.match;

    return (
      <>
        <Button onClick={this.handleGoBack} />
        <MovieInfo
          poster_path={poster_path}
          title={title}
          vote_average={vote_average}
          overview={overview}
          genres={genres}
        />
        <InfoCastReview
          url={url}
          path={path}
          location={this.props.location.state?.from}
        />
      </>
    );
  }
}

MovieDetailsPage.propTypes = {
  title: PropTypes.string,
  poster_path: PropTypes.string,
  overview: PropTypes.string,
  genres: PropTypes.array,
  vote_average: PropTypes.number,
  id: PropTypes.number,
};

export default MovieDetailsPage;
