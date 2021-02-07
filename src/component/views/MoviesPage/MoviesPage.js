import React from "react";
import { searchMovies } from "../Api/api-service";
import MoviesList from "../MoviesList/MoviesList";
import s from "./MoviesPage.module.css";
import PropTypes from "prop-types";

class MoviesPage extends React.Component {
  state = {
    movies: [],
    input: "",
    query: "",
    submit: "",
  };
  async componentDidUpdate() {
    const respone = await searchMovies(this.state.submit);
    this.setState({ movies: respone.data.results });
  }

  handleQuery = (event) => {
    this.setState({ query: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ submit: this.state.query });
  };

  render() {
    return (
      <>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>Искать</span>
          </button>

          <input
            className={s.input}
            type="text"
            name="query"
            value={this.state.query}
            onChange={this.handleQuery}
            placeholder="Найти фильм"
          />
        </form>
        {this.state.submit !== "" && <MoviesList movies={this.state.movies} />}
      </>
    );
  }
}

MoviesPage.propTypes = {
  movies: PropTypes.array,
  input: PropTypes.string,
  query: PropTypes.string,
  submit: PropTypes.string,
};

export default MoviesPage;
