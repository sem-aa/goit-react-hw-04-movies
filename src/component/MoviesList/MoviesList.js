import { NavLink, withRouter } from "react-router-dom";
import s from "./MoviesList.module.css";
import PropTypes from "prop-types";

const MoviesList = ({ movies, location }) => {
  return (
    <ul className={s.item}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <NavLink
            className={s.item}
            activeClassName={s.ItemActive}
            to={{
              pathname: `/movies/${movie.id}`,
              state: {
                from: location,
              },
            }}
          >
            {movie.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array,
  location: PropTypes.object,
};

export default withRouter(MoviesList);
