import React from "react";
import { searchMovies } from "../Api/api-service";
import { NavLink } from "react-router-dom";
import s from "./MoviesPage.module.css";
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
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            type="text"
            name="query"
            value={this.state.query}
            onChange={this.handleQuery}
            placeholder="Search movies"
          />
        </form>
        {this.state.submit !== "" && (
          <ul className={s.item}>
            {this.state.movies.map((movie) => (
              <li key={movie.id}>
                <NavLink
                  className={s.item}
                  activeClassName={s.ItemActive}
                  to={`${this.props.match.url}/${movie.id}`}
                >
                  {movie.title}
                </NavLink>{" "}
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default MoviesPage;
