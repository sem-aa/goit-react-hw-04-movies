import React from "react";
import { NavLink } from "react-router-dom";
import { getTrendigMovie } from "../Api/api-service";
import s from "./HomeView.module.css";

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
        <h2 className={s.title}>Trends of the week</h2>
        <ul className={s.item}>
          {this.state.movies.map((movie) => (
            <li key={movie.id}>
              <NavLink
                className={s.item}
                activeClassName={s.ItemActive}
                to={`/movies/${movie.id}`}
              >
                {movie.original_title}
              </NavLink>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomeView;
