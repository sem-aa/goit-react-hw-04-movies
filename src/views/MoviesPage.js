import React from "react";
import { searchMovies } from "../Api/api-service";
import MoviesList from "../component/MoviesList/MoviesList";
import { getQueryParams } from "../component/utils/queryString";
import PropTypes from "prop-types";
import Form from "../component/Form/Form";

class MoviesPage extends React.Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);
    if (query) {
      this.fetchMovies(query);
    }
  }

  componentDidUpdate() {
    const { query } = getQueryParams(this.props.location.search);
    if (query) {
      this.fetchMovies(query);
    }
  }

  async fetchMovies(query) {
    const respone = await searchMovies(query);
    this.setState({ movies: respone.data.results });
  }

  submitForm = (query) => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${query}`,
    });
  };

  render() {
    return (
      <>
        <Form onSubmit={this.submitForm} />
        {this.state.movies.length > 0 && (
          <MoviesList
            movies={this.state.movies}
            location={this.props.location}
          />
        )}
      </>
    );
  }
}

MoviesPage.propTypes = {
  movies: PropTypes.array,
};

export default MoviesPage;
