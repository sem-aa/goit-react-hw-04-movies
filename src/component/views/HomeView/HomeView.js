import React from "react";
import { getTrendigMovie } from "../Api/api-service";
import MoviesList from "../MoviesList/MoviesList";
import PropTypes from "prop-types";

class HomeView extends React.Component {
  state = {
    movies: [],
  };
  async componentDidMount() {
    const respone = await getTrendigMovie();

    this.setState({ movies: respone.data.results });
  }

  render() {
    return (
      <>
        <h2>Топ недели</h2>
        <MoviesList movies={this.state.movies} />
      </>
    );
  }
}

HomeView.propTypes = {
  movies: PropTypes.array,
};

export default HomeView;
